// components/ui/QuickActions.tsx
"use client"

import {ShoppingCart, FileText, MessageCircle, Headset } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const WA_URL =
  "https://wa.me/573102365931?text=Hola%2C%20estoy%20interesado%20en%20una%20asesor%C3%ADa%20con%20HumIng%20SAS.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F"

export default function QuickActions() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            className={cn(
              "h-14 w-14 rounded-full shadow-lg transition",
              open ? "rotate-45 bg-orange-600 hover:bg-orange-700" : "bg-orange-600 hover:bg-orange-700"
            )}
            aria-label="Acciones rápidas"
          >
            <Headset className="h-6 w-6 text-white" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          side="top"
          align="end"
          className="mr-2 min-w-[220px] rounded-xl p-2"
        >
          <DropdownMenuItem asChild>
            <Link href="/productos" className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100">
                <ShoppingCart className="h-4 w-4 text-sky-600" />
              </span>
              <div>
                <div className="text-sm font-medium">Productos</div>
                <div className="text-xs text-muted-foreground">Solicita los precios </div>
              </div>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/contacto" className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-100">
                <FileText className="h-4 w-4 text-violet-600" />
              </span>
              <div>
                <div className="text-sm font-medium">Cotizaciones</div>
                <div className="text-xs text-muted-foreground">Solicita tu asesoría</div>
              </div>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <MessageCircle className="h-4 w-4 text-green-600" />
              </span>
              <div>
                <div className="text-sm font-medium">WhatsApp</div>
                <div className="text-xs text-muted-foreground">Comunícate con HumanIA</div>
              </div>
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
