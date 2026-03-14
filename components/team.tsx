import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const areas = [
  'Ingeniería y Seguridad Industrial',
  'Salud Ocupacional y Medicina Laboral',
  'Gestión de Calidad ISO 9001',
  'Gestión Ambiental ISO 14001',
  'Psicología Organizacional',
  'Derecho Laboral Colombiano',
  'Tecnología e Innovación Digital',
]

export default function TeamSection() {
  return (
    <section className="py-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left: text */}
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
              El equipo
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Profesionales comprometidos con tu organización
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Contamos con un equipo multidisciplinario conformado por
              especialistas altamente capacitados, con experiencia real en
              empresas colombianas de todos los sectores económicos.
            </p>
          </div>

          <ul className="space-y-3">
            {areas.map((area) => (
              <li key={area} className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm font-medium">{area}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: team photo */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-orange-100/60 ring-1 ring-orange-100">
            <Image
              src="/img/sst-grupo.webp"
              alt="Equipo de profesionales HumanIA"
              width={700}
              height={500}
              className="w-full object-cover"
              priority
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-orange-100 px-5 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">100% auditorías</p>
              <p className="text-xs text-slate-500">superadas con éxito</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
