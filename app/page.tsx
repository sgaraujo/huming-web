import {HeroHeader} from "@/components/header"
import HeroSection from "@/components/hero-section"
import ContentSection from "@/components/content-7"
import WhatsappButton from "@/components/ui/WhatsappButton"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1">
        <HeroSection />
        <ContentSection />
        {/* Aquí puedes insertar más secciones como <Servicios /> */}
      </main>
      <footer className="bg-muted text-center text-sm py-4">
        © {new Date().getFullYear()} HumIng SAS. Todos los derechos reservados.
      </footer>
      <WhatsappButton />
    </div>
  )
}
