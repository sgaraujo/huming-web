import WhatsappButton from "@/components/ui/WhatsappButton"
import { Hero7 } from "@/components/hero7"
import { Feature17 } from "@/components/feature17"
import { HeroHeader } from "@/components/header"

export default function blog1() {
    return (
        <div className="flex min-h-screen flex-col relative overflow-hidden">
            <HeroHeader />
            
            <main className="flex-1 relative z-0">
                {/* Enhanced decorative background */}
                <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
                    {/* Primary gradient overlays */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_800px_at_top_left,rgba(79,70,229,0.12),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_1000px_600px_at_bottom_right,rgba(16,185,129,0.1),transparent_60%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_center,rgba(236,72,153,0.08),transparent_70%)]" />
                    
                    {/* Animated gradient orbs */}
                    <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-40 right-32 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-2xl animate-pulse delay-2000" />
                    
                    {/* Subtle texture overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23000'/%3E%3C/svg%3E")`,
                        }}
                    />
                    
                    {/* Floating geometric shapes */}
                    <div className="absolute top-32 right-20 w-6 h-6 border-2 border-purple-300/30 rotate-45 animate-spin-slow" />
                    <div className="absolute top-80 left-40 w-4 h-4 bg-blue-300/20 rounded-full animate-bounce delay-500" />
                    <div className="absolute bottom-60 left-1/4 w-8 h-1 bg-gradient-to-r from-emerald-300/30 to-transparent animate-pulse delay-1500" />
                    
                    {/* Grid pattern overlay */}
                    <div 
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px'
                        }}
                    />
                </div>

                {/* Enhanced content sections */}
                <div className="relative">
                    <Hero7 />
                    
                    {/* Transition section */}
                    <div className="relative ">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
                    </div>
                    
                    <Feature17 />
                </div>
            </main>

            {/* Enhanced footer */}
            <footer className="relative bg-gradient-to-r from-slate-100 via-white to-slate-100 border-t border-slate-200/60">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <div className="relative z-10 text-center py-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
    
                        <span className="text-sm font-medium text-slate-600">HumanIA</span>
                    </div>
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} HumanIA. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
            
            <WhatsappButton />
        </div>
    )
}