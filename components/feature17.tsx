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

const Feature17 = ({
  features = [
    {
      title: "Etapa de Organización y Diagnóstico",
      description: (
        <ul className="list-disc pl-5 space-y-1 text-black">
          <li>Evaluación inicial del SG-SST con base en estándares mínimos.</li>
          <li>Diseño y revisión de políticas generales.</li>
          <li>Implementación y acompañamiento a los comités COPASST y Comité de Convivencia Laboral (CCL).</li>
        </ul>
      ),
      icon: <Timer className="size-4 md:size-6 text-purple-900" />,
      className: "text-purple-900"
    },{
      title: "Planeación y Ejecución",
      description: (
        <ul className="list-disc pl-5 space-y-1 text-black">
          <li>Diseño de cronogramas de capacitación según la matriz de peligros.</li>
          <li>Desarrollo de gestión del cambio y cultura preventiva.</li>
          <li>Revisión y actualización de las matrices de riesgos y matriz legal.</li>
          <li>Gestión documental y codificación del SG-SST.</li>
          <li>Diseño del plan de trabajo anual, programas de emergencia, y subprogramas de medicina del trabajo e higiene industrial.</li>
        </ul>
      ),
      icon: <Zap className="size-4 md:size-6 text-blue-600" />,
      className: "text-blue-600" // 👈 agregado
    },
    {
      title: "Evaluación y Mejora Continua",
      description: (
        <ul className="list-disc pl-5 space-y-1 text-black">
          <li>Seguimiento a accidentalidad y ausentismo laboral.</li>
          <li>Diseño de estrategias de intervención preventiva.</li>
          <li>Auditorías internas al SG-SST y acompañamiento ante auditorías de entes de control (ARL, Ministerio de Trabajo, Secretaría de Salud).</li>
          <li>Rendición de cuentas del sistema ante dirección o juntas.</li>
          <li>Reporte de estándares mínimos ante el Ministerio del Trabajo.</li>
        </ul>
      ),
      icon: <ZoomIn className="size-4 md:size-6 text-red-500" />,
      className: "text-red-500"
    },
    {
      title: "Educación y Formación",
      description: (
        <ul className="list-disc pl-5 space-y-1 text-black">
          <li>Capacitaciones especializadas a COPASST, CCL y colaboradores.</li>
          <li>Programas formativos sobre riesgos, salud ocupacional, seguridad vial, y sistemas de gestión integrados.</li>
        </ul>
      ),
      icon: <PersonStanding className="size-4 md:size-6 text-emerald-600" />,
      className: "text-emerald-600"
    },
  ],
}: Feature17Props) => {
  return (
    <section>
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

export { Feature17 };
