import { Cpu, ShieldCheck, Globe, Wrench } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section >
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-bold lg:text-5xl">¿Por qué elegir HumanIA?</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4">
                        <p className="text-black">
                            En HumanIA desarrollamos soluciones a la medida
                            para la implementación, auditoría y mejora de sistemas de
                            gestión bajo normas ISO y legislación vigente. Nuestro
                            enfoque combina experiencia técnica con acompañamiento
                            personalizado, ayudando a las organizaciones a cumplir
                            sus objetivos estratégicos y legales, fortalecer su
                            cultura organizacional y garantizar ambientes de trabajo seguros
                            y sostenibles.
                        </p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4 pb-8">
                            {/* 1. Normas ISO */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="size-4 text-purple-900" />
                                    <h3 className="text-sm font-medium text-purple-900">Especialistas en Normas ISO</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">9001, 14001, 45001, entre otras.</p>
                            </div>

                            {/* 2. SG-SST */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4 text-sky-500" />
                                    <h3 className="text-sm font-medium text-sky-500">Enfoque en Seguridad y Salud en el Trabajo</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Diseño, implementación y auditoría del SG-SST.</p>
                            </div>

                            {/* 3. Servicios integrales */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Wrench className="size-4 text-emerald-600" />
                                    <h3 className="text-sm font-medium text-emerald-600">Servicios integrales</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Capacitaciones, consultoría, venta y soporte técnico.</p>
                            </div>

                            {/* 4. Alcance regional */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Globe className="size-4 text-rose-500" />
                                    <h3 className="text-sm font-medium text-rose-500">Proyección regional</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Presencia en Colombia, la CAN y países asociados.</p>
                            </div>
                        </div>

                    </div>
                    <div className="relative mt-6 sm:mt-0 pb-5">
                        <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/SeguridadEnTrabajo.jpg" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1206} height={612} />
                            <Image src="/SeguridadEnTrabajo.jpg" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1206} height={612} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
