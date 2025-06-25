"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "../../hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function AsesoriaDrawer() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const content = (
    <>
      <DrawerHeader className="text-left">
        <DrawerTitle>Solicita tu asesoría</DrawerTitle>
        <DrawerDescription>
          Por favor diligencia los datos y te contactaremos en menos de 24h.
        </DrawerDescription>
      </DrawerHeader>
      <AsesoriaForm className="px-4" />
      <DrawerFooter className="pt-2">
        <DrawerClose asChild>
          <Button variant="outline">Cancelar</Button>
        </DrawerClose>
      </DrawerFooter>
    </>
  )

  return isDesktop ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-purple-700 text-white hover:bg-purple-800 transition-colors">Solicita tu asesoría</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Solicita tu asesoría</DialogTitle>
          <DialogDescription>
            Diligencia el siguiente formulario y te contactaremos.
          </DialogDescription>
        </DialogHeader>
        <AsesoriaForm />
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild >
        <Button size="lg"  className="bg-purple-700 text-white hover:bg-purple-800 transition-colors siz-lg">Solicita tu asesoría</Button>
      </DrawerTrigger>
      <DrawerContent>{content}</DrawerContent>
    </Drawer>
  )
}

function AsesoriaForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)} onSubmit={(e) => {
      e.preventDefault()
      alert("¡Solicitud enviada! Pronto te contactaremos.")
    }}>
      <div className="grid gap-3">
        <Label htmlFor="nombre">Nombre completo</Label>
        <Input type="text" id="nombre" placeholder="Juan Pérez" required />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="empresa">Empresa</Label>
        <Input id="empresa" placeholder="Mi empresa S.A.S." />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input type="email" id="email" placeholder="correo@empresa.com" required />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="mensaje">¿Qué necesitas?</Label>
        <Textarea id="mensaje" placeholder="Ej: Auditoría bajo ISO 45001..." required />
      </div>
      <Button type="submit">Enviar solicitud</Button>
    </form>
  )
}
