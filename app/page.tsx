import type { Metadata } from "next";
import { HeroHeader } from "@/components/header"
import HeroMain from "@/components/hero-main"
import StatsSection from "@/components/stats"
import AutoevaluacionCta from "@/components/autoevaluacion-cta"
import ServicesGridHome from "@/components/services-grid-home"
import ContentSection from "@/components/content-7"
import HowWeWork from "@/components/how-we-work"
import FinalCta from "@/components/final-cta"

export const metadata: Metadata = {
  title: "Consultoría en SG-SST y Sistemas de Gestión ISO en Colombia",
  description:
    "HumanIA ofrece consultoría especializada en SG-SST, normas ISO 9001, 14001 y 45001, riesgo psicosocial, PESV y más. Acompañamos a tu empresa con soluciones a la medida en Colombia.",
  openGraph: {
    title: "HumanIA | Consultoría en SG-SST y Sistemas de Gestión ISO",
    description:
      "Soluciones a la medida para implementar, auditar y mejorar sistemas de gestión bajo normas ISO y legislación vigente. Empresas en Colombia y la CAN.",
    url: "https://humania.com.co",
  },
  alternates: { canonical: "https://humania.com.co" },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1 bg-gradient-to-b from-orange-50 via-white to-orange-50/30">
        {/* 1. Hero: headline + CTAs + carousel */}
        <HeroMain />

        {/* 2. Stats: 25+ empresas, 10+ sectores, 100% auditorías */}
        <StatsSection />

        {/* 3. Autoevaluación SG-SST CTA */}
        <AutoevaluacionCta />

        {/* 4. Services grid: 7 servicios con iconos */}
        <ServicesGridHome />

        {/* 4. ¿Por qué HumanIA? (sección existente) */}
        <ContentSection />

        {/* 5. Cómo trabajamos: 4 pasos */}
        <HowWeWork />

        {/* 6. CTA final */}
        <FinalCta />
      </main>
    </div>
  )
}
