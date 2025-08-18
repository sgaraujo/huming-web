
export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <img
                    className="rounded-(--radius)"
                    src="/img/sst-grupo.jpg"
                    alt="team image"
                    height=""
                    width=""
                    loading="lazy"
                />

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">Cómo nació HumanIA</h2>
                    <div className="space-y-6">
                        <p>HumanIA nace de la necesidad de crear soluciones prácticas, humanas y accesibles para las pequeñas y medianas empresas que buscan cumplir con normativas ISO sin ahogarse en burocracia.
                            Fundada por profesionales 
                            con más de 10 años de experiencia en sistemas integrados,
                             nuestro objetivo fue claro desde el inicio: hacer simple lo complejo, y útil lo normativo.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
