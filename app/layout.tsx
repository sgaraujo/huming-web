import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappButton from "@/components/ui/WhatsappButton";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://humania.com.co";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "HumanIA | Salud y Seguridad en el Trabajo · Sistemas de Gestión ISO",
    template: "%s | HumanIA",
  },
  description:
    "HumanIA ofrece consultoría en SG-SST, normas ISO 9001, 14001 y 45001, riesgo psicosocial, PESV, teletrabajo y asesoría jurídica laboral para empresas en Colombia.",
  keywords: [
    "SG-SST",
    "seguridad y salud en el trabajo",
    "normas ISO",
    "ISO 45001",
    "ISO 9001",
    "ISO 14001",
    "sistemas de gestión",
    "riesgo psicosocial",
    "PESV",
    "teletrabajo",
    "gestión ambiental",
    "asesoría jurídica laboral",
    "HumanIA",
    "Colombia",
    "Bogotá",
  ],
  authors: [{ name: "HumanIA", url: BASE_URL }],
  creator: "HumanIA",
  publisher: "HumanIA",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: BASE_URL,
    siteName: "HumanIA",
    title: "HumanIA | Salud y Seguridad en el Trabajo · Sistemas de Gestión ISO",
    description:
      "Consultoría especializada en SG-SST, normas ISO, riesgo psicosocial y más. Acompañamos a tu empresa desde el diagnóstico hasta la mejora continua.",
    images: [
      {
        url: "/HumanIa-logo.webp",
        width: 400,
        height: 400,
        alt: "Logo HumanIA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HumanIA | Sistemas de Gestión y SST",
    description:
      "Consultoría en SG-SST, ISO 45001, riesgo psicosocial, PESV y más para empresas en Colombia.",
    images: ["/HumanIa-logo.webp"],
    site: "@HumanIA2025",
    creator: "@HumanIA2025",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const footerLinks = [
  { name: "Inicio", href: "/" },
  { name: "Quiénes somos", href: "/quienes-somos" },
  { name: "Servicios", href: "/servicios" },
  { name: "Productos", href: "/productos" },
  { name: "Contacto", href: "/contacto" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/human_ia_co?igsh=MWt1MjNzdW52NzVwdg==",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/17H68FUwVy/",
    icon: Facebook,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@humania1725?_t=ZS-8zeXUYY0Mie&_r=1",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://x.com/HumanIA2025?t=mIGyXxJv0hTZ86afYNAkNw&s=09",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Footer unificado */}
        <footer className="bg-gray-950 text-gray-400">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-10">
              {/* Brand */}
              <div className="space-y-4">
                <p className="text-white font-bold text-lg tracking-tight">HumanIA</p>
                <p className="text-sm leading-relaxed">
                  Consultoría especializada en Salud y Seguridad en el Trabajo, Sistemas de Gestión ISO y más. Bogotá, Colombia.
                </p>
                <div className="flex gap-3 pt-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                    >
                      <s.icon className="w-4 h-4 text-gray-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="space-y-4">
                <p className="text-white font-semibold text-sm uppercase tracking-wider">Navegación</p>
                <ul className="space-y-2 text-sm">
                  {footerLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <p className="text-white font-semibold text-sm uppercase tracking-wider">Contacto</p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="tel:+573102365931" className="hover:text-white transition-colors">
                      +57 310 236 5931
                    </a>
                  </li>
                  <li>
                    <a href="mailto:comercial@humania.com.co" className="hover:text-white transition-colors">
                      comercial@humania.com.co
                    </a>
                  </li>
                  <li className="text-gray-500">Lunes a viernes, 8:00 AM – 5:00 PM</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
              © {new Date().getFullYear()} HumanIA. Todos los derechos reservados.
            </div>
          </div>
        </footer>

        <WhatsappButton />
      </body>
    </html>
  );
}
