import type { Metadata } from "next";
import { HeroHeader } from "@/components/header"
import PageHeader from "@/components/page-header"
import PesvSection from "@/components/pesv-section"
import FinalCta from "@/components/final-cta"

export const metadata: Metadata = {
  title: "Plan Estratégico de Seguridad Vial (PESV)",
  description:
    "Diseña e implementa tu Plan Estratégico de Seguridad Vial (PESV) conforme a la Resolución 40595 de 2022. Diagnóstico, políticas, indicadores y mejora continua.",
  openGraph: {
    title: "PESV - Plan Estratégico de Seguridad Vial | HumanIA",
    description:
      "Asesoría en PESV: diseño, implementación y auditoría de planes de seguridad vial para empresas en Colombia conforme a la normativa vigente.",
    url: "https://humania.com.co/blog4",
  },
  alternates: { canonical: "https://humania.com.co/blog4" },
};

export default function SeguridadVial() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1">
        <PageHeader
          label="Seguridad Vial"
          title="Plan Estratégico de Seguridad Vial (PESV)"
          description="Diseñamos, implementamos, evaluamos y mejoramos tu PESV conforme a la Resolución 40595 de 2022 e ISO 39001, ajustado al tamaño y la misionalidad de tu organización."
          breadcrumb="PESV"
        />
        <PesvSection />
        <FinalCta />
      </main>
    </div>
  )
}
