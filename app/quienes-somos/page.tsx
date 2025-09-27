
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
      <main className="flex-1 pt-5">
        <TeamSection />
        <Features />
       < StatsSection />
       < ContentSection />

        {/* Aquí puedes insertar más secciones como <Servicios /> */}
      </main>
      <footer className="text-center text-sm py-4 pt-10">
        © {new Date().getFullYear()} HumanIA. Todos los derechos reservados.
      </footer>
      <WhatsappButton />
    </div>
  )
}
