import type { Metadata } from "next";
import { HeroHeader } from "@/components/header"
import PageHeader from "@/components/page-header"
import GestionAmbiental from "@/components/GestionAmbiental"
import FinalCta from "@/components/final-cta"

export const metadata: Metadata = {
  title: "Gestión Ambiental: ISO 14001 y SGA",
  description:
    "Implementa y certifica tu Sistema de Gestión Ambiental (SGA) bajo la norma ISO 14001. Diagnóstico, gestión de residuos, impacto ambiental y cumplimiento regulatorio.",
  openGraph: {
    title: "Gestión Ambiental | HumanIA",
    description:
      "Consultoría en ISO 14001 y gestión ambiental empresarial: auditoría, implementación y mejora continua para empresas en Colombia.",
    url: "https://humania.com.co/blog5",
  },
  alternates: { canonical: "https://humania.com.co/blog5" },
};

export default function GestionAmbientalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1">
        <PageHeader
          label="Sostenibilidad"
          title="Gestión Ambiental"
          description="Diseñamos e implementamos estrategias sostenibles para reducir impactos, optimizar recursos y cumplir la normativa ambiental. Alineamos tus procesos con buenas prácticas de sostenibilidad y economía circular."
          breadcrumb="Gestión Ambiental"
        />
        <GestionAmbiental />
        <FinalCta />
      </main>
    </div>
  )
}
