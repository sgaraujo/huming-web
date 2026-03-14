import type { Metadata } from "next";
import { HeroHeader } from "@/components/header"
import PageHeader from "@/components/page-header"
import { FeatureRiesgo } from "@/components/featureRiesgo"
import FinalCta from "@/components/final-cta"

export const metadata: Metadata = {
  title: "Riesgo Psicosocial: Evaluación e Intervención",
  description:
    "Evaluamos e intervenimos los factores de riesgo psicosocial en tu empresa. Resolución 2646 y 2404. Baterías de riesgo, planes de acción y seguimiento continuo.",
  openGraph: {
    title: "Riesgo Psicosocial | HumanIA",
    description:
      "Consultoría en riesgo psicosocial laboral: evaluación con baterías validadas, planes de intervención y cumplimiento normativo.",
    url: "https://humania.com.co/blog2",
  },
  alternates: { canonical: "https://humania.com.co/blog2" },
};

export default function RiesgoPsicosocial() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1">
        <PageHeader
          label="Bienestar Laboral"
          title="Riesgo Psicosocial"
          description="Identificamos, evaluamos e intervenimos los factores de riesgo psicosocial en tu organización, promoviendo el bienestar emocional, la salud mental y el equilibrio trabajo–familia de tus colaboradores."
          breadcrumb="Riesgo Psicosocial"
        />
        <FeatureRiesgo />
        <FinalCta />
      </main>
    </div>
  )
}
