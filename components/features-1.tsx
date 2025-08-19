"use client";
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { SquareCheck, Search, HeartHandshake  } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="bg-zinc-50 pt-20 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Nuestros valores</h2>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5 transition-colors duration-200">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <HeartHandshake 
                                    className="size-6 text-purple-600 group-hover:text-purple-800 transition-colors"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Cercanía</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Escuchamos y adaptamos nuestras soluciones según la realidad de cada empresa.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 transition-colors duration-200">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <SquareCheck
                                    className="size-6 text-green-600 group-hover:text-green-800 transition-colors"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Compromiso</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm"> Acompañamos a nuestros clientes desde el diagnóstico hasta la mejora continua.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 transition-colors duration-200">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Search
                                    className="size-6 text-sky-600 group-hover:text-sky-800 transition-colors"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Transparencia</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Actuamos con ética, claridad y responsabilidad en cada proceso.

</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
