// components/hero-section/HeroCarousel.tsx
"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import { ClipboardList, ArrowRight } from "lucide-react"

const images = [
  {
    src: "/img/sst1.webp",
    title: "La seguridad no es opcional",
    subtitle: "Comprometidos con el bienestar laboral y la prevención de riesgos",
    alt: "Profesionales de seguridad y salud en el trabajo en acción",
  },
  {
    src: "/img/sst2.webp",
    title: "Ambientes laborales seguros",
    subtitle: "Implementamos sistemas de gestión bajo la norma ISO 45001",
    alt: "Ambiente laboral seguro con equipos de protección personal",
  },
  {
    src: "/img/sst3.webp",
    title: "Prevención con propósito",
    subtitle: "La cultura de la seguridad comienza con la educación y la acción",
    alt: "Capacitación en prevención de riesgos laborales",
  },
]

export const HeroCarousel = () => {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  return (
    <Carousel
      className="w-full max-w-9xl mx-auto border border-border rounded-lg overflow-hidden"
      opts={{ loop: true }}
      plugins={[autoplay.current]}
    >
      <CarouselContent>
        {/* Slide CTA — Autoevaluación SG-SST */}
        <CarouselItem>
          <div className="w-full h-[220px] sm:h-[300px] lg:h-[400px] rounded-lg bg-gradient-to-br from-violet-900 via-violet-700 to-slate-900 flex flex-col justify-center items-center text-center px-8 gap-4">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-semibold tracking-wide">
                <ClipboardList className="w-3.5 h-3.5" /> Res. 0312 de 2019 · Gratis
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                ¿Cómo está tu empresa<br />en Seguridad y Salud?
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-xs">
                Conoce tu nivel — Crítico, Moderado o Aceptable — en minutos y recibe tu informe gratis.
              </p>
              <Link
                href="/autoevaluacion/formulario"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 active:scale-95 text-white font-bold px-7 py-3 rounded-xl shadow-lg shadow-orange-500/30 transition-all text-sm sm:text-base"
              >
                <ClipboardList className="w-4 h-4" />
                Evalúa tu empresa — Gratis
                <ArrowRight className="w-4 h-4" />
              </Link>
          </div>
        </CarouselItem>

        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[400px]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-end pr-12 text-white text-right">
                <h2 className="text-2xl md:text-3xl font-bold">{img.title}</h2>
                <p className="text-sm md:text-base mt-1">{img.subtitle}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
