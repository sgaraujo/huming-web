"use client";
import { Card, CardContent } from '@/components/ui/card'

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
                
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-2 @min-6xl:grid-cols-4 mx-auto grid max-w-sm gap-8 md:gap-6">
                    {/* Cercanía */}
                    <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-80">
                        {/* Imagen de fondo */}
                        <img
                            src="/Cercania.jpg"
                            alt="Cercanía"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        {/* Overlay oscuro */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-pink-900/90 group-hover:via-pink-800/60 transition-all duration-300" />
                        
                        {/* Contenido */}
                        <CardContent className="relative z-10 h-full flex flex-col justify-end p-6">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                                Cercanía
                            </h3>
                            <p className="text-sm text-white/90 leading-relaxed">
                                Escuchamos y adaptamos nuestras soluciones según la realidad de cada empresa.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Compromiso */}
                    <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-80">
                        <img
                            src="/Compromiso.jpg"
                            alt="Compromiso"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-green-900/90 group-hover:via-green-800/60 transition-all duration-300" />
                        <CardContent className="relative z-10 h-full flex flex-col justify-end p-6">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                                Compromiso
                            </h3>
                            <p className="text-sm text-white/90 leading-relaxed">
                                Acompañamos a nuestros clientes desde el diagnóstico hasta la mejora continua.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Transparencia */}
                    <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-80">
                        <img
                            src="/Transparencia.jpg"
                            alt="Transparencia"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-blue-900/90 group-hover:via-blue-800/60 transition-all duration-300" />
                        <CardContent className="relative z-10 h-full flex flex-col justify-end p-6">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                                Transparencia
                            </h3>
                            <p className="text-sm text-white/90 leading-relaxed">
                                Actuamos con ética, claridad y responsabilidad en cada proceso.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Seguridad */}
                    <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-80">
                        <img
                            src="/seguridad.jpg"
                            alt="Seguridad"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-orange-900/90 group-hover:via-orange-800/60 transition-all duration-300" />
                        <CardContent className="relative z-10 h-full flex flex-col justify-end p-6">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                                Seguridad
                            </h3>
                            <p className="text-sm text-white/90 leading-relaxed">
                                La seguridad trasciende la norma: es el compromiso que asumimos contigo.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}