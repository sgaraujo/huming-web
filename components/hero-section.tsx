'use client'
import React from 'react'
import "keen-slider/keen-slider.min.css"
import { HeroCarousel } from './HeroCarousel'

export default function HeroSection() {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center space-y-6 px-6 pt-38 pb-12">
                <HeroCarousel />
            </div>


        </>
    )
}

