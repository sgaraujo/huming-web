import WhatsappButton from "@/components/ui/WhatsappButton"
import { HeroHeader } from "@/components/header"
import TeletrabajoSection from "@/components/teletrabajo-section"
import Link from "next/link"

export default function Teletrabajo() {
    return (
        <div className="flex min-h-screen flex-col">
            <HeroHeader />
            <main className="flex-1 relative">
                {/* Fondo decorativo optimizado para tema azul */}
                <div className="absolute inset-0 z-[-1]">
                    {/* Fondo base */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-25 via-white to-blue-25" />
                    
                    {/* Gradientes decorativos */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.06),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(147,197,253,0.05),transparent_60%)]" />
                    
                    {/* Textura sutil */}
                    <div
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.008' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%233b82f6'/%3E%3C/svg%3E")`,
                        }}
                    />
                    
                    {/* Puntos decorativos */}
                    <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300/30 rounded-full animate-pulse" />
                    <div className="absolute top-40 right-20 w-3 h-3 bg-sky-300/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-blue-400/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                {/* Contenido principal */}
                <div className="relative z-10">
                    <TeletrabajoSection />
                </div>
            </main>

            <footer className="bg-gradient-to-r from-sky-50 to-blue-50 border-t border-blue-100/50 text-center text-sm py-6 relative">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
                <p className="relative z-10 text-slate-600">
                    © {new Date().getFullYear()} HumanIA. Todos los derechos reservados.
                </p>
            </footer>
            
            <WhatsappButton />
        </div>
    )
}