import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface PageHeaderProps {
  label: string
  title: string
  description: string
  breadcrumb?: string
}

export default function PageHeader({ label, title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-slate-50 pt-28 pb-14 lg:pt-32">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full bg-orange-100/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-slate-100/60 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="flex items-center gap-1 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-orange-600 transition-colors">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-700 font-medium">{breadcrumb}</span>
          </div>
        )}

        <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
          {label}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  )
}
