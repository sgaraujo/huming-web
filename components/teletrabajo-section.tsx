// components/teletrabajo-section.tsx
"use client"

import { Briefcase, ClipboardCheck, RefreshCcw } from "lucide-react"

export default function TeletrabajoSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Encabezado */}
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Teletrabajo: Implementación Legal y Estratégica
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Implementamos y formalizamos el teletrabajo en tu organización conforme al
            <span className="font-medium"> Decreto 1072 de 2015</span> y la
            <span className="font-medium"> Circular Externa 0027 de 2019</span>, con enfoque
            práctico, cumplimiento normativo y bienestar laboral.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <article className="rounded-2xl border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-600/10 text-blue-700 p-2">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Identificación de modalidad</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Teletrabajo autónomo</li>
              <li>• Teletrabajo suplementario</li>
              <li>• Teletrabajo móvil</li>
            </ul>
          </article>

          {/* Card 2 */}
          <article className="rounded-2xl border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-600/10 text-emerald-700 p-2">
                <ClipboardCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Formalización y puesta en marcha</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Visita técnica domiciliaria</li>
              <li>• Informe de gestión y aprobación del teletrabajador</li>
              <li>• Implementación documental del teletrabajo</li>
              <li>• Plan de trabajo anual y cronograma de capacitación</li>
            </ul>
          </article>

          {/* Card 3 */}
          <article className="rounded-2xl border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-orange-600/10 text-orange-700 p-2">
                <RefreshCcw className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Evaluación y mejora continua</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Evaluación periódica de la gestión del teletrabajo</li>
              <li>• Planes de mejora y optimización</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
