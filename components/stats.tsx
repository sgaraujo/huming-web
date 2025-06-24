import { StatItem } from '@/components/StatItem'

export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Lo que hemos logrado</h2>
                    <p>A lo largo de nuestra trayectoria, hemos implementado exitosamente sistemas de gestión en sectores como: salud, construcción, tecnología, transporte, manufactura, y servicios.
                        Nuestros clientes valoran no solo el cumplimiento legal logrado, sino el impacto real en su cultura de trabajo, sus indicadores y su reputación.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <StatItem end={25} suffix="+" label="empresas asesoradas a nivel nacional y mundial" />
                    <StatItem end={10} suffix="+" label="sectores económicos intervenidos" />
                    <StatItem end={100} suffix="%" label="de auditorías internas superadas con éxito" />
                </div>
            </div>
        </section>
    )
}
