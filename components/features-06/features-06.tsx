// app/components/features-06/features-06.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    slug: "sg-sst",
    category: "Seguridad y Salud en el Trabajo",
    title: "Diseño, implementación y mejora del SG-SST",
    details:
      "Apoyamos a tu empresa en el diseño, ejecución, evaluación y mejora continua del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), cumpliendo con la normatividad vigente y promoviendo ambientes laborales seguros y saludables.",
    tutorialLink: "/blog",
    image: "/img/service1.webp",
    buttonColor: "bg-orange-600 hover:bg-orange-700",
  },
  {
    slug: "riesgo-psicosocial",
    category: "Bienestar laboral y prevención integral",
    title: "Riesgo Psicosocial",
    details:
      "Brindamos herramientas para evaluar, gestionar y reducir los riesgos psicosociales en el entorno laboral. Implementamos la batería de riesgo psicosocial según la Resolución 2764 de 2022, acompañamos en la gestión emocional y del estrés, y ofrecemos programas de educación en autocuidado, comunicación asertiva e inteligencia emocional. Todo orientado a fortalecer la salud mental, el equilibrio trabajo-familia y la productividad de tu organización.",
    tutorialLink: "/blog2",
    image: "/img/service7.webp",
    buttonColor: "bg-pink-300 hover:bg-pink-400",
  },
  {
    slug: "teletrabajo",
    category: "Teletrabajo: Implementación Legal y Estratégica",
    title:
      "Optimización del trabajo remoto con cumplimiento normativo y acompañamiento integral.",
    details:
      "Ofrecemos un servicio completo para la implementación del teletrabajo conforme al Decreto 1072 de 2015 y la Circular Externa 0027 de 2019. Incluye la identificación de modalidades de teletrabajo, visitas técnicas, elaboración de informes, diseño de planes y cronogramas de capacitación. Además, realizamos la evaluación continua y planes de mejora, garantizando eficiencia, bienestar laboral y cumplimiento legal.",
    tutorialLink: "/blog3",
    image: "/img/service3.webp",
    buttonColor: "bg-sky-400 hover:bg-sky-500",
  },
  {
    slug: "pesv",
    category:
      "Diseño, implementación y mejora del PESV para la prevención de accidentes de tránsito.",
    title: "Plan Estratégico de Seguridad Vial (PESV)",
    details:
      "Acompañamos a las organizaciones en la implementación del PESV según la Resolución 40595 de 2022 y la norma ISO 39001, adaptado al tamaño y misionalidad de cada empresa. Nuestro enfoque incluye la planificación, ejecución, control y mejora continua de las fases, con acciones concretas para mitigar riesgos viales y fortalecer la seguridad de los trabajadores.",
    tutorialLink: "/blog4",
    image: "/img/service4.webp",
    buttonColor: "bg-red-600 hover:bg-red-700",
  },
  {
    slug: "gestion-ambiental",
    category: "Gestión ambiental, salud ocupacional y seguridad industrial.",
    title: "Asesoría en Sistemas de Gestión Ambiental (SGA)",
    details:
      "Diseñamos e implementamos estrategias para reducir impactos, optimizar recursos y cumplir la normativa ambiental. Alineamos tus procesos con buenas prácticas de sostenibilidad y economía circular.",
    tutorialLink: "/blog5",
    image: "/img/service2.webp",
    buttonColor: "bg-green-600 hover:bg-green-700",
  },
  {
    slug: "asesoria-juridica-laboral",
    category: "Orientación legal práctica para empresas y trabajadores.",
    title: "Asesoría Jurídica Laboral",
    details:
      "Brindamos acompañamiento especializado en legislación laboral, abarcando conceptos básicos, garantizando el cumplimiento legal y la seguridad jurídica de la organización.",
    tutorialLink: "/blog7", // ← AGREGADO
    image: "/img/service5.webp",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    slug: "desarrollo-tecnologico",
    category:
      "Innovación, mantenimiento y creación de soluciones digitales adaptadas a tu negocio.",
    title: "Desarrollo Tecnológico",
    details:
      "Brindamos apoyo en programación, mantenimiento de software, resolución de problemas técnicos y creación de plataformas digitales. Nuestro objetivo es potenciar la productividad de tu organización mediante soluciones tecnológicas personalizadas y eficientes.",
    tutorialLink: "/blog6",
    image: "/img/service6.webp",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
];

const Features06Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-10 px-6">
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {features.map((feature) => (
            <div
              key={feature.slug}
              id={feature.slug}
              className="scroll-mt-24 flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <div className="relative w-full aspect-[6/4] rounded-xl border border-border/50 basis-1/2 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-semibold text-sm text-muted-foreground">
                  {feature.category}
                </span>
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  {feature.details}
                </p>
                {feature.tutorialLink && (
                  <Button
                    asChild
                    className={`mt-6 rounded-full min-w-40 text-[15px] ${feature.buttonColor} text-white`}
                  >
                    <Link href={feature.tutorialLink}>
                      Más información <ArrowRight />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features06Page;