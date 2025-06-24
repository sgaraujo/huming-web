import { SearchCheck, Activity, GraduationCap, Gavel, Sparkles, ShieldCheck } from 'lucide-react'

export default function Features() {
    return (
        <section className="pt-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Servicios</h2>
                    <p>En HumIng SAS acompañamos a las organizaciones en su camino hacia la excelencia operativa, mediante servicios técnicos altamente especializados y adaptados a su realidad.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="size-4" />
                            <h3 className="text-sm font-medium">Implementación de Normas ISO</h3>
                        </div>
                        <p className="text-sm">Acompañamos el diseño e implementación de sistemas de gestión bajo estándares internacionales como:</p>
                        <ul className="text-sm font-medium list-disc pl-6">
                        <li>ISO 9001 (Calidad)</li>
                        <li>ISO 45001 (Seguridad y Salud en el Trabajo)</li>
                        <li>ISO 27001 (Seguridad de la Información)</li>
                    </ul>
                    </div>
                    
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <SearchCheck className="size-4" />
                            <h3 className="text-sm font-medium">Auditorías internas</h3>
                        </div>
                        <p className="text-sm">Ejecución de auditorías independientes, objetivas y estratégicas para identificar no conformidades, prevenir riesgos y mejorar los procesos.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Activity className="size-4" />

                            <h3 className="text-sm font-medium">Gestión en Seguridad y Salud en el Trabajo (SG-SST)</h3>
                        </div>
                        <p className="text-sm">Asesoramos en la implementación, documentación, seguimiento y mejora del SG-SST conforme al Decreto 1072 de 2015.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <GraduationCap className="size-4" />

                            <h3 className="text-sm font-medium">Capacitación empresarial</h3>
                        </div>
                        <p className="text-sm">Formamos a los equipos de trabajo en gestión del riesgo, liderazgo, cultura organizacional y normativas ISO mediante talleres prácticos.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Gavel className="size-4" />

                            <h3 className="text-sm font-medium"> Consultoría legal y técnica</h3>
                        </div>
                        <p className="text-sm">Te ayudamos a identificar los requisitos legales aplicables a tu actividad económica, evaluamos el cumplimiento y planteamos acciones correctivas.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Diseño de procesos y mejora continua</h3>
                        </div>
                        <p className="text-sm">Diseñamos mapas de procesos, identificamos cuellos de botella y estructuramos indicadores para una gestión eficiente y alineada con tus objetivos.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
