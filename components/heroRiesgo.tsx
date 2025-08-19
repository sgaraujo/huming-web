import Link from "next/link";

type Hero7Props = {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
};

export const HeroRiesgo = ({
  heading = "Gestión Integral del Riesgo Psicosocial",
  description = "Acompañamos a las organizaciones en la identificación, prevención y manejo de los riesgos psicosociales, promoviendo el bienestar emocional, la comunicación asertiva y la salud mental en el trabajo. Implementamos baterías de evaluación, estrategias de afrontamiento y programas de capacitación que fortalecen el equilibrio laboral y personal de los colaboradores.",
  button = {
    text: "Volver a Servicios",
    url: "/servicios",
  },
}: Hero7Props) => {
  return (
    <section className="pt-32 text-center">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h1 className="text-3xl font-bold lg:text-5xl text-black">{heading}</h1>
          <p className="text-balance lg:text-lg pt-10">{description}</p>

          {/* Botón para volver a servicios */}
          <div className="pt-6">
            <Link href={button.url}>
              <button className="rounded-lg bg-orange-600 px-6 py-3 text-white font-medium hover:bg-orange-700 transition">
                {button.text}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
