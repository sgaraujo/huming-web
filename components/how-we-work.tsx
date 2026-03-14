import { ClipboardList, Lightbulb, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Diagnóstico',
    description:
      'Evaluamos la situación actual de tu empresa: identificamos brechas normativas, riesgos y oportunidades de mejora.',
    gradient: 'from-blue-500 to-indigo-600',
    shadow: 'shadow-blue-500/25',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Plan de Acción',
    description:
      'Diseñamos un plan personalizado con cronograma, recursos y metodología adaptada a la realidad de tu organización.',
    gradient: 'from-orange-500 to-amber-500',
    shadow: 'shadow-orange-500/25',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementación',
    description:
      'Ejecutamos el plan con acompañamiento constante, capacitación al equipo y documentación técnica completa.',
    gradient: 'from-emerald-500 to-green-600',
    shadow: 'shadow-emerald-500/25',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Seguimiento',
    description:
      'Realizamos auditorías periódicas, medimos indicadores clave y garantizamos la mejora continua de tu sistema.',
    gradient: 'from-violet-500 to-purple-600',
    shadow: 'shadow-violet-500/25',
  },
]

export default function HowWeWork() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-orange-700 uppercase tracking-widest">
            Metodología
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Cómo trabajamos
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Un proceso claro, estructurado y orientado a resultados reales para tu organización.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[2rem] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gradient-to-r from-blue-200 via-orange-200 to-violet-200 z-0" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center space-y-4 group"
            >
              {/* Icon circle */}
              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg ${step.shadow} group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 text-[11px] font-bold text-white bg-slate-800 rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[220px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
