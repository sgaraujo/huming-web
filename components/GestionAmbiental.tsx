"use client"

import Link from "next/link"

export default function GestionAmbiental() {
  return (
    <section className="pt-32 pb-32 bg-gradient-to-b from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-green-700 dark:text-green-400">
          Gestión Ambiental
        </h2>

        {/* Descripción */}
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
          Diseñamos e implementamos estrategias sostenibles para reducir impactos,
          optimizar recursos y cumplir la normativa ambiental. Alineamos tus procesos
          con buenas prácticas de sostenibilidad y economía circular.
        </p>

        {/* Grid de características */}
        <div className="grid gap-8 md:grid-cols-2 text-left">
          {/* Tarjeta */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-300/60 shadow-lg hover:shadow-xl hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-green-700 mb-2">
              Construcción sostenible
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Diseñamos muros verdes y soluciones para mejorar la eficiencia energética.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-300/60 shadow-lg hover:shadow-xl hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-green-700 mb-2">Agua</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Proveemos productos y tecnologías para el ahorro y uso eficiente del recurso hídrico.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-300/60 shadow-lg hover:shadow-xl hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-green-700 mb-2">Energía</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Implementamos y suministramos sistemas orientados a la eficiencia energética.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-300/60 shadow-lg hover:shadow-xl hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-green-700 mb-2">Economía circular</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Impulsamos estrategias circulares para una cadena de suministro más rentable y sostenible.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-300/60 shadow-lg hover:shadow-xl hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300 md:col-span-2">
            <h3 className="font-semibold text-xl text-green-700 mb-2">Consultoría</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
              <li>Acompañamiento al Departamento de Gestión Ambiental (DGA).</li>
              <li>Normatividad y permisos ambientales.</li>
              <li>Planes de mejoramiento ambiental.</li>
            </ul>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-300/60 shadow-lg hover:shadow-xl hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-green-700 mb-2">Huella de carbono</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Optamos por materiales sostenibles y responsables en cada proyecto,
              asegurando un impacto ambiental reducido.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-300/60 shadow-lg hover:shadow-xl hover:border-green-400/80 hover:-translate-y-1 transition-all duration-300 md:col-span-2">
            <h3 className="font-semibold text-xl text-green-700 mb-2">Educación</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
              <li>Capacitación en huella hídrica.</li>
              <li>Capacitación en economía circular.</li>
              <li>Sensibilización ambiental.</li>
              <li>Formación en negocios verdes.</li>
            </ul>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Botón Solicitar Servicios */}
          <Link href="/contacto">
            <button className="group relative rounded-2xl bg-gradient-to-r from-green-500 to-green-600 px-10 py-4 text-white font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-200/50 hover:-translate-y-1 text-lg">
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
            <button className="group relative rounded-2xl bg-white border-2 border-green-300 px-10 py-4 text-green-600 font-semibold hover:bg-green-50 hover:border-green-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-200/50 hover:-translate-y-1 text-lg">
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