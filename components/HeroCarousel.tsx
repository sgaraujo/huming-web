// components/hero-section/HeroCarousel.tsx
"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

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
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[400px]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-lg"
                priority={index === 0}
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
