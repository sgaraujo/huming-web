import {HeroHeader} from "@/components/header"
import WhatsappButton from "@/components/ui/WhatsappButton"
import ContactSection from "@/components/contact"
export default function QuienesSomosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1">
        <ContactSection />

        {/* Aquí puedes insertar más secciones como <Servicios /> */}
      </main>
      <footer className="bg-muted text-center text-sm py-4">
        © {new Date().getFullYear()} HumanIA. Todos los derechos reservados.
      </footer>
      <WhatsappButton />
    </div>
  )
}
