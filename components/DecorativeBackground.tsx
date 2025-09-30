'use client'
import React from 'react'

/**
 * Fondo decorativo con gradiente + blobs animados.
 * Úsalo dentro de una sección con `relative overflow-hidden`.
 */
export default function DecorativeBackground({
  gradient = 'from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-950',
  className = '',
}: {
  gradient?: string
  className?: string
}) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Gradiente base */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      {/* Blobs */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply blur-xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply blur-xl animate-pulse delay-1000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply blur-xl animate-pulse delay-500" />
      </div>
    </div>
  )
}
