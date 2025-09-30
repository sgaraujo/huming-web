'use client'

import { HeroHeader } from "@/components/header"
import TeamSection from "@/components/team"
import WhatsappButton from "@/components/ui/WhatsappButton"
import Features from "@/components/features-1"
import StatsSection from "@/components/stats"
import ContentSection from "@/components/content-3"
import DecorativeBackground from "@/components/DecorativeBackground"

export default function QuienesSomosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <HeroHeader />

      <main className="relative flex-1 overflow-hidden">
        {/* Fondo reutilizable (más suave) */}
        

        {/* Contenido sobre el fondo */}
        <div className="relative z-10">
          {/* Separación vertical uniforme entre secciones */}
          <div className="container mx-auto max-w-6xl px-6 space-y-20 py-12">
            <TeamSection />
            <Features />
            <StatsSection />
            <ContentSection />
            {/* Más secciones aquí */}
          </div>
        </div>
      </main>

      <footer className="text-center text-sm py-8">
        © {new Date().getFullYear()} HumanIA. Todos los derechos reservados.
      </footer>

      <WhatsappButton />
    </div>
  )
}
