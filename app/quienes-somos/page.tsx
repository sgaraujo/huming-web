import type { Metadata } from "next";
import { HeroHeader } from "@/components/header"
import PageHeader from "@/components/page-header"
import TeamSection from "@/components/team"
import Features from "@/components/features-1"
import StatsSection from "@/components/stats"
import FinalCta from "@/components/final-cta"

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Conoce al equipo de HumanIA: profesionales multidisciplinarios en ingeniería, salud ocupacional, calidad, medio ambiente y normativa ISO comprometidos con tu empresa.",
  openGraph: {
    title: "Quiénes somos | HumanIA",
    description:
      "Equipo experto en salud y seguridad en el trabajo, sistemas de gestión ISO y asesoría laboral para empresas en Colombia.",
    url: "https://humania.com.co/quienes-somos",
  },
  alternates: { canonical: "https://humania.com.co/quienes-somos" },
};

export default function QuienesSomosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1">

        <PageHeader
          label="Sobre nosotros"
          title="Somos HumanIA"
          description="Una empresa nacida para simplificar lo complejo y transformar la normativa en algo realmente útil para las organizaciones colombianas."
          breadcrumb="Quiénes somos"
        />

        {/* Equipo + foto */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <TeamSection />
          </div>
        </section>

        {/* Cómo nació HumanIA */}
        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Nuestra historia</p>
                <h2 className="text-4xl font-bold text-slate-900 mb-5">¿Cómo nació HumanIA?</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  HumanIA nace de la necesidad de crear soluciones prácticas, humanas y
                  accesibles para las pequeñas y medianas empresas que buscan cumplir con
                  normativas vigentes y mejorar sus ambientes laborales. Nuestro propósito
                  es claro: simplificar lo complejo y transformar lo normativo en algo
                  realmente útil para las organizaciones.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '25+', label: 'Empresas asesoradas' },
                  { number: '10+', label: 'Sectores económicos' },
                  { number: '100%', label: 'Auditorías superadas' },
                  { number: '7', label: 'Líneas de servicio' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
                    <p className="text-3xl font-bold text-orange-500 mb-1">{stat.number}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <Features />

        {/* Stats animadas */}
        <StatsSection />

        {/* CTA final */}
        <FinalCta />
      </main>
    </div>
  )
}
