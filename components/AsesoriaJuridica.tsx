// app/components/AsesoriaJuridica.tsx
"use client"

import { Scale, FileText, Briefcase, FileCheck, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function AsesoriaJuridica() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-16 text-center relative">
        {/* Fondo específico del hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-yellow-50/30" />
        
        <div className="container relative z-10">
          <div className="mx-auto flex max-w-5xl flex-col gap-8">
            <h1 className="text-3xl font-bold lg:text-5xl">
              <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
                Asesoría Jurídica Laboral
              </span>
            </h1>
            <p className="text-balance lg:text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto">
              Brindamos asesoría jurídica especializada en derecho laboral, garantizando el cumplimiento 
              normativo y la protección de los derechos tanto de empleadores como de trabajadores.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 relative">
        {/* Fondo específico de features */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/20 to-yellow-50/30" />
        
        <div className="mx-auto max-w-6xl relative z-10">
          {/* Grid de cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <article className="group rounded-2xl border-2 border-amber-300/60 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-amber-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1 hover:border-amber-400/80">
              <div className="flex flex-col items-center text-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-100 border border-amber-200/50 text-amber-600 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-amber-700">
                  Elaboración de Reglamento Interno de Trabajo
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-center">
                Diseñamos reglamentos internos adaptados a las necesidades específicas de tu organización, 
                cumpliendo con toda la normativa vigente.
              </p>
            </article>

            {/* Card 2 */}
            <article className="group rounded-2xl border-2 border-yellow-300/60 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-yellow-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1 hover:border-yellow-400/80">
              <div className="flex flex-col items-center text-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-yellow-100 to-amber-100 border border-yellow-200/50 text-yellow-600 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <FileCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-yellow-700">
                  Actualización de Reglamento Interno de Trabajo
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-center">
                Actualizamos tu reglamento interno conforme a las últimas reformas laborales y 
                jurisprudencia aplicable.
              </p>
            </article>

            {/* Card 3 */}
            <article className="group rounded-2xl border-2 border-amber-300/60 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-amber-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1 hover:border-amber-400/80">
              <div className="flex flex-col items-center text-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-200/50 text-amber-700 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Scale className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-amber-700">
                  Asesoría Jurídica Laboral
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-center">
                Orientación legal integral en temas laborales, resolución de conflictos y 
                prevención de riesgos jurídicos.
              </p>
            </article>

            {/* Card 4 */}
            <article className="group rounded-2xl border-2 border-yellow-300/60 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-yellow-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1 hover:border-yellow-400/80">
              <div className="flex flex-col items-center text-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-yellow-100 to-amber-100 border border-yellow-200/50 text-yellow-700 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-yellow-700">
                  Elaboración de Contratos Laborales y/o Comerciales
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-center">
                Redactamos contratos personalizados que protegen los intereses de tu empresa y 
                garantizan claridad jurídica.
              </p>
            </article>

            {/* Card 5 */}
            <article className="group rounded-2xl border-2 border-amber-300/60 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-amber-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1 hover:border-amber-400/80 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center text-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-100 border border-amber-200/50 text-amber-600 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-amber-700">
                  Capacitación en Reforma Laboral
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-center">
                Formamos a tu equipo en las últimas actualizaciones de la legislación laboral colombiana 
                y su aplicación práctica.
              </p>
            </article>
          </div>

          {/* Botones de acción */}
          <div className="pt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Botón Solicitar Servicios */}
            <Link href="/contacto">
              <button className="group relative rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-600 px-10 py-4 text-white font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-200/50 hover:-translate-y-1 text-lg">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Solicitar Servicios
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
              <button className="group relative rounded-2xl bg-white border-2 border-amber-300 px-10 py-4 text-amber-600 font-semibold hover:bg-amber-50 hover:border-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-200/50 hover:-translate-y-1 text-lg">
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