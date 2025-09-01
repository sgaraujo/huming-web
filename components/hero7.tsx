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
  button,
}: Hero7Props) => {
  return (
    <section className="relative pt-36 pb-16 md:pt-36 md:pb-24 text-center overflow-hidden">
      {/* Background with gradient and subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.05),transparent_50%)]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-xl"></div>
      <div className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-emerald-200/25 to-transparent rounded-full blur-xl"></div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          {/* Enhanced heading with gradient text */}
          <div className="space-y-4">            
            <h1 className="text-3xl font-bold lg:text-5xl xl:text-6xl leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                {heading.split(' ').slice(0, 3).join(' ')}
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent">
                {heading.split(' ').slice(3).join(' ')}
              </span>
            </h1>
          </div>

          {/* Enhanced description */}
          <div className="mx-auto max-w-4xl">
            <p className="text-balance text-lg md:text-xl leading-relaxed text-slate-600 font-medium">
              {description}
            </p>
          </div>

          {/* Optional CTA button */}
          {button && (
            <div className="mt-8 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-2xl blur-sm opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <Link 
                  href={button.url}
                  className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {button.text}
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          )}

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 opacity-70">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span>Decreto 1072/2015</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="w-3 h-3 rounded-full bg-orange-600"></div>
              <span>Resolución 0312/2019</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="w-3 h-3 rounded-full bg-orange-700"></div>
              <span>ISO 45001:2018</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};