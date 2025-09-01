"use client"

import Link from "next/link"

export default function DesarrolloTecnologico() {
  return (
    <section className="py-20  bg-gradient-to-b from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        {/* Título */}
        <h2 className="text-4xl pt-20 md:text-5xl font-extrabold mb-6 text-purple-700 dark:text-purple-400">
          Desarrollo Tecnológico
        </h2>

        {/* Descripción */}
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
          Acompañamos a tu organización con soluciones tecnológicas prácticas: desarrollo de
          software, mantenimiento y actualización de sistemas, soporte técnico y creación de
          plataformas o sitios web alineados a tus objetivos de negocio.
        </p>

        {/* Grid de features */}
        <div className="grid gap-8 md:grid-cols-2 text-left">
          {/* Programación */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition border-l-4 border-purple-500">
            <h3 className="font-semibold text-xl text-purple-700 dark:text-purple-300 mb-2">
              Desarrollo de software (Programación)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Construimos soluciones a la medida con buenas prácticas y enfoque en rendimiento.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
              <li>Back-end y front-end modernos.</li>
              <li>Stacks como JavaScript/TypeScript, Python, Java, etc.</li>
              <li>Integración con APIs y servicios externos.</li>
            </ul>
          </div>

          {/* Mantenimiento */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition border-l-4 border-purple-500">
            <h3 className="font-semibold text-xl text-purple-700 dark:text-purple-300 mb-2">
              Mantenimiento y actualización
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Mejoramos y mantenemos tus sistemas para adaptarlos a nuevas necesidades.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
              <li>Refactor y optimización de código.</li>
              <li>Actualización de dependencias y librerías.</li>
              <li>Corrección de errores y mejoras de seguridad.</li>
            </ul>
          </div>

          {/* Soporte / solución de problemas */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition border-l-4 border-purple-500">
            <h3 className="font-semibold text-xl text-purple-700 dark:text-purple-300 mb-2">
              Solución de problemas y soporte
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Diagnosticamos y resolvemos incidentes técnicos que afecten la operación.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
              <li>Atención de incidencias y rendimiento.</li>
              <li>Soporte en despliegues y entornos.</li>
              <li>Mejores prácticas para continuidad del servicio.</li>
            </ul>
          </div>

          {/* Creación (web/plataformas) */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition border-l-4 border-purple-500">
            <h3 className="font-semibold text-xl text-purple-700 dark:text-purple-300 mb-2">
              Creación de sitios web y plataformas
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Diseñamos y lanzamos productos digitales listos para crecer.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
              <li>Webs corporativas, landings y e-commerce.</li>
              <li>Plataformas internas según tu proceso.</li>
              <li>SEO técnico y buenas métricas de performance.</li>
            </ul>
          </div>
        </div>

        {/* Botones */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <Link
            href="/servicios"
            className="inline-block px-8 py-3 bg-purple-600 text-white font-medium text-lg rounded-full shadow-md hover:bg-purple-700 transition"
          >
            Volver a Servicios
          </Link>
          <Link
            href="/contacto"
            className="inline-block px-8 py-3 border border-purple-300 text-purple-700 dark:text-purple-300 font-medium text-lg rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/30 transition"
          >
            Solicitar propuesta
          </Link>
        </div>
      </div>
    </section>
  )
}