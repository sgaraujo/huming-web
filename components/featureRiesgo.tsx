import {
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from "lucide-react";
import Link from "next/link";

interface Feature {
  title: string;
  description: string | React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

interface Feature17Props {
  features?: Feature[];
}

const FeatureRiesgo = ({
  features = [
    {
      title: "Batería de Riesgo Psicosocial",
      description: (
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Aplicación de la batería de riesgo psicosocial para el bienestar laboral de la organización (Resolución 2764 de 2022).</li>
          <li>Diseño y ejecución de planes de acción según los resultados.</li>
          <li>Resultados por área y según la necesidad de la organización basados en la batería de Riesgo Psicosocial.</li>
        </ul>
      ),
      icon: <Timer className="size-5 md:size-6 text-pink-600" />,
      className: "text-pink-600"
    },
    {
      title: "Gestión del Riesgo Psicosocial",
      description: (
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Gestión del autocuidado emocional.</li>
          <li>Gestión de la escucha y comunicación asertiva.</li>
          <li>Gestión del trabajo en equipo.</li>
          <li>Gestión del estrés.</li>
          <li>Gestión del equilibrio trabajo–familia.</li>
          <li>Gestión de la administración del tiempo.</li>
        </ul>
      ),
      icon: <Zap className="size-5 md:size-6 text-rose-500" />,
      className: "text-rose-500"
    },
    {
      title: "Acompañamiento",
      description: (
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Estrategias de afrontamiento y resolución de conflictos.</li>
          <li>Identificación y gestión del desgaste profesional (Burnout).</li>
        </ul>
      ),
      icon: <ZoomIn className="size-5 md:size-6 text-pink-500" />,
      className: "text-pink-500"
    },
    {
      title: "Educación y Formación",
      description: (
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Capacitación en calidad del sueño y descanso.</li>
          <li>Capacitación en autocuidado mental.</li>
          <li>Capacitación en comunicación asertiva.</li>
          <li>Capacitación en inteligencia emocional.</li>
          <li>Capacitación en manejo del estrés.</li>
          <li>Capacitación en resolución de conflictos.</li>
        </ul>
      ),
      icon: <PersonStanding className="size-5 md:size-6 text-rose-600" />,
      className: "text-rose-600"
    },
  ],
}: Feature17Props) => {
  return (
    <section className="py-16 relative">
      {/* Fondo específico de features */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/20 to-rose-50/30" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mx-auto grid gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-12">
          {features.map((feature, idx) => (
            <div 
              className="group flex gap-6 rounded-2xl md:block md:p-8 bg-white/70 backdrop-blur-sm border-2 border-pink-300/60 shadow-lg hover:shadow-xl hover:shadow-pink-100/30 transition-all duration-300 hover:bg-white/85 hover:-translate-y-1 hover:border-pink-400/80" 
              key={idx}
            >
              <span className="mb-6 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 border border-pink-200/50 md:size-14 shadow-sm group-hover:shadow-md transition-all duration-300">
                {feature.icon}
              </span>
              <div className="flex-1">
                <h3 className={`font-bold mb-4 text-xl md:text-2xl ${feature.className || ""}`}>
                  {feature.title}
                </h3>
                <div className="text-slate-600 leading-relaxed">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Botones de acción */}
        <div className="pt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Botón Solicitar Valoración */}
          <Link href="/contacto">
            <button className="group relative rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 px-10 py-4 text-white font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-200/50 hover:-translate-y-1 text-lg">
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Solicitar Valoración
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>

          {/* Botón Volver a Servicios */}
          <Link href="/servicios">
            <button className="group relative rounded-2xl bg-white border-2 border-pink-300 px-10 py-4 text-pink-600 font-semibold hover:bg-pink-50 hover:border-pink-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-200/50 hover:-translate-y-1 text-lg">
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12"/>
                  <polyline points="12 19 5 12 12 5"/>
                </svg>
                Volver a Servicios
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { FeatureRiesgo };