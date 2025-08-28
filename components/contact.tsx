import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">Contáctanos</h1>

        <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
          <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
            <div>
              <h2 className="mb-3 text-lg font-semibold">Gerencia</h2>
              <Link
                href="mailto:gerencia@huming.com.co"
                className="text-lg text-blue-600 hover:underline dark:text-blue-400"
              >
                gerencia@huming.com.co
              </Link>
              <p className="mt-3 text-sm">+57 310 236 5931</p>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Gerencia administrativa</h3>
              <Link
                href="mailto:gerencia.administrativa@huming.com.co"
                className="text-lg text-blue-600 hover:underline dark:text-blue-400"
              >
                gerencia.administrativa@huming.com.co
              </Link>
              <p className="mt-3 text-sm">+57 300 ••• ••••</p>
            </div>
          </div>
        </div>

        <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>

        <form action="" className="border px-4 py-12 lg:px-0 lg:py-24">
          <Card className="mx-auto max-w-lg p-8 sm:p-16">
            <h3 className="text-xl font-semibold">Cuéntanos en qué podemos ayudarte</h3>
            <p className="mt-4 text-sm">Déjanos tus datos y te responderemos en menos de 24&nbsp;horas.</p>

            <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
              <div>
                <Label htmlFor="name" className="space-y-2">Nombre completo</Label>
                <Input type="text" id="name" placeholder="Tu nombre y apellidos" required />
              </div>

              <div>
                <Label htmlFor="email" className="space-y-2">Correo electrónico</Label>
                <Input type="email" id="email" placeholder="tucorreo@empresa.com" required />
              </div>

              <div>
                <Label className="space-y-2" id="country-label">País</Label>
                <Select>
                  <SelectTrigger aria-labelledby="country-label">
                    <SelectValue placeholder="Selecciona tu país" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="co">Colombia</SelectItem>
                    <SelectItem value="us">Estados Unidos</SelectItem>
                    <SelectItem value="fr">Francia</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="website" className="space-y-2">Sitio web de la empresa</Label>
                <Input type="url" id="website" placeholder="https://tusitio.com" />
              </div>

              <div>
                <Label className="space-y-2" id="role-label">Cargo</Label>
                <Select>
                  <SelectTrigger aria-labelledby="role-label">
                    <SelectValue placeholder="Selecciona tu cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gerencia">Gerencia</SelectItem>
                    <SelectItem value="compras">Compras</SelectItem>
                    <SelectItem value="talento">Talento humano</SelectItem>
                    <SelectItem value="sst">SST</SelectItem>
                    <SelectItem value="juridico">Jurídico</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="msg" className="space-y-2">Mensaje</Label>
                <Textarea id="msg" rows={3} placeholder="Escribe brevemente tu solicitud" required />
              </div>

              <Button type="submit">Enviar mensaje</Button>
            </div>
          </Card>
        </form>
      </div>
    </section>
  )
}
