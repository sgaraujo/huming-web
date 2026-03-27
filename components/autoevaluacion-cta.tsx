import Link from 'next/link'
import { ShieldCheck, ClipboardList, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react'

const items = [
  '60 ítems según Resolución 0312 de 2019',
  'Resultado inmediato con tu nivel de cumplimiento',
  'Gráficos por ciclo PHVA y estándar',
  'Informe enviado a tu correo',
]

const niveles = [
  { label: 'CRÍTICO', rango: 'Menor al 60%', color: 'bg-red-500', text: 'text-red-600', border: 'border-red-200', bg: 'bg-red-50' },
  { label: 'MODERADO', rango: 'Entre el 61 y el 85%', color: 'bg-yellow-400', text: 'text-yellow-700', border: 'border-yellow-200', bg: 'bg-yellow-50' },
  { label: 'ACEPTABLE', rango: 'Mayor al 86%', color: 'bg-green-500', text: 'text-green-700', border: 'border-green-200', bg: 'bg-green-50' },
]

export default function AutoevaluacionCta() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Contenedor principal con gradiente llamativo */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 p-1 shadow-2xl shadow-violet-900/30">
          {/* Borde animado */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500 via-violet-500 to-orange-500 opacity-20" />

          <div className="relative rounded-[22px] bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 px-8 py-12 md:px-14 md:py-16">

            {/* Decorative blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px]">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
            </div>

            <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">

              {/* ── Lado izquierdo ── */}
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
                  <ShieldCheck className="h-4 w-4" />
                  Res. 0312 de 2019 · Estándares Mínimos SG-SST
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                    ¿Cómo está tu empresa en{' '}
                    <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                      Seguridad y Salud?
                    </span>
                  </h2>
                  <p className="text-base leading-relaxed text-slate-300 max-w-md">
                    Realiza gratis la autoevaluación de Estándares Mínimos SG-SST y conoce
                    en minutos si tu empresa está en nivel Crítico, Moderado o Aceptable según criteros establecidos por el ministerio de trabajo.
                  </p>
                </div>

                {/* Checklist */}
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/autoevaluacion/formulario"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:bg-orange-400 hover:shadow-orange-400/30 hover:scale-[1.02]"
                  >
                    <ClipboardList className="h-5 w-5" />
                    Evalúa tu empresa — Gratis
                  </Link>
                  <Link
                    href="/autoevaluacion"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-white/30 hover:text-white"
                  >
                    Saber más <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* ── Lado derecho: Niveles + mini stats ── */}
              <div className="space-y-5">
                {/* Tarjeta con los 3 niveles */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-violet-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Resultado de tu evaluación
                    </span>
                  </div>
                  <div className="space-y-3">
                    {niveles.map((n) => (
                      <div key={n.label} className="flex items-center gap-4">
                        <span className={`w-24 text-xs font-semibold ${
                          n.label === 'CRÍTICO' ? 'text-red-400' : n.label === 'MODERADO' ? 'text-yellow-400' : 'text-green-400'
                        }`}>{n.rango}</span>
                        <div className="flex-1 h-2.5 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${n.color}`}
                            style={{
                              width: n.label === 'CRÍTICO' ? '45%' : n.label === 'MODERADO' ? '72%' : '100%',
                            }}
                          />
                        </div>
                        <span className={`w-20 text-right text-xs font-bold ${
                          n.label === 'CRÍTICO' ? 'text-red-400' : n.label === 'MODERADO' ? 'text-yellow-400' : 'text-green-400'
                        }`}>
                          {n.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '7, 21 ó 60', label: 'ítems evaluados', small: true },
                    { value: '4', label: 'ciclos PHVA', small: false },
                    { value: '100', label: 'puntos máximos', small: false },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/8 bg-white/5 p-4 text-center"
                    >
                      <p className={`font-black text-white ${s.small ? 'text-base leading-snug' : 'text-2xl'}`}>{s.value}</p>
                      <p className="mt-1 text-[11px] text-slate-400 leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Disclaimer */}
                <p className="text-center text-xs text-slate-600">
                  Formulario público · Documento oficial Res. 0312 de 2019 · Sin costo
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
