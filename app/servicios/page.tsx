import type { Metadata } from "next";
import { HeroHeader } from "@/components/header"
import PageHeader from "@/components/page-header"
import ServicesSection from "@/components/features-12"
import FinalCta from "@/components/final-cta"

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de HumanIA: SG-SST, riesgo psicosocial, teletrabajo, PESV, gestión ambiental, asesoría jurídica laboral y desarrollo tecnológico. Soluciones integrales para tu empresa.",
  openGraph: {
    title: "Servicios | HumanIA",
    description:
      "Descubre todos los servicios de consultoría que HumanIA ofrece para fortalecer la gestión empresarial y el cumplimiento normativo en Colombia.",
    url: "https://humania.com.co/servicios",
  },
  alternates: { canonical: "https://humania.com.co/servicios" },
};

export default function ServiciosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1">

        <PageHeader
          label="Lo que hacemos"
          title="Nuestros Servicios"
          description="Soluciones integrales para la implementación, auditoría y mejora de sistemas de gestión bajo normas ISO y legislación vigente en Colombia."
          breadcrumb="Servicios"
        />

        <ServicesSection />

        <FinalCta />
      </main>
    </div>
  )
}
