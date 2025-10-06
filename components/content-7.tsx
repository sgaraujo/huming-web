'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContentSection() {
  return (
    <section>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-bold lg:text-5xl">
          ¿Por qué elegir HumanIA?
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative space-y-4">
            <p className="text-black dark:text-gray-300">
              En HumanIA desarrollamos soluciones a la medida para la
              implementación, auditoría y mejora de sistemas de gestión bajo
              normas ISO y legislación vigente. Nuestro enfoque combina
              experiencia técnica con acompañamiento personalizado, ayudando a
              las organizaciones a cumplir sus objetivos estratégicos y legales,
              fortalecer su cultura organizacional y garantizar ambientes de
              trabajo seguros y sostenibles.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4 pb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" width="16" height="16" style={{ color: 'currentColor' }} className="text-purple-900 dark:text-purple-400" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-sm font-medium text-purple-900 dark:text-purple-400">
                    Especialistas en Normas ISO
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  9001, 14001, 45001, entre otras.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" width="16" height="16" style={{ color: 'rgb(14,165,233)' }} fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <line x1="9" y1="1" x2="9" y2="4" />
                    <line x1="15" y1="1" x2="15" y2="4" />
                    <line x1="9" y1="20" x2="9" y2="23" />
                    <line x1="15" y1="20" x2="15" y2="23" />
                    <line x1="20" y1="9" x2="23" y2="9" />
                    <line x1="20" y1="14" x2="23" y2="14" />
                    <line x1="1" y1="9" x2="4" y2="9" />
                    <line x1="1" y1="14" x2="4" y2="14" />
                  </svg>
                  <h3 className="text-sm font-medium text-sky-500">
                    Enfoque en Seguridad y Salud en el Trabajo
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Diseño, implementación y auditoría del SG-SST.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" width="16" height="16" style={{ color: 'rgb(5,150,105)' }} fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                  <h3 className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Servicios integrales
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Capacitaciones, consultoría, venta y soporte técnico.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" width="16" height="16" style={{ color: 'rgb(244,63,94)' }} fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <h3 className="text-sm font-medium text-rose-500 dark:text-rose-400">
                    Proyección regional
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Presencia en Colombia, la CAN y países asociados.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-6 sm:mt-0 pb-5">
            <div className="relative aspect-video rounded-2xl bg-gradient-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/SeguridadEnTrabajo.webp"
                className="hidden rounded-2xl dark:block"
                alt="Ilustración seguridad en el trabajo (modo oscuro)"
                width={1206}
                height={612}
                priority
              />
              <Image
                src="/SeguridadEnTrabajo.webp"
                className="rounded-2xl shadow dark:hidden"
                alt="Ilustración seguridad en el trabajo (modo claro)"
                width={1206}
                height={612}
                priority
              />
            </div>
          </div>
        </div>

        {/* Redes Sociales (bloque con defensas anti-CSS) */}
        <div className="pt-8 pb-8">
          <div className="relative z-[9999] pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Síguenos en redes sociales
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Mantente actualizado con nuestras novedades y contenido
              </p>
            </div>

            <div className="flex gap-3">
              {/* Instagram */}
              <Link href="https://www.instagram.com/human_ia_co?igsh=MWt1MjNzdW52NzVwdg==" target="_blank" rel="noopener noreferrer" prefetch={false} aria-label="Instagram" title="Instagram" className="group">
                <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                  {/* Fallback visible */}
                  <svg viewBox="0 0 24 24" width="20" height="20" style={{ color: '#fff' }} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
              </Link>

              {/* Facebook */}
              <Link href="https://www.facebook.com/share/17H68FUwVy/" target="_blank" rel="noopener noreferrer" prefetch={false} aria-label="Facebook" title="Facebook" className="group">
                <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  <svg viewBox="0 0 24 24" width="20" height="20" style={{ color: '#fff' }} fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </Link>

              {/* TikTok */}
              <Link href="https://www.tiktok.com/@humania1725?_t=ZS-8zeXUYY0Mie&_r=1" target="_blank" rel="noopener noreferrer" prefetch={false} aria-label="TikTok" title="TikTok" className="group">
                <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 bg-gradient-to-r from-gray-800 to-red-600 hover:from-gray-900 hover:to-red-700">
                  <svg viewBox="0 0 24 24" width="20" height="20" style={{ color: '#fff' }} fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </div>
              </Link>

              {/* X / Twitter */}
              <Link href="https://x.com/HumanIA2025?t=mIGyXxJv0hTZ86afYNAkNw&s=09" target="_blank" rel="noopener noreferrer" prefetch={false} aria-label="Twitter/X" title="Twitter/X" className="group">
                <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black">
                  <svg viewBox="0 0 24 24" width="20" height="20" style={{ color: '#fff' }} fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Contacto */}
        <div className="pb-12">
          <Link href="/contacto" prefetch={false} aria-label="Ir a contacto">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-purple-600 to-green-500 p-[2px] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative rounded-2xl bg-white dark:bg-gray-900 p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      ¿Listo para comenzar?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:gap-4">
                      Contáctanos
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
