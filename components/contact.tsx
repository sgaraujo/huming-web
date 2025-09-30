'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, MessageCircle, Users, Instagram, Facebook, Clock } from 'lucide-react'
import React from 'react'

export default function ContactSection() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/human_ia_co?igsh=MWt1MjNzdW52NzVwdg==',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/17H68FUwVy/',
      icon: Facebook,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@humania1725?_t=ZS-8zeXUYY0Mie&_r=1',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: 'from-gray-800 to-red-600',
      hoverColor: 'hover:from-gray-900 hover:to-red-700'
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/HumanIA2025?t=mIGyXxJv0hTZ86afYNAkNw&s=09',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:from-gray-800 hover:to-black'
    }
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre los servicios de HumanIA. ¿Podrían brindarme información?')
    const whatsappUrl = `https://wa.me/573102365931?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-950 relative overflow-hidden">
      {/* Decorativos */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-0 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6 pt-12 text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a transformar tu organización. Conversemos sobre tus necesidades y objetivos.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Asesoría personalizada</span>
            </div>
          </div>
        </div>

        {/* Info de contacto: MISMA ALTURA */}
        <div className="grid gap-6 md:grid-cols-2 auto-rows-fr mb-12">
          {/* Card 1 */}
          <Card className="h-full flex flex-col p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Área Comercial</h3>
                <a
                  href="mailto:comercial@humania.com.co"
                  className="text-lg text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium hover:underline transition-colors break-all"
                >
                  comercial@humania.com.co
                </a>
                <div className="flex items-center gap-2 mt-3 text-gray-600 dark:text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>+57 310 236 5931</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Clock className="w-4 h-4" />
                  <span>Lunes a viernes, 8:00 AM – 5:00 PM</span>
                </div>
                <div className="mt-6">
                  <Button onClick={handleWhatsAppClick} variant="default" className="bg-emerald-600 hover:bg-emerald-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Escribir por WhatsApp
                  </Button>
                </div>
              </div>
            </div>
            {/* Spacer para empujar el contenido al tope si agregas algo abajo */}
            <div className="mt-auto" />
          </Card>

          {/* Card 2 */}
          <Card className="h-full flex flex-col p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Atención telefónica</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  ¿Necesitas hablar con alguien de inmediato? Llámanos y te guiamos paso a paso.
                </p>
                <div className="mt-3 text-lg font-medium text-indigo-600 dark:text-indigo-400">
                  +57 310 236 5931
                </div>
                <div className="mt-4 flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Clock className="w-4 h-4" />
                  <span>Lunes a viernes, 8:00 AM – 5:00 PM</span>
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline" className="border-indigo-300 dark:border-indigo-700">
                    <a href="tel:+573102365931">Llamar ahora</a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-auto" />
          </Card>
        </div>

        {/* Card WhatsApp ancho */}
        <Card className="mx-auto max-w-4xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-xl mb-12">
          <div className="p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">¡Hablemos por WhatsApp!</h3>
                <p className="text-gray-600 dark:text-gray-300">Contacta directamente con nuestro equipo para asesoría inmediata</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Button
                onClick={handleWhatsAppClick}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Escribir ahora
              </Button>
            </div>
          </div>
          <div className="px-6 pb-4 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              +57 310 236 5931 • Lunes a viernes, 8:00 AM - 5:00 PM
            </p>
          </div>
        </Card>

        {/* Redes */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Síguenos en nuestras redes sociales</h3>
          <div className="flex justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label={social.name}
                title={social.name}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg text-white`}>
                  <social.icon className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Info adicional */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Bogotá, Colombia - Servicios a nivel nacional</span>
          </div>
        </div>
      </div>
    </section>
  )
}
