import type { Metadata } from "next";
import { HeroHeader } from "@/components/header"
import PageHeader from "@/components/page-header"
import AsesoriaJuridica from "@/components/AsesoriaJuridica"
import FinalCta from "@/components/final-cta"

export const metadata: Metadata = {
  title: "Asesoría Jurídica Laboral",
  description:
    "Asesoría jurídica en derecho laboral colombiano: contratos, despidos, acoso laboral, SG-SST y cumplimiento de la normativa del Ministerio del Trabajo.",
  openGraph: {
    title: "Asesoría Jurídica Laboral | HumanIA",
    description:
      "Expertos en derecho laboral: contratos, nómina, acoso laboral, normativa SST y representación ante entidades de control en Colombia.",
    url: "https://humania.com.co/blog7",
  },
  alternates: { canonical: "https://humania.com.co/blog7" },
};

export default function AsesoriaJuridicaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1">
        <PageHeader
          label="Derecho Laboral"
          title="Asesoría Jurídica Laboral"
          description="Brindamos asesoría jurídica especializada en derecho laboral, garantizando el cumplimiento normativo y la protección de los derechos tanto de empleadores como de trabajadores colombianos."
          breadcrumb="Asesoría Jurídica"
        />
        <AsesoriaJuridica />
        <FinalCta />
      </main>
    </div>
  )
}
