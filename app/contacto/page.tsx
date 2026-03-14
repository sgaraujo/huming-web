import type { Metadata } from "next";
import { HeroHeader } from "@/components/header"
import PageHeader from "@/components/page-header"
import ContactSection from "@/components/contact"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos por WhatsApp, correo o teléfono. El equipo de HumanIA está disponible de lunes a viernes de 8:00 AM a 5:00 PM para atender tus necesidades.",
  openGraph: {
    title: "Contacto | HumanIA",
    description:
      "Escríbenos o llámanos. Estamos en Bogotá, Colombia, con cobertura a nivel nacional e internacional.",
    url: "https://humania.com.co/contacto",
  },
  alternates: { canonical: "https://humania.com.co/contacto" },
};

export default function ContactoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1">

        <PageHeader
          label="Escríbenos"
          title="Contáctanos"
          description="Estamos aquí para ayudarte. Conversemos sobre las necesidades de tu empresa y diseñemos juntos la mejor solución."
          breadcrumb="Contacto"
        />

        <ContactSection />
      </main>
    </div>
  )
}
