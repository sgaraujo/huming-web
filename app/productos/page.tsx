// app/productos/page.tsx
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import type { Metadata } from "next"
import { HeroHeader } from "@/components/header"
import PageHeader from "@/components/page-header"

export const metadata: Metadata = {
  title: "Elementos de Emergencia",
  description:
    "Botiquines, extintores, luces de emergencia, detectores de humo y señalización. Venta, mantenimiento y suministro conforme a la normativa vigente en Colombia.",
  openGraph: {
    title: "Elementos de Emergencia | HumanIA",
    description:
      "Suministro y mantenimiento de botiquines, extintores, luces de emergencia, detectores de humo y señalización para empresas en Colombia.",
    url: "https://humania.com.co/productos",
  },
  alternates: { canonical: "https://humania.com.co/productos" },
};

const WA_BASE =
  "https://wa.me/573102365931?text=" // cambia al número de HumIng

const productos = [
  {
    slug: "botiquines",
    titulo: "Botiquines",
    descripcion:
      "Suministro de botiquines tipo A según Resolución 0705 de 2007. Opciones para oficina, industria y vehículos.",
    bullets: ["Tipo A – normativo", "Reposiciones", "Versión portátil"],
    imagen: "/products/botiquines12.webp", // Imagen de botiquín vacío sin medicamentos
  },
  {
    slug: "extintores",
    titulo: "Extintores",
    descripcion:
      "Venta, mantenimiento de extintores multipropósito, CO2, Agua a presión y Solkaflam.",
    bullets: ["Multipropósito (ABC)", "CO₂", "Agua a presión / Solkaflam"],
    imagen: "/products/extintor.webp",
  },
  {
    slug: "luces-emergencia",
    titulo: "Luces de emergencia",
    descripcion:
      "Suministro de luces de emergencia según especificaciones técnicas de los entes de control.",
    bullets: ["LED alta eficiencia", "Autonomía certificada", "Mantenimiento"],
    imagen: "/products/luces.webp",
  },
  {
    slug: "detectores-humo",
    titulo: "Detectores de humo",
    descripcion:
      "Detectores según requisitos técnicos para protección de áreas críticas.",
    bullets: ["Fotoeléctricos / térmicos", "Red cableada o autónomos", "Integración con panel"],
    imagen: "/products/detectores.webp",
  },
  {
    slug: "senalizacion",
    titulo: "Señalización de emergencia",
    descripcion:
      "Señales fotoluminiscentes y normativas para evacuación, equipos contra incendio y rutas de escape.",
    bullets: ["Fotoluminiscente", "PVC / Aluminio", "Acorde a normativa"],
    imagen: "/products/senalizacion.webp",
  },
]

// Utilidad para crear el mensaje de WhatsApp por producto
function waLink(nombre: string) {
  const msg = `Hola, quiero cotizar productos de *${nombre}* para mi empresa. ¿Podemos hablar?`
  return `${WA_BASE}${encodeURIComponent(msg)}`
}


export default function ProductosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <main className="flex-1">

        <PageHeader
          label="Equipos de seguridad"
          title="Elementos de Emergencia"
          description="Suministro y mantenimiento de equipos de seguridad conforme a la normativa vigente. Cotiza en un clic por WhatsApp."
          breadcrumb="Productos"
        />

        <div className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-6">

            {/* Products grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
              {productos.map((p, i) => (
                <article
                  key={p.slug}
                  className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-orange-100/50 shadow-lg hover:shadow-xl hover:shadow-orange-100/20 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-orange-50/30 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                      <Image
                        src={p.imagen}
                        alt={p.titulo}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={i === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      <Badge className="absolute left-4 top-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 shadow-lg">
                        Disponible
                      </Badge>
                    </div>

                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                        {p.titulo}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {p.descripcion}
                      </p>

                      <ul className="space-y-2 text-sm text-slate-700">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2">
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <a href={waLink(p.titulo)} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Cotizar por WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Subtle hover border effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10" />
                </article>
              ))}
            </div>

            {/* Enhanced CTA section */}
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-orange-50/80 backdrop-blur-sm border border-orange-100/50 shadow-xl p-8 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5" />
                <div className="relative z-10 space-y-6">
                  <h4 className="text-2xl font-bold text-slate-900">
                    ¿Necesitas asesoría para tu compra?
                  </h4>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Te asesoramos para escoger la mejor opción según tu actividad y nivel de riesgo.
                  </p>
                  <div>
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 px-8"
                    >
                      <a href={waLink("Asesoría de productos")} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Hablar por WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}