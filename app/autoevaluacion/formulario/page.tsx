'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  SST_ITEMS,
  CICLOS,
  calcularPuntaje,
  calcularNivel,
  type RespuestaItem,
} from '@/lib/sst-items';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, AlertTriangle, Mail, MessageCircle } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────
interface EmpresaData {
  nombre: string;
  nit: string;
  sector: string;
  responsable: string;
  cargo: string;
  email: string;
  telefono: string;
  trabajadores: string;
}

const SECTORES = [
  'Manufactura', 'Construcción', 'Comercio', 'Servicios', 'Salud',
  'Educación', 'Transporte', 'Agropecuario', 'Minería', 'Tecnología', 'Otro',
];

const CICLO_ICONS = ['📋', '⚙️', '✅', '🔄'];
// Steps: 0-3 = ciclos PHVA, 4 = resultados + registro
const TOTAL_STEPS = 5;

// ─── Item row component ───────────────────────────────────────────────────────
function ItemRow({
  item,
  respuesta,
  onChange,
}: {
  item: (typeof SST_ITEMS)[0];
  respuesta: RespuestaItem | undefined;
  onChange: (id: string, r: RespuestaItem) => void;
}) {
  const opts: { value: RespuestaItem['estado']; label: string; color: string }[] = [
    { value: 'cumple', label: 'Cumple', color: 'green' },
    { value: 'no_cumple', label: 'No cumple', color: 'red' },
    { value: 'no_aplica_j', label: 'N/A Justificado', color: 'blue' },
    { value: 'no_aplica_nj', label: 'N/A Sin justificar', color: 'orange' },
  ];

  return (
    <div className="bg-white/3 border border-white/8 rounded-xl p-4 space-y-3 hover:border-white/15 transition-colors">
      <div className="flex items-start gap-3">
        <span className="shrink-0 text-xs font-mono bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded-md mt-0.5">
          {item.id}
        </span>
        <div className="flex-1">
          <p className="text-slate-200 text-sm leading-relaxed">{item.descripcion}</p>
          <p className="text-slate-500 text-xs mt-1">Valor: {item.valor} puntos</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {opts.map((o) => {
          const selected = respuesta?.estado === o.value;
          const colors = {
            green: selected ? 'bg-green-600 border-green-500 text-white' : 'border-green-800/40 text-green-400 hover:border-green-600',
            red: selected ? 'bg-red-600 border-red-500 text-white' : 'border-red-800/40 text-red-400 hover:border-red-600',
            blue: selected ? 'bg-violet-600 border-violet-500 text-white' : 'border-violet-800/40 text-violet-400 hover:border-violet-600',
            orange: selected ? 'bg-orange-600 border-orange-500 text-white' : 'border-orange-800/40 text-orange-400 hover:border-orange-600',
          };
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onChange(item.id, { ...respuesta, estado: o.value })}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-all font-medium ${colors[o.color as keyof typeof colors]}`}
            >
              {o.label}
            </button>
          );
        })}
      </div>

      <input
        type="text"
        placeholder="Observación (opcional)"
        value={respuesta?.observacion ?? ''}
        onChange={(e) =>
          onChange(item.id, { estado: respuesta?.estado ?? null, observacion: e.target.value })
        }
        className="w-full bg-white/3 border border-white/8 rounded-lg px-3 py-2 text-slate-300 placeholder:text-slate-600 text-xs focus:outline-none focus:border-violet-500/50 transition-colors"
      />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function FormularioPage() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [empresa, setEmpresa] = useState<EmpresaData>({
    nombre: '', nit: '', sector: '', responsable: '',
    cargo: '', email: '', telefono: '', trabajadores: '',
  });
  const [respuestas, setRespuestas] = useState<Record<string, RespuestaItem>>({});
  const [envio, setEnvio] = useState<'email' | 'whatsapp' | 'ambos'>('email');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const setResp = useCallback((id: string, r: RespuestaItem) => {
    setRespuestas((prev) => ({ ...prev, [id]: r }));
  }, []);

  const puntaje = calcularPuntaje(respuestas);
  const nivel = calcularNivel(puntaje);
  const nivelColor = nivel === 'CRÍTICO' ? 'red' : nivel === 'MODERADO' ? 'yellow' : 'green';

  // Steps 0-3 = ciclos PHVA
  const currentCiclo = step <= 3 ? CICLOS[step] : null;
  const currentItems = currentCiclo ? SST_ITEMS.filter((i) => i.ciclo === currentCiclo) : [];
  const itemsByEstandar = currentItems.reduce(
    (acc, item) => {
      if (!acc[item.estandar]) acc[item.estandar] = [];
      acc[item.estandar].push(item);
      return acc;
    },
    {} as Record<string, typeof SST_ITEMS>
  );

  function validateStep(): string {
    if (step <= 3) {
      const unanswered = currentItems.filter((i) => !respuestas[i.id]?.estado);
      if (unanswered.length > 0) return `Faltan ${unanswered.length} ítems por responder`;
    }
    if (step === 4) {
      if (!empresa.nombre) return 'Ingresa el nombre de la empresa';
      if (!empresa.nit) return 'Ingresa el NIT';
      if (!empresa.sector) return 'Selecciona el sector';
      if (!empresa.responsable) return 'Ingresa el responsable SG-SST';
      if (envio !== 'whatsapp' && !empresa.email) return 'Ingresa el correo para enviarte los resultados';
      if (envio !== 'email' && !empresa.telefono) return 'Ingresa el teléfono para enviarte los resultados por WhatsApp';
    }
    return '';
  }

  function next() {
    const err = validateStep();
    if (err) { setError(err); return; }
    setError('');
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function prev() {
    setError('');
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleSubmit() {
    const err = validateStep();
    if (err) { setError(err); return; }
    setSubmitting(true);
    setError('');
    try {
      const docRef = await addDoc(collection(db, 'evaluaciones'), {
        empresa,
        respuestas,
        puntaje,
        nivel,
        envio,
        createdAt: serverTimestamp(),
      });

      // Send email if requested (non-blocking — don't fail the form if email fails)
      if (envio === 'email' || envio === 'ambos') {
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ empresa, respuestas, puntaje, nivel, evaluacionId: docRef.id }),
        }).catch(console.error);
      }

      // Open WhatsApp if requested
      if (envio === 'whatsapp' || envio === 'ambos') {
        const msg = encodeURIComponent(
          `Hola HumanIA, acabo de completar mi Autoevaluación SG-SST.\n\n` +
          `*Empresa:* ${empresa.nombre}\n*NIT:* ${empresa.nit}\n` +
          `*Puntaje:* ${puntaje.toFixed(1)}% - Nivel ${nivel}\n\n` +
          `Quisiera recibir mis resultados completos y orientación sobre los próximos pasos.`
        );
        window.open(`https://wa.me/573102365931?text=${msg}`, '_blank');
      }

      router.push(`/autoevaluacion/resultado/${docRef.id}`);
    } catch {
      setError('Error al guardar. Intenta de nuevo.');
      setSubmitting(false);
    }
  }

  const progressPct = Math.round((step / (TOTAL_STEPS - 1)) * 100);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-slate-950/90 backdrop-blur border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="text-white font-bold text-lg tracking-tight shrink-0">
            Human<span className="text-violet-400">IA</span>
          </Link>

          <div className="flex-1 max-w-xs hidden sm:block">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>
                {step <= 3 ? `Ciclo ${step + 1} de 4: ${CICLOS[step]}` : 'Tus resultados'}
              </span>
              <span>{progressPct}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-violet-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {Object.keys(respuestas).length > 0 && (
            <div
              className={`text-xs font-semibold px-3 py-1 rounded-full border shrink-0 ${
                nivelColor === 'red'
                  ? 'bg-red-950/50 border-red-700/50 text-red-400'
                  : nivelColor === 'yellow'
                  ? 'bg-yellow-950/50 border-yellow-700/50 text-yellow-400'
                  : 'bg-green-950/50 border-green-700/50 text-green-400'
              }`}
            >
              {puntaje.toFixed(1)}% · {nivel}
            </div>
          )}
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Steps 0-3: Ciclos PHVA */}
        {step <= 3 && currentCiclo && (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{CICLO_ICONS[step]}</span>
                <h2 className="text-2xl font-bold text-white">{currentCiclo}</h2>
              </div>
              <p className="text-slate-400 text-sm">
                {currentItems.length} ítems · Selecciona para cada uno:{' '}
                <span className="text-green-400">Cumple</span>,{' '}
                <span className="text-red-400">No cumple</span>, o{' '}
                <span className="text-violet-400">No aplica</span>
              </p>
            </div>

            <div className="space-y-8">
              {Object.entries(itemsByEstandar).map(([estandar, items]) => (
                <div key={estandar}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-xs font-semibold text-violet-300 uppercase tracking-wider px-3">
                      {estandar}
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <div className="space-y-3">
                    {items.map((item) => (
                      <ItemRow
                        key={item.id}
                        item={item}
                        respuesta={respuestas[item.id]}
                        onChange={setResp}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Resultados + cómo recibir + registro */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">¡Cuestionario completado!</h2>
              <p className="text-slate-400 text-sm">Tu resultado preliminar está listo. Completa tus datos para recibir el informe completo.</p>
            </div>

            {/* Score card */}
            <div
              className={`rounded-2xl p-6 border ${
                nivelColor === 'red'
                  ? 'bg-red-950/40 border-red-800/40'
                  : nivelColor === 'yellow'
                  ? 'bg-yellow-950/40 border-yellow-800/40'
                  : 'bg-green-950/40 border-green-800/40'
              }`}
            >
              <p className="text-slate-400 text-xs mb-3 uppercase tracking-wider">Puntaje obtenido · Res. 0312 de 2019</p>
              <div className="flex items-end gap-3 mb-3">
                <span
                  className={`text-6xl font-black ${
                    nivelColor === 'red' ? 'text-red-400' : nivelColor === 'yellow' ? 'text-yellow-400' : 'text-green-400'
                  }`}
                >
                  {puntaje.toFixed(1)}
                </span>
                <span className="text-slate-400 text-xl mb-2">/ 100</span>
                <span
                  className={`mb-2 text-sm font-bold px-3 py-1 rounded-full ${
                    nivelColor === 'red'
                      ? 'bg-red-500/20 text-red-400'
                      : nivelColor === 'yellow'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-green-500/20 text-green-400'
                  }`}
                >
                  {nivel}
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    nivelColor === 'red' ? 'bg-red-500' : nivelColor === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${puntaje}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-600 mt-1">
                <span>0%</span><span className="text-red-500">60% Crítico</span>
                <span className="text-yellow-500">85% Moderado</span><span>100%</span>
              </div>

              {nivel === 'CRÍTICO' && (
                <div className="mt-4 flex gap-2 bg-red-950/50 border border-red-800/40 rounded-xl p-3">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-red-300 text-xs leading-relaxed">
                    Debes elaborar un Plan de Mejoramiento inmediato y ponerlo a disposición del Ministerio del Trabajo.
                  </p>
                </div>
              )}
            </div>

            {/* Delivery method */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-1">¿Cómo quieres recibir tus resultados?</h3>
              <p className="text-slate-400 text-xs mb-4">Te enviaremos el informe completo con el Plan de Mejoramiento en PDF</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {([
                  { id: 'email', icon: Mail, label: 'Por correo', desc: 'PDF completo a tu email' },
                  { id: 'whatsapp', icon: MessageCircle, label: 'Por WhatsApp', desc: 'Te contactamos por chat' },
                  { id: 'ambos', icon: CheckCircle2, label: 'Ambos', desc: 'Email + WhatsApp' },
                ] as const).map(({ id, icon: Icon, label, desc }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setEnvio(id)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all text-center ${
                      envio === id
                        ? 'bg-violet-600/30 border-violet-500 text-white'
                        : 'border-white/10 text-slate-400 hover:border-white/25'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${envio === id ? 'text-violet-300' : ''}`} />
                    <span className="font-semibold text-sm">{label}</span>
                    <span className="text-xs opacity-70">{desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Registration form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-1">Completa tu registro</h3>
              <p className="text-slate-400 text-xs mb-5">Para enviarte los resultados y guardar tu evaluación</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { k: 'nombre', label: 'Razón social / Empresa', placeholder: 'Empresa S.A.S.', type: 'text', full: true, req: true },
                  { k: 'nit', label: 'NIT', placeholder: '900.123.456-7', type: 'text', full: false, req: true },
                  { k: 'responsable', label: 'Nombre del responsable SST', placeholder: 'Nombre completo', type: 'text', full: false, req: true },
                  { k: 'cargo', label: 'Cargo', placeholder: 'Coordinador SST', type: 'text', full: false, req: false },
                  { k: 'email', label: 'Correo electrónico', placeholder: 'sst@empresa.com', type: 'email', full: false, req: envio !== 'whatsapp' },
                  { k: 'telefono', label: 'Teléfono / WhatsApp', placeholder: '+57 300 000 0000', type: 'tel', full: false, req: envio !== 'email' },
                  { k: 'trabajadores', label: 'N.º de trabajadores', placeholder: 'Ej: 25', type: 'text', full: false, req: false },
                ].map(({ k, label, placeholder, type, full, req }) => (
                  <div key={k} className={full ? 'sm:col-span-2' : ''}>
                    <label className="text-slate-300 text-sm mb-1.5 block">
                      {label} {req && <span className="text-red-400">*</span>}
                    </label>
                    <input
                      type={type}
                      value={empresa[k as keyof EmpresaData]}
                      onChange={(e) => setEmpresa((p) => ({ ...p, [k]: e.target.value }))}
                      placeholder={placeholder}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors text-sm"
                    />
                  </div>
                ))}

                <div>
                  <label className="text-slate-300 text-sm mb-1.5 block">
                    Sector económico <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={empresa.sector}
                    onChange={(e) => setEmpresa((p) => ({ ...p, sector: e.target.value }))}
                    className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-violet-500 transition-colors text-sm"
                  >
                    <option value="">Seleccionar sector...</option>
                    {SECTORES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-4 p-3 bg-red-950/50 border border-red-800/50 rounded-xl text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex gap-3">
          {step > 0 && (
            <button
              onClick={prev}
              className="flex items-center gap-2 px-5 py-2.5 border border-white/15 text-slate-300 hover:text-white hover:border-white/30 rounded-xl transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Anterior
            </button>
          )}
          <div className="flex-1" />
          {step < 4 && (
            <button
              onClick={next}
              className="flex items-center gap-2 px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors text-sm"
            >
              {step === 3 ? 'Ver mis resultados' : 'Siguiente'} <ArrowRight className="w-4 h-4" />
            </button>
          )}
          {step === 4 && (
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="flex items-center gap-2 px-6 py-2.5 bg-orange-600 hover:bg-orange-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors text-sm"
            >
              {submitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
              ) : (
                <><CheckCircle2 className="w-4 h-4" /> Recibir mis resultados</>
              )}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
