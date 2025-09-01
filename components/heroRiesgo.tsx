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
    <section className="pt-36 pb-16 text-center relative">
      {/* Fondo específico del hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-rose-50/30" />
      
      <div className="container relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <h1 className="text-3xl font-bold lg:text-5xl">
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent">
              {heading}
            </span>
          </h1>
          <p className="text-balance lg:text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};