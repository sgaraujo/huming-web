import {
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

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
  button?: {
    text: string;
    url: string;
  };
}

const Feature17 = ({
  button = {
    text: "Volver a Servicios",
    url: "/servicios",
  },
  features = [
    {
      title: "Etapa de Organización y Diagnóstico",
      description: (
        <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
          <li>Evaluación inicial del SG-SST con base en estándares mínimos.</li>
          <li>Diseño y revisión de políticas generales.</li>
          <li>Implementación y acompañamiento a los comités COPASST y Comité de Convivencia Laboral (CCL).</li>
        </ul>
      ),
      icon: <Timer className="size-5 md:size-7 text-orange-600" />,
      className: "text-orange-700",
    },
    {
      title: "Planeación y Ejecución",
      description: (
        <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
          <li>Diseño de cronogramas de capacitación según la matriz de peligros.</li>
          <li>Desarrollo de gestión del cambio y cultura preventiva.</li>
          <li>Revisión y actualización de las matrices de riesgos y matriz legal.</li>
          <li>Gestión documental y codificación del SG-SST.</li>
          <li>Diseño del plan de trabajo anual, programas de emergencia, y subprogramas de medicina del trabajo e higiene industrial.</li>
        </ul>
      ),
      icon: <Zap className="size-5 md:size-7 text-orange-500" />,
      className: "text-orange-600",
    },
    {
      title: "Evaluación y Mejora Continua",
      description: (
        <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
          <li>Seguimiento a accidentalidad y ausentismo laboral.</li>
          <li>Diseño de estrategias de intervención preventiva.</li>
          <li>Auditorías internas al SG-SST y acompañamiento ante auditorías de entes de control (ARL, Ministerio de Trabajo, Secretaría de Salud).</li>
          <li>Rendición de cuentas del sistema ante dirección o juntas.</li>
          <li>Reporte de estándares mínimos ante el Ministerio del Trabajo.</li>
        </ul>
      ),
      icon: <ZoomIn className="size-5 md:size-7 text-orange-700" />,
      className: "text-orange-800",
    },
    {
      title: "Educación y Formación",
      description: (
        <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
          <li>Capacitaciones especializadas a COPASST, CCL y colaboradores.</li>
          <li>Programas formativos sobre riesgos, salud ocupacional, seguridad vial, y sistemas de gestión integrados.</li>
        </ul>
      ),
      icon: <PersonStanding className="size-5 md:size-7 text-orange-800" />,
      className: "text-orange-900",
    },
  ],
}: Feature17Props) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mt-8 grid gap-8 md:grid-cols-2 md:gap-12 lg:mt-12">
          {features.map((feature, idx) => (
            <div
              className="group relative flex gap-6 rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 md:block border border-slate-100"
              key={idx}
            >
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50/30 rounded-2xl"></div>
              
              {/* Content container */}
              <div className="relative z-10">
                <div className="mb-6 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/50 shadow-sm group-hover:shadow-md transition-all duration-300 md:size-16">
                  {feature.icon}
                </div>
                
                <div>
                  <h3
                    className={`font-bold text-lg md:text-xl mb-4 ${feature.className || ""} group-hover:scale-[1.02] transition-transform duration-300`}
                  >
                    {feature.title}
                  </h3>
                  <div className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </div>
                </div>
              </div>
              
              {/* Subtle hover border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-emerald-500/10"></div>
            </div>
          ))}
        </div>

        {/* Enhanced button section */}
        <div className="mt-16 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur-sm opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <Button 
              asChild 
              size="lg" 
              className="relative bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 text-base font-semibold rounded-xl border-0"
            >
              <Link href={button.url} className="flex items-center gap-2">
                {button.text}
                <div className="w-1 h-1 rounded-full bg-white/50 group-hover:w-2 transition-all duration-300"></div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature17 };