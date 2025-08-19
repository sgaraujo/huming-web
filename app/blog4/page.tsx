import WhatsappButton from "@/components/ui/WhatsappButton"
import { HeroHeader } from "@/components/header"
import PesvSection from "@/components/pesv-section"

export default function blog1() {
    return (
        <div className="flex min-h-screen flex-col">
            <HeroHeader />
            <main className="flex-1 relative z-0">
                {/* Fondo decorativo */}
                <div className="absolute inset-0 z-[-1] bg-white dark:bg-gray-950">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.1),transparent_70%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.1),transparent_70%)]" />
                    <div
                        className="absolute inset-0 opacity-[0.3] dark:opacity-[0.15] backdrop-blur-[100px]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        }}
                    />
                    <div className="absolute inset-0 backdrop-blur-[100px]" />
                </div>

                {/* Secciones del sitio */}
                <PesvSection />
            </main>

            <footer className="bg-muted text-center text-sm py-4">
                © {new Date().getFullYear()} HumanIA. Todos los derechos reservados.
            </footer>
            <WhatsappButton />
        </div>
    )
}

