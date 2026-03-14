import type { Metadata } from "next";
import { HeroHeader } from "@/components/header"
import PageHeader from "@/components/page-header"
import { Feature17 } from "@/components/feature17"
import FinalCta from "@/components/final-cta"

export const metadata: Metadata = {
  title: "SG-SST: Sistema de Gestión de Seguridad y Salud en el Trabajo",
  description:
    "Implementa, audita y mejora tu Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) con HumanIA. Cumplimiento legal, cultura de seguridad y bienestar laboral.",
  openGraph: {
    title: "SG-SST | HumanIA",
    description:
      "Consultoría experta en SG-SST: diagnóstico, implementación, auditoría y mejora continua conforme a la normativa colombiana.",
    url: "https://humania.com.co/blog",
  },
  alternates: { canonical: "https://humania.com.co/blog" },
};

export default function SgSstPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1">
        <PageHeader
          label="Salud y Seguridad Laboral"
          title="Sistema de Gestión SG-SST"
          description="Acompañamos a las organizaciones en todas las fases del SG-SST conforme al Decreto 1072 de 2015, la Resolución 0312 de 2019 y la norma ISO 45001:2018, garantizando el cumplimiento normativo y la promoción del bienestar laboral."
          breadcrumb="SG-SST"
        />
        <Feature17 />
        <FinalCta />
      </main>
    </div>
  )
}
