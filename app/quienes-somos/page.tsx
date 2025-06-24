import {HeroHeader} from "@/components/header"
import TeamSection from "@/components/team"
import WhatsappButton from "@/components/ui/WhatsappButton"
import Features from "@/components/features-1"
import StatsSection from "@/components/stats"
import ContentSection from "@/components/content-3"
export default function QuienesSomosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1">
        <TeamSection />
        <Features />
       < StatsSection />
       < ContentSection />

        {/* Aquí puedes insertar más secciones como <Servicios /> */}
      </main>
      <footer className="bg-muted text-center text-sm py-4">
        © {new Date().getFullYear()} HumIng SAS. Todos los derechos reservados.
      </footer>
      <WhatsappButton />
    </div>
  )
}
