"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Features06Page from "./features-06/features-06";

const services = [
  {
    title: "Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)",
    image: "/img/service1.webp",
    href: "/blog",
  },
  {
    title: "Riesgo Psicosocial",
    image: "/img/service7.webp",
    href: "/blog2",
  },
  {
    title: "Teletrabajo: Implementación Legal y Estratégica",
    image: "/img/service3.webp",
    href: "/blog3",
  },
  {
    title: "Plan Estratégico de Seguridad Vial (PESV)",
    image: "/img/service4.webp",
    href: "/blog4",
  },
  {
    title: "Gestión Ambiental",
    image: "/img/service2.webp",
    href: "/blog5",
  },
  {
    title: "Asesoría Jurídica Laboral",
    image: "/img/service5.webp",
    href: "/blog7",
  },
  {
    title: "Desarrollo Tecnológico",
    image: "/img/service6.webp",
    href: "/blog6",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Grid de tarjetas */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group aspect-[4/3] block"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient overlay — siempre visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Arrow */}
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-semibold text-base leading-snug drop-shadow-sm">
                  {service.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Secciones de detalle */}
        <Features06Page />
      </div>
    </section>
  );
}
