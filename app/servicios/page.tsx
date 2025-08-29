"use client";
import {HeroHeader} from "@/components/header"
import WhatsappButton from "@/components/ui/WhatsappButton"
import Features from "@/components/features-12"
export default function QuienesSomosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1 pt-5">
        <Features />

        {/* Aquí puedes insertar más secciones como <Servicios /> */}
      </main>
      <footer className="bg-muted text-center text-sm py-4">
        © {new Date().getFullYear()} HumanIA. Todos los derechos reservados.
      </footer>
      <WhatsappButton />
    </div>
  )
}
