"use client"

import { ClipboardList, CheckCircle2, BarChart3, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function PesvSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-16 text-center relative">
        {/* Fondo específico del hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-rose-50/30" />
        
        <div className="container relative z-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-8">
            <h1 className="text-3xl font-bold lg:text-5xl">
              <span className="bg-gradient-to-r from-red-600 via-rose-500 to-red-700 bg-clip-text text-transparent">
                Plan Estratégico de Seguridad Vial (PESV)
              </span>
            </h1>
            <p className="text-balance lg:text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto">
              Diseñamos, implementamos, evaluamos y mejoramos tu PESV conforme a la{" "}
              <span className="font-medium text-red-600">Resolución 40595 de 2022</span> e{" "}
              <span className="font-medium text-red-600">ISO 39001</span>, ajustado al tamaño y la
              misionalidad de tu organización (empresas generadoras o dedicadas a
              actividades de transporte).
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 relative">
        {/* Fondo específico de features */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-50/20 to-rose-50/30" />
        
        <div className="mx-auto max-w-6xl relative z-10">
          {/* Grid de fases */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Fase I */}
            <article className="group rounded-2xl border border-red-100/50 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-red-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-red-100 to-rose-100 border border-red-200/50 text-red-600 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <ClipboardList className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-red-600">FASE I · Planificación</h3>
              </div>
              <ul className="space-y-3 text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  Liderazgo y diseño del PESV
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  Comité de seguridad vial
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  Política y objetivos del PESV
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  Diagnóstico y caracterización del riesgo vial
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  Indicadores, metas y factores de desempeño
                </li>
              </ul>
            </article>

            {/* Fase II */}
            <article className="group rounded-2xl border border-rose-100/50 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-rose-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-rose-100 to-red-100 border border-rose-200/50 text-rose-600 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-rose-600">FASE II · Implementación</h3>
              </div>
              <ul className="space-y-3 text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                  Plan anual de trabajo y cronograma
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                  Competencias, inducción y formación
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                  Gestión de infraestructura y entorno vial
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                  Investigación de incidentes y medidas correctivas
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                  Gestión de contratistas, control de riesgos y equipos
                </li>
              </ul>
            </article>

            {/* Fase III */}
            <article className="group rounded-2xl border border-red-100/50 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-red-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-red-100 to-rose-100 border border-red-200/50 text-red-700 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-red-700">FASE III · Seguimiento</h3>
              </div>
              <ul className="space-y-3 text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  Medición de resultados del PESV
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  Auditorías internas y reporte de gestión
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  Indicadores y análisis de resultados
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  Evaluación de cumplimiento y efectividad
                </li>
              </ul>
            </article>

            {/* Fase IV - Ocupa todo el ancho en desktop */}
            <article className="group rounded-2xl border border-rose-100/50 bg-white/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-rose-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1 md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-rose-100 to-red-100 border border-rose-200/50 text-rose-700 p-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-rose-700">FASE IV · Mejora Continua</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-700 leading-relaxed">Planes de mejora y acciones preventivas/correctivas</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-700 leading-relaxed">Mecanismos de comunicación y cultura vial</span>
                </div>
              </div>
            </article>
          </div>

          {/* Botón principal al final */}
          <div className="pt-16 text-center">
            <Link href="/contacto">
              <button className="group relative rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 px-12 py-5 text-white font-bold hover:from-red-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-200/50 hover:-translate-y-1 text-lg">
                <span className="relative z-10">Solicita tu diagnóstico PESV</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>
             <Link href="/servicios" className="ml-4">
              <button className="group relative rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 px-12 py-5 text-white font-bold hover:from-red-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-200/50 hover:-translate-y-1 text-lg">
                <span className="relative z-10">Volver a Servicios</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}