'use client'
import React from 'react'
import { HeroHeader } from './header'
import "keen-slider/keen-slider.min.css"
import { HeroCarousel } from './HeroCarousel'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <div className="flex flex-col items-center justify-center text-center space-y-6 px-6 pt-38 pb-12">
                <HeroCarousel />
            </div>


        </>
    )
}

const AppComponent = () => {
    return (
        <div className="relative space-y-3 rounded-[1rem] bg-white/5 p-4">
            <div className="flex items-center gap-1.5 text-orange-400">
                <img
                    src="/HumanIa.webp"  // Asegúrate de tener esta imagen en /public
                    alt="HumIng Icono"
                    className="w-6 h-6"
                />
                <div className="text-sm font-medium">Huming SAS <br />
                    Sistemas de Gestión Hechos a Su Medida</div>
            </div>
            <div className="space-y-3">
                <div className="text-foreground border-b border-white/10 pb-3 text-sm font-medium">Somos una empresa dinámica y ponemos a disposición de los clientes nuestro conocimiento especializado en la creación de sistemas de gestión que se adhieren a los más altos estándares.</div>
                <div className="space-y-3">
                    <div className="space-y-1">
                    </div>
                </div>
            </div>
        </div>
    )
}
