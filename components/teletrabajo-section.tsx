"use client"

import { Briefcase, ClipboardCheck, RefreshCcw } from "lucide-react"
import Link from "next/link"

export default function TeletrabajoSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-16 text-center relative">
        {/* Fondo específico del hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-transparent to-blue-50/30" />
        
        <div className="container relative z-10">
          <div className="mx-auto flex max-w-5xl flex-col gap-8">
            <h1 className="text-3xl font-bold lg:text-5xl">
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                Teletrabajo: Implementación Legal y Estratégica
              </span>
            </h1>
            <p className="text-balance lg:text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto">
              Implementamos y formalizamos el teletrabajo en tu organización conforme al
              <span className="font-medium text-blue-600"> Decreto 1072 de 2015</span> y la
              <span className="font-medium text-blue-600"> Circular Externa 0027 de 2019</span>, con enfoque
              práctico, cumplimiento normativo y bienestar laboral.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 relative">
        {/* Fondo específico de features */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-50/20 to-blue-50/30" />
        
        <div className="mx-auto max-w-5xl relative z-10">
          {/* Grid de cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <article className="group rounded-2xl border-2 border-blue-300/60 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1 hover:border-blue-400/80">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-sky-100 border border-blue-200/50 text-blue-600 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-600">Identificación de modalidad</h3>
              </div>
              <ul className="space-y-3 text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  Teletrabajo autónomo
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  Teletrabajo Híbrido
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  Teletrabajo móvil
                </li>
              </ul>
            </article>

            {/* Card 2 */}
            <article className="group rounded-2xl border-2 border-sky-300/60 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-sky-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1 hover:border-sky-400/80">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 border border-sky-200/50 text-sky-600 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
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
            <article className="group rounded-2xl border-2 border-blue-300/60 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1 hover:border-blue-400/80">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200/50 text-blue-700 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <RefreshCcw className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-700">Evaluación y mejora continua</h3>
              </div>
              <ul className="space-y-3 text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  Evaluación periódica de la gestión del teletrabajo
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  Planes de mejora y optimización
                </li>
              </ul>
            </article>
          </div>

          {/* Botones de acción */}
          <div className="pt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Botón Solicitar Visitas */}
            <Link href="/contacto">
              <button className="group relative rounded-2xl bg-gradient-to-r from-blue-500 to-sky-600 px-10 py-4 text-white font-semibold hover:from-blue-600 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1 text-lg">
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
              <button className="group relative rounded-2xl bg-white border-2 border-blue-300 px-10 py-4 text-blue-600 font-semibold hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1 text-lg">
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
    </>
  )
}