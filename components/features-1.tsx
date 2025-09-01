"use client";
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="bg-gradient-to-br from-slate-50 via-white to-orange-50/20 pt-20 pb-16 dark:bg-transparent">
            <div className="@container mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-balance text-4xl font-bold lg:text-5xl">
                        <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                            Nuestros
                        </span>
                        <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent">
                            {' '}Valores
                        </span>
                    </h2>
                </div>
                
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-2 @min-6xl:grid-cols-4 mx-auto grid max-w-sm gap-8 *:text-center md:gap-6">
                    <Card className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-100/50 shadow-lg hover:shadow-xl hover:shadow-pink-100/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50/30 rounded-2xl" />
                        <CardHeader className="relative z-10 pb-3">
                            <CardDecorator variant="pink">
                                <img
                                    src="/Cercania.jpg"
                                    alt="Cercanía - Personas trabajando juntas"
                                    className="w-full h-full object-cover rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
                                />
                            </CardDecorator>
                            <h3 className="mt-6 font-bold text-lg text-slate-900 group-hover:text-pink-600 transition-colors">
                                Cercanía
                            </h3>
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Escuchamos y adaptamos nuestras soluciones según la realidad de cada empresa.
                            </p>
                        </CardContent>
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-pink-500/5 via-transparent to-pink-500/5" />
                    </Card>

                    <Card className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-green-100/50 shadow-lg hover:shadow-xl hover:shadow-green-100/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-green-50/30 rounded-2xl" />
                        <CardHeader className="relative z-10 pb-3">
                            <CardDecorator variant="green">
                                <img
                                    src="/Compromiso.jpg"
                                    alt="Compromiso - Apretón de manos profesional"
                                    className="w-full h-full object-cover rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
                                />
                            </CardDecorator>
                            <h3 className="mt-6 font-bold text-lg text-slate-900 group-hover:text-green-600 transition-colors">
                                Compromiso
                            </h3>
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Acompañamos a nuestros clientes desde el diagnóstico hasta la mejora continua.
                            </p>
                        </CardContent>
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5" />
                    </Card>

                    <Card className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-100/50 shadow-lg hover:shadow-xl hover:shadow-blue-100/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/30 rounded-2xl" />
                        <CardHeader className="relative z-10 pb-3">
                            <CardDecorator variant="blue">
                                <img
                                    src="/Transparencia.jpg"
                                    alt="Transparencia - Documentos y lupa"
                                    className="w-full h-full object-cover rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
                                />
                            </CardDecorator>
                            <h3 className="mt-6 font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                                Transparencia
                            </h3>
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Actuamos con ética, claridad y responsabilidad en cada proceso.
                            </p>
                        </CardContent>
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5" />
                    </Card>

                    <Card className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-orange-100/50 shadow-lg hover:shadow-xl hover:shadow-orange-100/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-orange-50/30 rounded-2xl" />
                        <CardHeader className="relative z-10 pb-3">
                            <CardDecorator variant="orange">
                                <img
                                    src="/seguridad.jpg"
                                    alt="Seguridad - Trabajador con casco y equipo de protección"
                                    className="w-full h-full object-cover rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
                                />
                            </CardDecorator>
                            <h3 className="mt-6 font-bold text-lg text-slate-900 group-hover:text-orange-700 transition-colors">
                                Seguridad
                            </h3>
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <p className="text-sm text-slate-600 leading-relaxed">
                                La seguridad trasciende la norma: es el compromiso que asumimos contigo.
                            </p>
                        </CardContent>
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5" />
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children, variant }: { children: ReactNode, variant?: string }) => {
    const variants = {
        orange: "from-orange-100 to-orange-50 border-orange-200/50",
        pink: "from-pink-100 to-pink-50 border-pink-200/50",
        green: "from-green-100 to-green-50 border-green-200/50",
        blue: "from-blue-100 to-blue-50 border-blue-200/50",
        red: "from-red-100 to-red-50 border-red-200/50",
        yellow: "from-yellow-100 to-yellow-50 border-yellow-200/50",
        purple: "from-purple-100 to-purple-50 border-purple-200/50"
    }
    
    const colorClass = variants[variant as keyof typeof variants] || variants.orange
    
    return (
        <div className={`relative mx-auto w-28 h-28 rounded-xl border shadow-sm group-hover:shadow-md transition-all duration-300 overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-xl z-10" />
            <div className="relative w-full h-full flex items-center justify-center">
                {children}
            </div>
        </div>
    )
}