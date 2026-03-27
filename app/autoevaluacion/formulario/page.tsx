'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  SST_ITEMS,
  CICLOS,
  calcularPuntaje,
  calcularNivel,
  type RespuestaItem,
} from '@/lib/sst-items';
import { db } from '@/lib/firebase';
import { collection, addDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, AlertTriangle, Mail, MessageCircle, ClipboardList } from 'lucide-react';

interface EmpresaData {
  nombre: string; nit: string; sector: string; responsable: string;
  cargo: string; email: string; telefono: string; trabajadores: string;
}

const SECTORES = [
  'Manufactura','Construcción','Comercio','Servicios','Salud',
  'Educación','Transporte','Agropecuario','Minería','Tecnología','Otro',
];

const CICLO_ICONS = ['📋','⚙️','✅','🔄'];
// Steps: 0=email, 1-4=ciclos PHVA, 5=resultados+registro
const TOTAL_STEPS = 6;

// ─── Item row ─────────────────────────────────────────────────────────────────
function ItemRow({ item, respuesta, onChange }: {
  item: (typeof SST_ITEMS)[0];
  respuesta: RespuestaItem | undefined;
  onChange: (id: string, r: RespuestaItem) => void;
}) {
  const opts = [
    { value: 'cumple' as const,    label: '✓ Cumple',    cls: 'border-emerald-400 bg-emerald-500 text-white', idle: 'border-slate-300 text-slate-600 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50' },
    { value: 'no_cumple' as const, label: '✗ No cumple', cls: 'border-red-500 bg-red-500 text-white',         idle: 'border-slate-300 text-slate-600 hover:border-red-400 hover:text-red-600 hover:bg-red-50' },
  ];

  const answered = respuesta?.estado != null;

  return (
    <div className={`rounded-2xl border-2 p-5 transition-all ${answered ? 'border-slate-200 bg-white shadow-sm' : 'border-dashed border-slate-300 bg-white'}`}>
      <div className="flex items-start gap-3 mb-4">
        <span className="shrink-0 mt-0.5 text-[11px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-lg tracking-wide">
          {item.id}
        </span>
        <p className="text-slate-800 text-[15px] leading-relaxed font-medium flex-1">{item.descripcion}</p>
        <span className="shrink-0 text-xs text-slate-400 mt-0.5">{item.valor} pts</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {opts.map((o) => {
          const sel = respuesta?.estado === o.value;
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onChange(item.id, { ...respuesta, estado: o.value })}
              className={`text-sm px-4 py-2 rounded-xl border-2 font-semibold transition-all active:scale-95 ${sel ? o.cls : o.idle}`}
            >
              {o.label}
            </button>
          );
        })}
      </div>

      {answered && (
        <input
          type="text"
          placeholder="Observación (opcional)"
          value={respuesta?.observacion ?? ''}
          onChange={(e) => onChange(item.id, { estado: respuesta?.estado ?? null, observacion: e.target.value })}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 placeholder:text-slate-400 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
        />
      )}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function FormularioPage() {
  const [step, setStep] = useState(0);
  const [emailInicial, setEmailInicial] = useState('');
  const [leadId, setLeadId] = useState<string | null>(null);
  const [empresa, setEmpresa] = useState<EmpresaData>({
    nombre:'',nit:'',sector:'',responsable:'',cargo:'',email:'',telefono:'',trabajadores:'',
  });
  const [respuestas, setRespuestas] = useState<Record<string, RespuestaItem>>({});
  const [enviado, setEnviado] = useState<{ id: string } | null>(null);
  const [envio, setEnvio] = useState<'email'|'whatsapp'|'ambos'>('email');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const setResp = useCallback((id: string, r: RespuestaItem) => {
    setRespuestas((prev) => ({ ...prev, [id]: r }));
  }, []);

  const puntaje = calcularPuntaje(respuestas);
  const nivel = calcularNivel(puntaje);
  const nivelColor = nivel === 'CRÍTICO' ? 'red' : nivel === 'MODERADO' ? 'yellow' : 'green';

  // steps 1-4 = ciclos PHVA
  const currentCiclo = step >= 1 && step <= 4 ? CICLOS[step - 1] : null;
  const currentItems = currentCiclo ? SST_ITEMS.filter((i) => i.ciclo === currentCiclo) : [];
  const answeredCount = currentItems.filter((i) => respuestas[i.id]?.estado).length;
  const itemsByEstandar = currentItems.reduce((acc, item) => {
    if (!acc[item.estandar]) acc[item.estandar] = [];
    acc[item.estandar].push(item);
    return acc;
  }, {} as Record<string, typeof SST_ITEMS>);

  function validateStep(): string {
    if (step === 0) {
      if (!emailInicial) return 'Ingresa tu correo para continuar';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInicial)) return 'Ingresa un correo válido';
    }
    if (step >= 1 && step <= 4) {
      const left = currentItems.filter((i) => !respuestas[i.id]?.estado).length;
      if (left > 0) return `Faltan ${left} ítem${left > 1 ? 's' : ''} por responder`;
    }
    if (step === 5) {
      if (envio !== 'email' && !empresa.telefono) return 'Ingresa el teléfono de WhatsApp';
    }
    return '';
  }

  async function next() {
    const err = validateStep();
    if (err) { setError(err); return; }
    setError('');

    // Al avanzar del paso 0, guardar el email en Firestore como lead
    if (step === 0) {
      try {
        const ref = await addDoc(collection(db, 'leads'), {
          email: emailInicial,
          createdAt: serverTimestamp(),
        });
        setLeadId(ref.id);
        setEmpresa((p) => ({ ...p, email: emailInicial }));
      } catch {
        // No bloquear si falla el guardado del lead
      }
    }

    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function prev() {
    setError(''); setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleSubmit() {
    const err = validateStep();
    if (err) { setError(err); return; }
    setSubmitting(true); setError('');
    try {
      // Merge email inicial con los datos de empresa
      const empresaFinal = { ...empresa, email: empresa.email || emailInicial };
      const docRef = await addDoc(collection(db, 'evaluaciones'), {
        empresa: empresaFinal, respuestas, puntaje, nivel, envio,
        leadId: leadId || null,
        createdAt: serverTimestamp(),
      });

      // Actualizar lead con el ID de la evaluación
      if (leadId) {
        updateDoc(doc(db, 'leads', leadId), { evaluacionId: docRef.id }).catch(() => {});
      }
      if (envio === 'email' || envio === 'ambos') {
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ empresa: empresaFinal, respuestas, puntaje, nivel, evaluacionId: docRef.id }),
        }).catch(console.error);
      }
      if (envio === 'whatsapp' || envio === 'ambos') {
        const msg = encodeURIComponent(
          `Hola HumanIA, acabo de completar mi Autoevaluación SG-SST.\n\n` +
          `*Empresa:* ${empresa.nombre}\n*NIT:* ${empresa.nit}\n` +
          `*Puntaje:* ${puntaje.toFixed(1)}% - Nivel ${nivel}\n\n` +
          `Quisiera recibir mis resultados y orientación sobre los próximos pasos.`
        );
        window.open(`https://wa.me/573102365931?text=${msg}`, '_blank');
      }
      setEnviado({ id: docRef.id });
    } catch {
      setError('Error al guardar. Intenta de nuevo.');
      setSubmitting(false);
    }
  }

  const progressPct = Math.round((step / (TOTAL_STEPS - 1)) * 100);

  // ── Pantalla éxito ──────────────────────────────────────────────────────────
  if (enviado) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-violet-50 to-white flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-100">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-3">¡Listo!</h1>
          <p className="text-slate-500 text-lg mb-8 leading-relaxed">
            {envio === 'email' && 'Revisa tu correo — te enviamos el informe completo con el Plan de Mejoramiento en PDF.'}
            {envio === 'whatsapp' && 'En breve te contactamos por WhatsApp con tu informe completo.'}
            {envio === 'ambos' && 'Te enviamos el informe por correo y te contactamos por WhatsApp.'}
          </p>
          <div className={`rounded-2xl p-6 mb-8 ${
            nivelColor === 'red' ? 'bg-red-50 border-2 border-red-200'
            : nivelColor === 'yellow' ? 'bg-yellow-50 border-2 border-yellow-200'
            : 'bg-green-50 border-2 border-green-200'
          }`}>
            <p className="text-slate-500 text-sm mb-2">Tu puntaje SG-SST</p>
            <p className={`text-6xl font-black mb-1 ${nivelColor === 'red' ? 'text-red-500' : nivelColor === 'yellow' ? 'text-yellow-600' : 'text-green-600'}`}>
              {puntaje.toFixed(1)}<span className="text-2xl font-normal text-slate-400"> / 100</span>
            </p>
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${
              nivelColor === 'red' ? 'bg-red-100 text-red-600' : nivelColor === 'yellow' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
            }`}>{nivel}</span>
          </div>
          <Link
            href={`/autoevaluacion/resultado/${enviado.id}`}
            className="block w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-2xl transition-colors text-lg mb-3"
          >
            Ver informe completo →
          </Link>
          <Link href="/" className="text-slate-400 hover:text-slate-600 text-sm transition-colors">
            Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  // ── Formulario ──────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="font-extrabold text-xl shrink-0 text-slate-800">
            Human<span className="text-violet-600">IA</span>
          </Link>
          <div className="flex-1">
            <div className="flex justify-between text-xs text-slate-400 mb-1.5">
              <span className="font-medium text-slate-600">
                {step === 0 ? '✉️ Tu correo' : step <= 4 ? `${CICLO_ICONS[step-1]} ${CICLOS[step-1]}` : '📊 Tus resultados'}
              </span>
              <span className="font-semibold text-violet-600">{progressPct}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-violet-500 to-orange-400 rounded-full transition-all duration-700"
                style={{ width: `${progressPct}%` }} />
            </div>
          </div>
          {Object.keys(respuestas).length > 0 && (
            <div className={`hidden sm:block text-xs font-bold px-3 py-1.5 rounded-full shrink-0 ${
              nivelColor === 'red' ? 'bg-red-50 text-red-600' : nivelColor === 'yellow' ? 'bg-yellow-50 text-yellow-700' : 'bg-green-50 text-green-700'
            }`}>
              {puntaje.toFixed(1)}%
            </div>
          )}
        </div>

        {/* Step pills */}
        <div className="max-w-3xl mx-auto px-4 pb-2 flex gap-1.5 overflow-x-auto scrollbar-hide">
          {['Correo','PLANEAR','HACER','VERIFICAR','ACTUAR','Resultados'].map((s, i) => (
            <div key={i} className={`shrink-0 text-xs px-3 py-1 rounded-full font-medium transition-all ${
              i === step ? 'bg-violet-600 text-white shadow-sm' : i < step ? 'bg-violet-100 text-violet-700' : 'bg-slate-100 text-slate-400'
            }`}>
              {i < step ? '✓ ' : ''}{s}
            </div>
          ))}
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6 pb-32">

        {/* Paso 0: Correo + cómo recibir */}
        {step === 0 && (
          <div className="max-w-md mx-auto py-8 space-y-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ClipboardList className="w-8 h-8 text-violet-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">¡Comencemos!</h2>
              <p className="text-slate-500 leading-relaxed">
                Antes de iniciar, dinos cómo quieres recibir tu informe.
              </p>
            </div>

            {/* Cómo recibir */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-slate-800 font-bold mb-1">¿Cómo quieres recibir el informe?</h3>
              <p className="text-slate-400 text-sm mb-4">Te lo enviamos al terminar con tu Plan de Mejoramiento en PDF</p>
              <div className="grid grid-cols-3 gap-3">
                {([
                  { id: 'email',    icon: Mail,          label: 'Correo',   desc: 'PDF al email' },
                  { id: 'whatsapp', icon: MessageCircle, label: 'WhatsApp', desc: 'Por chat' },
                  { id: 'ambos',    icon: CheckCircle2,  label: 'Ambos',    desc: 'Email + WA' },
                ] as const).map(({ id, icon: Icon, label, desc }) => (
                  <button key={id} type="button" onClick={() => setEnvio(id)}
                    className={`flex flex-col items-center gap-1.5 py-4 px-2 rounded-2xl border-2 transition-all text-center ${
                      envio === id ? 'bg-violet-600 border-violet-600 text-white shadow-lg shadow-violet-100' : 'border-slate-200 text-slate-500 hover:border-violet-300'
                    }`}>
                    <Icon className={`w-6 h-6 ${envio === id ? 'text-white' : 'text-slate-400'}`} />
                    <span className="text-sm font-bold">{label}</span>
                    <span className={`text-xs ${envio === id ? 'text-violet-100' : 'text-slate-400'}`}>{desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Datos */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Empresa / Razón social
                </label>
                <input
                  type="text"
                  value={empresa.nombre}
                  onChange={(e) => setEmpresa((p) => ({ ...p, nombre: e.target.value }))}
                  placeholder="Empresa S.A.S."
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-50 transition-all text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Correo electrónico <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  value={emailInicial}
                  onChange={(e) => setEmailInicial(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && next()}
                  placeholder="correo@empresa.com"
                  autoFocus
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-50 transition-all text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Teléfono / WhatsApp {envio !== 'email' && <span className="text-orange-500">*</span>}
                </label>
                <input
                  type="tel"
                  value={empresa.telefono}
                  onChange={(e) => setEmpresa((p) => ({ ...p, telefono: e.target.value }))}
                  placeholder="+57 300 000 0000"
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-50 transition-all text-base"
                />
              </div>
              <p className="text-xs text-slate-400 flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                Nunca compartimos tu información con terceros.
              </p>
            </div>
          </div>
        )}

        {/* Ciclos PHVA */}
        {step >= 1 && step <= 4 && currentCiclo && (
          <div>
            {/* Ciclo header */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 mb-6 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{CICLO_ICONS[step-1]}</span>
                  <h2 className="text-xl font-bold text-slate-800">{currentCiclo}</h2>
                </div>
                <p className="text-slate-500 text-sm">
                  Para cada ítem selecciona:{' '}
                  <span className="text-emerald-600 font-semibold">Cumple</span> o{' '}
                  <span className="text-red-500 font-semibold">No cumple</span>
                </p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <p className="text-2xl font-black text-slate-800">{answeredCount}<span className="text-slate-400 text-base font-normal"> / {currentItems.length}</span></p>
                <p className="text-xs text-slate-400">respondidos</p>
              </div>
            </div>

            <div className="space-y-6">
              {Object.entries(itemsByEstandar).map(([estandar, items]) => (
                <div key={estandar}>
                  <div className="flex items-center gap-3 my-4">
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-xs font-bold text-violet-700 bg-violet-50 border border-violet-200 px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap">
                      {estandar}
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                  <div className="space-y-3">
                    {items.map((item) => (
                      <ItemRow key={item.id} item={item} respuesta={respuestas[item.id]} onChange={setResp} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Paso final: Resultados + envío + registro */}
        {step === 5 && (
          <div className="space-y-5">
            <div className="text-center py-4">
              <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full border border-violet-200 mb-4">
                <ClipboardList className="w-4 h-4" /> Cuestionario completado
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-1">Tu resultado preliminar</h2>
              <p className="text-slate-500">Completa tus datos para recibir el informe completo gratis</p>
            </div>

            {/* Score por nivel */}
            <div className={`rounded-3xl p-6 border-2 ${
              nivelColor === 'red' ? 'bg-red-50 border-red-200' : nivelColor === 'yellow' ? 'bg-yellow-50 border-yellow-200' : 'bg-emerald-50 border-emerald-200'
            }`}>
              {/* Nivel badge grande */}
              <div className="text-center mb-4">
                <span className={`inline-block text-4xl font-black px-8 py-3 rounded-2xl ${
                  nivelColor === 'red' ? 'bg-red-500 text-white' : nivelColor === 'yellow' ? 'bg-yellow-400 text-white' : 'bg-emerald-500 text-white'
                }`}>{nivel}</span>
              </div>

              {/* Descripción del nivel */}
              <p className={`text-center text-base font-semibold mb-4 ${
                nivelColor === 'red' ? 'text-red-700' : nivelColor === 'yellow' ? 'text-yellow-700' : 'text-emerald-700'
              }`}>
                {nivelColor === 'red' && 'Puntaje obtenido es menor al 60%'}
                {nivelColor === 'yellow' && 'Puntaje obtenido está entre el 61% y 85%'}
                {nivelColor === 'green' && 'Puntaje obtenido está entre el 86% al 100%'}
              </p>

              {/* Barra de niveles visual */}
              <div className="relative h-10 rounded-2xl overflow-hidden flex">
                <div className="flex-1 bg-red-400 flex items-center justify-center text-white text-xs font-bold">CRÍTICO</div>
                <div className="flex-1 bg-yellow-400 flex items-center justify-center text-white text-xs font-bold">MODERADO</div>
                <div className="flex-1 bg-emerald-400 flex items-center justify-center text-white text-xs font-bold">ACEPTABLE</div>
              </div>
              <div className="flex text-xs text-slate-400 mt-1 px-1">
                <span className="flex-1">0%</span>
                <span className="flex-1 text-center">60%</span>
                <span className="flex-1 text-center">85%</span>
                <span className="text-right">100%</span>
              </div>

              {nivel === 'CRÍTICO' && (
                <div className="mt-4 flex gap-2 bg-red-100 border border-red-200 rounded-xl p-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm leading-relaxed">
                    Debes elaborar un Plan de Mejoramiento de inmediato y ponerlo a disposición del Ministerio del Trabajo.
                  </p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-4 flex gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-2xl text-red-700 font-medium">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" /> {error}
          </div>
        )}
      </div>

      {/* Sticky bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-20">
        <div className="max-w-3xl mx-auto px-4 py-3 flex gap-3">
          {step > 0 ? (
            <button onClick={prev}
              className="flex items-center gap-2 px-5 py-3.5 border-2 border-slate-300 text-slate-600 hover:border-slate-400 font-semibold rounded-2xl transition-all">
              <ArrowLeft className="w-4 h-4" /> Anterior
            </button>
          ) : <div />}
          <div className="flex-1" />
          {step < 5 && (
            <button onClick={next}
              className="flex items-center gap-2 px-8 py-3.5 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white font-bold rounded-2xl transition-all shadow-lg shadow-violet-200 text-base">
              {step === 4 ? 'Ver mis resultados' : 'Continuar'} <ArrowRight className="w-5 h-5" />
            </button>
          )}
          {step === 5 && (
            <button onClick={handleSubmit} disabled={submitting}
              className="flex items-center gap-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 active:scale-95 disabled:opacity-60 text-white font-bold rounded-2xl transition-all shadow-lg shadow-orange-200 text-base">
              {submitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</> : <><CheckCircle2 className="w-5 h-5" /> Recibir mis resultados</>}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
