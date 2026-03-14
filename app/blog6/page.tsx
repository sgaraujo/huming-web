import type { Metadata } from "next";
import { HeroHeader } from "@/components/header"
import PageHeader from "@/components/page-header"
import DesarrolloTecnologico from "@/components/DesarrolloTecnologico"
import FinalCta from "@/components/final-cta"

export const metadata: Metadata = {
  title: "Desarrollo Tecnológico para la Gestión Empresarial",
  description:
    "Soluciones tecnológicas a la medida para digitalizar y automatizar la gestión de SST, calidad y medio ambiente. Software, plataformas y herramientas para tu empresa.",
  openGraph: {
    title: "Desarrollo Tecnológico | HumanIA",
    description:
      "Innovación tecnológica al servicio de la gestión empresarial: sistemas digitales para SG-SST, ISO y cumplimiento normativo.",
    url: "https://humania.com.co/blog6",
  },
  alternates: { canonical: "https://humania.com.co/blog6" },
};

export default function DesarrolloTecnologicoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1">
        <PageHeader
          label="Innovación Digital"
          title="Desarrollo Tecnológico"
          description="Acompañamos a tu organización con soluciones tecnológicas prácticas: desarrollo de software, mantenimiento de sistemas, soporte técnico y creación de plataformas o sitios web alineados a tus objetivos de negocio."
          breadcrumb="Desarrollo Tecnológico"
        />
        <DesarrolloTecnologico />
        <FinalCta />
      </main>
    </div>
  )
}
