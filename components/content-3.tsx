
export default function ContentSection() {
    return (
        <section >
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <img
                    className="rounded-lg mx-auto w-100 sm:w-100 md:w-100 lg:w-[500px] xl:w-[600px]"
                    src="/img/sst-grupo.jpg"
                    alt="Imagen del equipo"
                    loading="lazy"
                />

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">¿Cómo nació HumanIA?</h2>
                    <div className="space-y-6">
                        <p>HumanIA nace de la necesidad de crear soluciones prácticas, humanas y accesibles para las pequeñas y medianas empresas que buscan cumplir con normativas vigentes y mejorar sus ambientes laborales. Nuestro propósito es claro: simplificar lo complejo y transformar lo normativo en algo realmente útil para las organizaciones.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
