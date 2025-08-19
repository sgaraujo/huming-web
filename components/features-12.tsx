// app/components/services-section.tsx
"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Features06Page from "./features-06/features-06";
import { useRef, useState } from "react";

const services = [
  {
    title: "Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)",
    image: "/img/service1.jpg",
    slug: "sg-sst",
  },
  {
    title: "Riesgo Psicosocial",
    image: "/img/service7.jpg",
    slug: "riesgo-psicosocial",
    
  },
  {
    title: "Teletrabajo: Implementación Legal y Estratégica",
    image: "/img/service3.jpg",
    slug: "teletrabajo",
    },
  {
    title: "Plan Estratégico de Seguridad Vial (PESV)",
    image: "/img/service4.jpg",
    slug: "pesv",
  },
  {
    title: "Gestión ambiental",
    image: "/img/service2.jpg",
    slug: "gestion-ambiental",
  },
  {
    title: "Asesoría Jurídica Laboral",
    image: "/img/service5.jpg",
    slug: "asesoria-juridica-laboral",
  },
  {
    title: "Desarrollo Tecnológico",
    image: "/img/service6.jpg",
    slug: "desarrollo-tecnologico",
  },
]
export default function ServicesSection() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

  const activeItem = services.find(s => s.slug === activeSlug) ?? null;

  const handleCardClick = (slug: string) => {
    setActiveSlug(slug);
    // scroll suave al detalle
    requestAnimationFrame(() => {
      document.getElementById("feature-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };
  return (
    <section className="px-4 py-25 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Servicios
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          En HumanIA ofrecemos soluciones integrales diseñadas para fortalecer la gestión empresarial. 
          Desde la implementación de sistemas normativos hasta la asesoría legal estratégica, acompañamos a tu 
          organización en el cumplimiento y mejora continua de sus procesos clave.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <a
            key={service.title}
            href={`#${service.slug}`}
            className="relative rounded-xl overflow-hidden shadow hover:shadow-lg transition group"
          >
            <Image 
              src={service.image}
              alt={service.title}
              width={400}
              height={240}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
            />
        
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
            <div className="absolute top-4 right-4 text-white">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>
        ))}
      </div>
      <Features06Page/>
    </section>
  );
}


