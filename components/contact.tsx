import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Mail, Phone, MapPin, Send, Users, Clock } from 'lucide-react'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-950 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-0 relative z-10">
        {/* Header mejorado */}
        <div className="text-center mb-16">
          <h1 className="mb-6 pt-12 text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a transformar tu organización. Conversemos sobre tus necesidades y objetivos.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">Respuesta en 24h</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Asesoría personalizada</span>
            </div>
          </div>
        </div>

        {/* Información de contacto mejorada */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gerencia</h3>
                <Link
                  href="mailto:gerencia@huming.com.co"
                  className="text-lg text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-colors"
                >
                  gerencia@huming.com.co
                </Link>
                <div className="flex items-center gap-2 mt-3 text-gray-600 dark:text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>+57 310 236 5931</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gerencia Administrativa</h3>
                <Link
                  href="mailto:gerencia.administrativa@huming.com.co"
                  className="text-lg text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium hover:underline transition-colors"
                >
                  gerencia.administrativa@huming.com.co
                </Link>
                <div className="flex items-center gap-2 mt-3 text-gray-600 dark:text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>+57 300 ••• ••••</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Formulario mejorado */}
        <Card className="mx-auto max-w-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-2xl">
          <div className="p-8 sm:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Cuéntanos en qué podemos ayudarte
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Déjanos tus datos y te responderemos en menos de 24 horas.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Nombre completo *
                  </Label>
                  <Input 
                    type="text" 
                    id="name" 
                    placeholder="Tu nombre y apellidos" 
                    required 
                    className="h-12 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Correo electrónico *
                  </Label>
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="tucorreo@empresa.com" 
                    required 
                    className="h-12 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    País
                  </Label>
                  <Select>
                    <SelectTrigger className="h-12 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400">
                      <SelectValue placeholder="Selecciona tu país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="co">🇨🇴 Colombia</SelectItem>
                      <SelectItem value="us">🇺🇸 Estados Unidos</SelectItem>
                      <SelectItem value="mx">🇲🇽 México</SelectItem>
                      <SelectItem value="pe">🇵🇪 Perú</SelectItem>
                      <SelectItem value="ec">🇪🇨 Ecuador</SelectItem>
                      <SelectItem value="other">🌍 Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Cargo
                  </Label>
                  <Select>
                    <SelectTrigger className="h-12 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400">
                      <SelectValue placeholder="Selecciona tu cargo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gerencia">👔 Gerencia</SelectItem>
                      <SelectItem value="compras">🛒 Compras</SelectItem>
                      <SelectItem value="talento">👥 Talento humano</SelectItem>
                      <SelectItem value="sst">🦺 SST</SelectItem>
                      <SelectItem value="juridico">⚖️ Jurídico</SelectItem>
                      <SelectItem value="it">💻 Tecnología</SelectItem>
                      <SelectItem value="otro">📋 Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Empresa
                </Label>
                <Input 
                  type="text" 
                  id="company" 
                  placeholder="Nombre de tu empresa"
                  className="h-12 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Sitio web de la empresa
                </Label>
                <Input 
                  type="url" 
                  id="website" 
                  placeholder="https://tusitio.com"
                  className="h-12 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Servicio de interés
                </Label>
                <Select>
                  <SelectTrigger className="h-12 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400">
                    <SelectValue placeholder="¿Qué servicio te interesa?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sst">🟠 SG-SST (Seguridad y Salud en el Trabajo)</SelectItem>
                    <SelectItem value="psicosocial">🌸 Riesgo Psicosocial</SelectItem>
                    <SelectItem value="teletrabajo">🔵 Teletrabajo</SelectItem>
                    <SelectItem value="vial">🔴 Seguridad Vial (PESV)</SelectItem>
                    <SelectItem value="ambiental">🟢 Gestión Ambiental</SelectItem>
                    <SelectItem value="juridico">🟡 Asesoría Jurídica Laboral</SelectItem>
                    <SelectItem value="tecnologia">🟣 Desarrollo Tecnológico</SelectItem>
                    <SelectItem value="multiple">🎯 Múltiples servicios</SelectItem>
                    <SelectItem value="consulta">💬 Consulta general</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="msg" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mensaje *
                </Label>
                <Textarea 
                  id="msg" 
                  rows={4} 
                  placeholder="Escribe brevemente tu solicitud, objetivos o dudas que tengas sobre nuestros servicios..."
                  required
                  className="border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar mensaje
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                Al enviar este formulario aceptas nuestra política de privacidad y el tratamiento de tus datos.
              </p>
            </form>
          </div>
        </Card>

        {/* Información adicional */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Bogotá, Colombia - Servicios a nivel nacional</span>
          </div>
        </div>
      </div>
    </section>
  )
}