import Link from 'next/link'
import { MessageCircle, ArrowRight, MapPin, Clock } from 'lucide-react'

const WA_URL =
  "https://wa.me/573102365931?text=Hola%2C%20quiero%20información%20sobre%20los%20servicios%20de%20HumanIA"

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_700px_500px_at_top_left,rgba(251,146,60,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_700px_500px_at_bottom_right,rgba(139,92,246,0.14),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center space-y-10">
        {/* Copy */}
        <div className="space-y-5">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
            ¿Listo para comenzar?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Hablemos sobre{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              tu empresa
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Contáctanos hoy y recibe una asesoría inicial sin costo. Nuestro equipo está
            listo para ayudarte a cumplir la normativa y fortalecer tu gestión empresarial.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Escribir por WhatsApp
          </a>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02]"
          >
            Ir a Contacto
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Info strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            Lun–Vie, 8:00 AM – 5:00 PM
          </span>
          <span className="hidden sm:block w-px h-4 bg-slate-700" />
          <a href="tel:+573102365931" className="flex items-center gap-1.5 hover:text-slate-400 transition-colors">
            +57 310 236 5931
          </a>
          <span className="hidden sm:block w-px h-4 bg-slate-700" />
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Bogotá, Colombia — Cobertura nacional
          </span>
        </div>
      </div>
    </section>
  )
}
