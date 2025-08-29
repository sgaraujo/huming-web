// app/productos/page.tsx
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { HeroHeader } from "@/components/header"
import WhatsappButton from "@/components/ui/WhatsappButton"

const WA_BASE =
  "https://wa.me/573102365931?text=" // cambia al número de HumIng

const productos = [
  {
    slug: "botiquines",
    titulo: "Botiquines",
    descripcion:
      "Suministro de botiquines tipo A según Resolución 0705 de 2007. Opciones para oficina, industria y vehículos.",
    bullets: ["Tipo A – normativo", "Reposiciones y recargas", "Versiones pared / portátil"],
    imagen: "/products/botiquines.jpg",
  },
  {
    slug: "extintores",
    titulo: "Extintores",
    descripcion:
      "Venta, mantenimiento y recarga de extintores multipropósito, CO2, Agua a presión y Solkaflam.",
    bullets: ["Multipropósito (ABC)", "CO₂", "Agua a presión / Solkaflam"],
    imagen: "/products/extintor.jpg",
  },
  {
    slug: "luces-emergencia",
    titulo: "Luces de emergencia",
    descripcion:
      "Suministro e instalación de luces de emergencia según especificaciones técnicas de los entes de control.",
    bullets: ["LED alta eficiencia", "Autonomía certificada", "Instalación y pruebas"],
    imagen: "/products/luces.jpg",
  },
  {
    slug: "detectores-humo",
    titulo: "Detectores de humo",
    descripcion:
      "Detectores fotoeléctricos y sistemas de detección según requisitos técnicos para protección de áreas críticas.",
    bullets: ["Fotoeléctricos / térmicos", "Red cableada o autónomos", "Integración con panel"],
    imagen: "/products/detectores.jpg",
  },
  {
    slug: "senalizacion",
    titulo: "Señalización de emergencia",
    descripcion:
      "Señales fotoluminiscentes y normativas para evacuación, equipos contra incendio y rutas de escape.",
    bullets: ["Fotoluminiscente", "PVC / Aluminio", "Acorde a normativa"],
    imagen: "/products/senalizacion.jpg",
  },
]

// Utilidad para crear el mensaje de WhatsApp por producto
function waLink(nombre: string) {
  const msg = `Hola, quiero cotizar productos de *${nombre}* para mi empresa. ¿Podemos hablar?`
  return `${WA_BASE}${encodeURIComponent(msg)}`
}

export const metadata = {
  title: "Productos de Emergencia | HumanIA",
  description:
    "Suministro de botiquines, extintores, luces de emergencia, detectores de humo y señalización. Venta, instalación y mantenimiento.",
}

export default function ProductosPage() {
  return (

   <><HeroHeader />
   <main className="relative pt-15 pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
          {/* Fondo suave */}
          <div className="absolute inset-0 -z-10 opacity-30">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(59,130,246,0.15),transparent_70%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(236,72,153,0.12),transparent_70%)]" />
          </div>

          <section className="container py-16">
              <header className="mx-auto mb-10 max-w-3xl text-center">
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                      Productos de Emergencia
                  </h1>
                  <p className="mt-4 text-muted-foreground">
                      Suministro, instalación y mantenimiento conforme a la normativa vigente.
                      Cotiza en un clic por WhatsApp.
                  </p>
              </header>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {productos.map((p) => (
                      <article
                          key={p.slug}
                          className="group overflow-hidden rounded-xl border bg-white/60 shadow-sm backdrop-blur transition hover:shadow-md dark:bg-white/5"
                      >
                          <div className="relative aspect-[4/3]">
                              <Image
                                  src={p.imagen}
                                  alt={p.titulo}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                  sizes="(max-width: 768px) 100vw, 33vw"
                                  priority />
                              <Badge className="absolute left-3 top-3 bg-orange-600 hover:bg-orange-600">
                                  Nuevo
                              </Badge>
                          </div>

                          <div className="space-y-3 p-5">
                              <h3 className="text-lg font-semibold">{p.titulo}</h3>
                              <p className="text-sm text-muted-foreground">{p.descripcion}</p>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
                                  {p.bullets.map((b) => (
                                      <li key={b}>{b}</li>
                                  ))}
                              </ul>

                              <div className="mt-4 flex items-center gap-3">
                                  <Button asChild className="bg-green-600 hover:bg-green-700 ">
                                      <a href={waLink(p.titulo)} target="_blank" rel="noopener noreferrer">
                                          <MessageCircle className="mr-2 h-4 w-4" />
                                          Cotizar por WhatsApp
                                      </a>
                                  </Button>
                              </div>
                          </div>
                      </article>
                  ))}
              </div>

              {/* CTA inferior */}
              <div className="mx-auto mt-14 max-w-3xl rounded-xl border bg-white/60 p-6 text-center shadow-sm backdrop-blur dark:bg-white/5">
                  <h4 className="text-xl font-semibold">¿Necesitas asesoría para tu compra?</h4>
                  <p className="mt-2 text-muted-foreground">
                      Te ayudamos a escoger el equipo correcto según tu actividad y nivel de riesgo.
                  </p>
                  <div className="mt-4">
                      <Button asChild className="bg-green-600 hover:bg-green-700">
                          <a href={waLink("Asesoría de productos")} target="_blank" rel="noopener noreferrer">
                              <MessageCircle className="mr-2 h-4 w-4" />
                              Hablar por WhatsApp
                          </a>
                      </Button>
                  </div>
              </div>
          </section>
          <WhatsappButton />
      </main></>
      
  )
}
