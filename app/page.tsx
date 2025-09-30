'use client'

import { HeroHeader } from "@/components/header"
import HeroSection from "@/components/hero-section"
import ContentSection from "@/components/content-7"
import WhatsappButton from "@/components/ui/WhatsappButton"
import DecorativeBackground from "@/components/DecorativeBackground" // ⬅️ importa el fondo reutilizable

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1 relative overflow-hidden">
        {/* Fondo global igual al de Contact */}
        <DecorativeBackground />
        {/* Contenido por encima del fondo */}
        <div className="relative z-10">
          <HeroSection />
          <ContentSection />
          {/* Aquí puedes insertar más secciones como <Servicios /> */}
        </div>
      </main>

      <footer className="text-center text-sm py-4 pt-5">
        © {new Date().getFullYear()} HumanIA. Todos los derechos reservados.
      </footer>

      <WhatsappButton />
    </div>
  )
}
