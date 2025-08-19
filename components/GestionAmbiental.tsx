"use client"

import Link from "next/link"

export default function GestionAmbiental() {
  return (
    <section className=" pt-32 pb-32 bg-gradient-to-b from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
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
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold text-xl text-green-700 mb-2">
              Construcción sostenible
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Diseñamos muros verdes y soluciones para mejorar la eficiencia energética.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold text-xl text-green-700 mb-2">Agua</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Proveemos productos y tecnologías para el ahorro y uso eficiente del recurso hídrico.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold text-xl text-green-700 mb-2">Energía</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Implementamos y suministramos sistemas orientados a la eficiencia energética.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold text-xl text-green-700 mb-2">Economía circular</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Impulsamos estrategias circulares para una cadena de suministro más rentable y sostenible.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition md:col-span-2">
            <h3 className="font-semibold text-xl text-green-700 mb-2">Consultoría</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
              <li>Acompañamiento al Departamento de Gestión Ambiental (DGA).</li>
              <li>Normatividad y permisos ambientales.</li>
              <li>Planes de mejoramiento ambiental.</li>
            </ul>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold text-xl text-green-700 mb-2">Huella de carbono</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Optamos por materiales sostenibles y responsables en cada proyecto,
              asegurando un impacto ambiental reducido.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition md:col-span-2">
            <h3 className="font-semibold text-xl text-green-700 mb-2">Educación</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
              <li>Capacitación en huella hídrica.</li>
              <li>Capacitación en economía circular.</li>
              <li>Sensibilización ambiental.</li>
              <li>Formación en negocios verdes.</li>
            </ul>
          </div>
        </div>

        {/* Botón para volver */}
        <div className="mt-16">
          <Link
            href="/servicios"
            className="inline-block px-8 py-3 bg-green-600 text-white font-medium text-lg rounded-full shadow-md hover:bg-green-700 transition"
          >
            ← Volver a Servicios
          </Link>
        </div>
      </div>
    </section>
  )
}
