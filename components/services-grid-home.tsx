import Link from 'next/link'
import {
  ShieldCheck,
  Brain,
  Monitor,
  Route,
  Leaf,
  Scale,
  Code2,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: ShieldCheck,
    title: 'SG-SST',
    description:
      'Sistema de Gestión de Seguridad y Salud en el Trabajo. Diseño, implementación y auditoría.',
    href: '/blog',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Brain,
    title: 'Riesgo Psicosocial',
    description:
      'Evaluación, diagnóstico e intervención de factores de riesgo psicosocial en tu empresa.',
    href: '/blog2',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: Monitor,
    title: 'Teletrabajo',
    description:
      'Implementación legal y estratégica del trabajo remoto conforme a la normativa vigente.',
    href: '/blog3',
    gradient: 'from-sky-500 to-cyan-600',
  },
  {
    icon: Route,
    title: 'PESV',
    description:
      'Plan Estratégico de Seguridad Vial según Resolución 40595 de 2022. Diagnóstico y seguimiento.',
    href: '/blog4',
    gradient: 'from-red-500 to-rose-600',
  },
  {
    icon: Leaf,
    title: 'Gestión Ambiental',
    description:
      'Implementación del SGA bajo ISO 14001 y cumplimiento de la normativa ambiental colombiana.',
    href: '/blog5',
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    icon: Scale,
    title: 'Asesoría Jurídica Laboral',
    description:
      'Orientación en derecho laboral, contratos, nómina y cumplimiento normativo del Ministerio del Trabajo.',
    href: '/blog7',
    gradient: 'from-amber-500 to-yellow-600',
  },
  {
    icon: Code2,
    title: 'Desarrollo Tecnológico',
    description:
      'Soluciones digitales para automatizar y gestionar tus sistemas de calidad, SST y medio ambiente.',
    href: '/blog6',
    gradient: 'from-violet-500 to-purple-600',
  },
]

export default function ServicesGridHome() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest">
            Nuestros servicios
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Soluciones integrales para
            <br />
            <span className="text-orange-500">tu organización</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Desde la implementación hasta la auditoría, cubrimos cada etapa de tu sistema de gestión.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} mb-5 shadow-md`}
              >
                <s.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-bold text-slate-900 mb-2 text-lg leading-tight group-hover:text-orange-600 transition-colors duration-200">
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {s.description}
              </p>

              <div className="flex items-center gap-1 text-orange-500 text-sm font-semibold translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
                Ver más <ArrowRight className="w-4 h-4" />
              </div>

              {/* Hover glow overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl pointer-events-none`}
              />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
          >
            Explorar todos los servicios
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
