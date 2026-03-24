'use client'

import Link from 'next/link'
import { HeroCarousel } from './HeroCarousel'
import { ArrowRight, Shield, CheckCircle, MessageCircle } from 'lucide-react'

const WA_URL =
  'https://wa.me/573102365931?text=Hola%2C%20quiero%20información%20sobre%20los%20servicios%20de%20HumanIA'

const certs = ['ISO 45001', 'ISO 9001', 'ISO 14001', 'SG-SST', 'PESV']

export default function HeroMain() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute top-1/2 -right-48 w-[400px] h-[400px] rounded-full bg-orange-50/80 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-sm font-semibold">
              <Shield className="w-4 h-4 flex-shrink-0" />
              Consultoría en SST · ISO · Gestión Empresarial
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Cumple la norma.
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Protege tu empresa.
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Implementamos sistemas de gestión bajo normas ISO y legislación
              vigente. Acompañamos a tu organización desde el diagnóstico
              hasta la certificación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Hablar por WhatsApp
              </a>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 text-slate-800 font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-sm"
              >
                Ver servicios
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-1">
              {certs.map((cert) => (
                <div key={cert} className="flex items-center gap-1.5 text-slate-500 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: carousel ── */}
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-orange-200/50 ring-1 ring-orange-100">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
