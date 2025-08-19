// components/pesv-section.tsx
"use client"

import {  ClipboardList, CheckCircle2, BarChart3, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PesvSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Plan Estratégico de Seguridad Vial (PESV)
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Diseñamos, implementamos, evaluamos y mejoramos tu PESV conforme a la{" "}
            <span className="font-medium">Resolución 40595 de 2022</span> e{" "}
            <span className="font-medium">ISO 39001</span>, ajustado al tamaño y la
            misionalidad de tu organización (empresas generadoras o dedicadas a
            actividades de transporte).
          </p>
        </div>

        {/* Fases */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Fase I */}
          <article className="rounded-2xl border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-sky-600/10 text-sky-700 p-2">
                <ClipboardList className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">FASE I · Planificación</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Liderazgo y diseño del PESV.</li>
              <li>• Comité de seguridad vial.</li>
              <li>• Política y objetivos del PESV.</li>
              <li>• Diagnóstico y caracterización del riesgo vial.</li>
              <li>• Indicadores, metas y factores de desempeño.</li>
            </ul>
          </article>

          {/* Fase II */}
          <article className="rounded-2xl border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-600/10 text-emerald-700 p-2">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">FASE II · Implementación</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Plan anual de trabajo y cronograma.</li>
              <li>• Competencias, inducción y formación.</li>
              <li>• Gestión de infraestructura y entorno vial.</li>
              <li>• Investigación de incidentes y medidas correctivas.</li>
              <li>• Gestión de contratistas, control de riesgos y equipos.</li>
            </ul>
          </article>

          {/* Fase III */}
          <article className="rounded-2xl border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-amber-600/10 text-amber-700 p-2">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">FASE III · Seguimiento</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Medición de resultados del PESV.</li>
              <li>• Auditorías internas y reporte de gestión.</li>
              <li>• Indicadores y análisis de resultados.</li>
              <li>• Evaluación de cumplimiento y efectividad.</li>
            </ul>
          </article>

          {/* Fase IV */}
          <article className="rounded-2xl border bg-background p-6 shadow-sm md:col-span-2 lg:col-span-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-600/10 text-purple-700 p-2">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">FASE IV · Mejora Continua</h3>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
              <li>• Planes de mejora y acciones preventivas/correctivas.</li>
              <li>• Mecanismos de comunicación y cultura vial.</li>
            </ul>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
            <Link href="/contacto">Solicita tu diagnóstico PESV</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/servicios">Volver a servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
