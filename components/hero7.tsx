import Link from "next/link";

type Hero7Props = {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
};

export const Hero7 = ({
  heading = "Diseño, Implementación y Mejora del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)",
  description = "Acompañamos a las organizaciones en todas las fases del SG-SST, conforme al Decreto 1072 de 2015, la Resolución 0312 de 2019 y la norma ISO 45001:2018, garantizando el cumplimiento normativo y la promoción del bienestar laboral.",
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
              <button className="rounded-lg bg-sky-600 px-6 py-3 text-white font-medium hover:bg-sky-700 transition">
                {button.text}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
