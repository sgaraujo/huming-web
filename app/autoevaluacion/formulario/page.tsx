'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import {
  SST_ITEMS,
  CICLOS,
  calcularPuntaje,
  calcularNivel,
  type RespuestaItem,
} from '@/lib/sst-items';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, LogOut, AlertTriangle } from 'lucide-react';

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
const STEPS = ['Datos empresa', ...CICLOS, 'Confirmar'];
const TOTAL_STEPS = STEPS.length; // 6

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

      {/* Options */}
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

      {/* Observación */}
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

// ─── Main component ────────────────────────────────────────────────────────────
export default function FormularioPage() {
  const { user, profile, loading, signOut } = useAuth();
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [empresa, setEmpresa] = useState<EmpresaData>({
    nombre: '',
    nit: '',
    sector: '',
    responsable: '',
    cargo: '',
    email: '',
    telefono: '',
    trabajadores: '',
  });
  const [respuestas, setRespuestas] = useState<Record<string, RespuestaItem>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!loading && !user) router.push('/autoevaluacion/login');
    if (!loading && user && profile?.role === 'admin') router.push('/dashboard');
  }, [user, profile, loading, router]);

  // Pre-fill empresa data from profile
  useEffect(() => {
    if (profile) {
      setEmpresa((e) => ({
        ...e,
        nombre: profile.empresa || '',
        nit: profile.nit || '',
        email: profile.email || '',
        telefono: profile.telefono || '',
        responsable: profile.nombre || '',
      }));
    }
  }, [profile]);

  const setResp = useCallback((id: string, r: RespuestaItem) => {
    setRespuestas((prev) => ({ ...prev, [id]: r }));
  }, []);

  const puntaje = calcularPuntaje(respuestas);
  const nivel = calcularNivel(puntaje);

  // Items per ciclo step (steps 1-4 = ciclos)
  const currentCiclo = step >= 1 && step <= 4 ? CICLOS[step - 1] : null;
  const currentItems = currentCiclo ? SST_ITEMS.filter((i) => i.ciclo === currentCiclo) : [];

  // Group items by estandar for display
  const itemsByEstandar = currentItems.reduce(
    (acc, item) => {
      if (!acc[item.estandar]) acc[item.estandar] = [];
      acc[item.estandar].push(item);
      return acc;
    },
    {} as Record<string, typeof SST_ITEMS>
  );

  function validateStep(): string {
    if (step === 0) {
      if (!empresa.nombre) return 'Ingresa el nombre de la empresa';
      if (!empresa.nit) return 'Ingresa el NIT';
      if (!empresa.sector) return 'Selecciona el sector';
      if (!empresa.responsable) return 'Ingresa el nombre del responsable';
      if (!empresa.email) return 'Ingresa el correo de contacto';
    }
    if (step >= 1 && step <= 4) {
      const unanswered = currentItems.filter((i) => !respuestas[i.id]?.estado);
      if (unanswered.length > 0) {
        return `Faltan ${unanswered.length} ítems por responder en este ciclo`;
      }
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
    setSubmitting(true);
    setError('');
    try {
      const docRef = await addDoc(collection(db, 'evaluaciones'), {
        empresa,
        respuestas,
        puntaje,
        nivel,
        userId: user!.uid,
        createdAt: serverTimestamp(),
      });

      // Send email notification
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          empresa,
          puntaje,
          nivel,
          evaluacionId: docRef.id,
        }),
      });

      router.push(`/autoevaluacion/resultado/${docRef.id}`);
    } catch {
      setError('Error al guardar. Intenta de nuevo.');
      setSubmitting(false);
    }
  }

  const nivelColor = nivel === 'CRÍTICO' ? 'red' : nivel === 'MODERADO' ? 'yellow' : 'green';

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-violet-400 animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-slate-950/90 backdrop-blur border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="text-white font-bold text-lg tracking-tight shrink-0">
            Human<span className="text-violet-400">IA</span>
          </Link>

          {/* Progress bar */}
          <div className="flex-1 max-w-xs hidden sm:block">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>Paso {step + 1} de {TOTAL_STEPS}</span>
              <span>{Math.round((step / (TOTAL_STEPS - 1)) * 100)}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-violet-500 rounded-full transition-all duration-500"
                style={{ width: `${(step / (TOTAL_STEPS - 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Live score */}
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

          <button onClick={signOut} className="text-slate-400 hover:text-white transition-colors shrink-0">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Step 0: Datos empresa */}
        {step === 0 && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Datos de la empresa</h2>
              <p className="text-slate-400 text-sm">Información general para identificar la evaluación</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 grid sm:grid-cols-2 gap-4">
              {[
                { k: 'nombre', label: 'Razón social / Nombre empresa', placeholder: 'Empresa S.A.S.', required: true },
                { k: 'nit', label: 'NIT', placeholder: '900.123.456-7', required: true },
                { k: 'responsable', label: 'Responsable SG-SST', placeholder: 'Nombre completo', required: true },
                { k: 'cargo', label: 'Cargo', placeholder: 'Coordinador SST', required: false },
                { k: 'email', label: 'Correo de contacto', placeholder: 'sst@empresa.com', required: true },
                { k: 'telefono', label: 'Teléfono', placeholder: '+57 300 000 0000', required: false },
                { k: 'trabajadores', label: 'N.º de trabajadores', placeholder: 'Ej: 25', required: false },
              ].map(({ k, label, placeholder, required }) => (
                <div key={k} className={k === 'nombre' ? 'sm:col-span-2' : ''}>
                  <label className="text-slate-300 text-sm mb-1.5 block">
                    {label} {required && <span className="text-red-400">*</span>}
                  </label>
                  <input
                    type={k === 'email' ? 'email' : k === 'telefono' ? 'tel' : 'text'}
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
        )}

        {/* Steps 1-4: Ciclos PHVA */}
        {step >= 1 && step <= 4 && currentCiclo && (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{CICLO_ICONS[step - 1]}</span>
                <h2 className="text-2xl font-bold text-white">{currentCiclo}</h2>
              </div>
              <p className="text-slate-400 text-sm">
                {currentItems.length} ítems · Para cada uno selecciona:{' '}
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

        {/* Step 5: Confirmar */}
        {step === 5 && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Resumen y confirmación</h2>
              <p className="text-slate-400 text-sm">Revisa los datos antes de enviar</p>
            </div>

            {/* Score card */}
            <div
              className={`rounded-2xl p-6 mb-6 border ${
                nivelColor === 'red'
                  ? 'bg-red-950/40 border-red-800/40'
                  : nivelColor === 'yellow'
                  ? 'bg-yellow-950/40 border-yellow-800/40'
                  : 'bg-green-950/40 border-green-800/40'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-slate-300 text-sm">Puntaje total obtenido</p>
                  <div className="flex items-end gap-2 mt-1">
                    <span
                      className={`text-5xl font-bold ${
                        nivelColor === 'red' ? 'text-red-400' : nivelColor === 'yellow' ? 'text-yellow-400' : 'text-green-400'
                      }`}
                    >
                      {puntaje.toFixed(1)}
                    </span>
                    <span className="text-slate-400 text-lg mb-1">/ 100</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-xs mb-1">Nivel</p>
                  <span
                    className={`text-xl font-bold ${
                      nivelColor === 'red' ? 'text-red-400' : nivelColor === 'yellow' ? 'text-yellow-400' : 'text-green-400'
                    }`}
                  >
                    {nivel}
                  </span>
                </div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    nivelColor === 'red' ? 'bg-red-500' : nivelColor === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${puntaje}%` }}
                />
              </div>
            </div>

            {/* Empresa summary */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
              <h3 className="text-white font-semibold mb-3">Datos de la empresa</h3>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                {[
                  ['Empresa', empresa.nombre],
                  ['NIT', empresa.nit],
                  ['Sector', empresa.sector],
                  ['Responsable', empresa.responsable],
                  ['Correo', empresa.email],
                  ['Trabajadores', empresa.trabajadores],
                ].map(([k, v]) =>
                  v ? (
                    <div key={k} className="flex gap-2">
                      <span className="text-slate-500">{k}:</span>
                      <span className="text-slate-200">{v}</span>
                    </div>
                  ) : null
                )}
              </div>
            </div>

            {/* Warning if critical */}
            {nivel === 'CRÍTICO' && (
              <div className="bg-red-950/40 border border-red-800/40 rounded-xl p-4 mb-6 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-300 font-semibold text-sm mb-1">Nivel Crítico detectado</p>
                  <p className="text-red-400/80 text-xs leading-relaxed">
                    Debes realizar un Plan de Mejoramiento de inmediato y ponerlo a disposición del Ministerio del Trabajo.
                    Nuestro equipo te contactará para acompañarte.
                  </p>
                </div>
              </div>
            )}

            <p className="text-slate-400 text-xs mb-6">
              Al enviar, recibirás un informe por correo y nuestros asesores revisarán tu evaluación.
            </p>
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
          {step < 5 && (
            <button
              onClick={next}
              className="flex items-center gap-2 px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors text-sm"
            >
              {step === 4 ? 'Ver resumen' : 'Siguiente'} <ArrowRight className="w-4 h-4" />
            </button>
          )}
          {step === 5 && (
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="flex items-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors text-sm"
            >
              {submitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
              ) : (
                <><CheckCircle2 className="w-4 h-4" /> Enviar evaluación</>
              )}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
