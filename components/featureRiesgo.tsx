import {
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from "lucide-react";

interface Feature {
  title: string;
  description: string | React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

interface Feature17Props {
  heading?: string;
  subheading?: string;
  features?: Feature[];
}

const FeatureRiesgo = ({
  features = [
    {
      title: "Batería de Riesgo Psicosocial",
      description: (
        <ul className="list-disc pl-5 space-y-1 text-black">
          <li>Aplicación de la batería de riesgo psicosocial para el bienestar laboral de la organización (Resolución 2764 de 2022).</li>
          <li>Diseño y ejecución de planes de acción según los resultados.</li>
          <li>Resultados por área y según la necesidad de la organización basados en la batería de Riesgo Psicosocial.</li>
        </ul>
      ),
      icon: <Timer className="size-4 md:size-6 text-purple-900" />,
      className: "text-purple-900"
    },{
      title: "Gestión del Riesgo Psicosocial",
      description: (
        <ul className="list-disc pl-5 space-y-1 text-black">
          <li>Gestión del autocuidado emocional.</li>
          <li>Gestión de la escucha y comunicación asertiva.</li>
          <li>Gestión del trabajo en equipo.</li>
          <li>Gestión del estrés.</li>
          <li>Gestión del equilibrio trabajo–familia.</li>
          <li>Gestión de la administración del tiempo.</li>
        </ul>
      ),
      icon: <Zap className="size-4 md:size-6 text-blue-600" />,
      className: "text-blue-600" // 👈 agregado
    },
    {
      title: "Acompañamiento",
      description: (
        <ul className="list-disc pl-5 space-y-1 text-black">
          <li>Estrategias de afrontamiento y resolución de conflictos.</li>
          <li>Identificación y gestión del desgaste profesional (Burnout).</li>
        </ul>
      ),
      icon: <ZoomIn className="size-4 md:size-6 text-red-500" />,
      className: "text-red-500"
    },
    {
      title: "Educación y Formación",
      description: (
        <ul className="list-disc pl-5 space-y-1 text-black">
          <li>Capacitación en calidad del sueño y descanso.</li>
          <li>Capacitación en autocuidado mental.</li>
          <li>Capacitación en comunicación asertiva.</li>
          <li>Capacitación en inteligencia emocional.</li>
          <li>Capacitación en manejo del estrés.</li>
          <li>Capacitación en resolución de conflictos.</li>
        </ul>
      ),
      icon: <PersonStanding className="size-4 md:size-6 text-emerald-600" />,
      className: "text-emerald-600"
    },
  ],
}: Feature17Props) => {
  return (
    <section className="py-10 md:py-5">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
          {features.map((feature, idx) => (
            <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
              <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                {feature.icon}
              </span>
              <div>
                <h3 className={`font-medium md:mb-2 md:text-xl ${feature.className || ""}`}>
                  {feature.title}
                </h3>
                <div className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeatureRiesgo};
