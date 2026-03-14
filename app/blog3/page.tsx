import type { Metadata } from "next";
import { HeroHeader } from "@/components/header"
import PageHeader from "@/components/page-header"
import TeletrabajoSection from "@/components/teletrabajo-section"
import FinalCta from "@/components/final-cta"

export const metadata: Metadata = {
  title: "Teletrabajo: Implementación Legal y Estratégica",
  description:
    "Implementa el teletrabajo en tu empresa cumpliendo la Ley 1221 y el Decreto 1072. Políticas, procedimientos, ergonomía y SST para trabajo remoto.",
  openGraph: {
    title: "Teletrabajo | HumanIA",
    description:
      "Asesoría para implementar el teletrabajo de forma legal y estratégica en Colombia. Cumple la normativa y protege a tus trabajadores remotos.",
    url: "https://humania.com.co/blog3",
  },
  alternates: { canonical: "https://humania.com.co/blog3" },
};

export default function Teletrabajo() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1">
        <PageHeader
          label="Trabajo Remoto"
          title="Teletrabajo"
          description="Implementamos y formalizamos el teletrabajo en tu organización conforme al Decreto 1072 de 2015 y la Circular Externa 0027 de 2019, con enfoque práctico, cumplimiento normativo y bienestar laboral."
          breadcrumb="Teletrabajo"
        />
        <TeletrabajoSection />
        <FinalCta />
      </main>
    </div>
  )
}
