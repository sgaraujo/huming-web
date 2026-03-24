"use client"

import { Briefcase, ClipboardCheck, RefreshCcw } from "lucide-react"
import Link from "next/link"

export default function TeletrabajoSection() {
  return (
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-5xl">
          {/* Grid de cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <article className="group rounded-2xl border-2 border-violet-300/60 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-violet-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1 hover:border-violet-400/80">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-violet-100 to-sky-100 border border-violet-200/50 text-violet-600 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-violet-600">Identificación de modalidad</h3>
              </div>
              <ul className="space-y-3 text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></span>
                  Teletrabajo autónomo
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></span>
                  Teletrabajo Híbrido
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></span>
                  Teletrabajo móvil
                </li>
              </ul>
            </article>

            {/* Card 2 */}
            <article className="group rounded-2xl border-2 border-sky-300/60 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-sky-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1 hover:border-sky-400/80">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-sky-100 to-violet-100 border border-sky-200/50 text-sky-600 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <ClipboardCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-sky-600">Formalización y puesta en marcha</h3>
              </div>
              <ul className="space-y-3 text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                  Visita técnica domiciliaria
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                  Informe de gestión y aprobación del teletrabajador
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                  Implementación documental del teletrabajo
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                  Plan de trabajo anual y cronograma de capacitación
                </li>
              </ul>
            </article>

            {/* Card 3 */}
            <article className="group rounded-2xl border-2 border-violet-300/60 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-violet-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1 hover:border-violet-400/80">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 border border-violet-200/50 text-violet-700 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <RefreshCcw className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-violet-700">Evaluación y mejora continua</h3>
              </div>
              <ul className="space-y-3 text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></span>
                  Evaluación periódica de la gestión del teletrabajo
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></span>
                  Planes de mejora y optimización
                </li>
              </ul>
            </article>
          </div>

          {/* Botones de acción */}
          <div className="pt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Botón Solicitar Visitas */}
            <Link href="/contacto">
              <button className="group relative rounded-2xl bg-gradient-to-r from-violet-500 to-sky-600 px-10 py-4 text-white font-semibold hover:from-violet-600 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-violet-200/50 hover:-translate-y-1 text-lg">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Solicitar Visitas
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>

            {/* Botón Volver a Servicios */}
            <Link href="/servicios">
              <button className="group relative rounded-2xl bg-white border-2 border-violet-300 px-10 py-4 text-violet-600 font-semibold hover:bg-violet-50 hover:border-violet-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-violet-200/50 hover:-translate-y-1 text-lg">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="19" y1="12" x2="5" y2="12"/>
                    <polyline points="12 19 5 12 12 5"/>
                  </svg>
                  Volver a Servicios
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
  )
}