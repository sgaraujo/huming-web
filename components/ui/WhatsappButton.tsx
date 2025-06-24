"use client"

import { MessageCircle } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function WhatsappButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/573102365931?text=Hola%2C%20estoy%20interesado%20en%20una%20asesor%C3%ADa%20con%20HumIng%20SAS.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escríbenos por WhatsApp"
            className="fixed bottom-6 right-6 z-50  md:flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-500 ease-out opacity-0 animate-fade-in"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          Escríbenos por WhatsApp
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
