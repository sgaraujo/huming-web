// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // <- habilita export estático
  trailingSlash: true,        // recomendado en hosting estático
  images: { unoptimized: true } // si usas <Image>, evita optimizador en runtime
  // basePath: '/subcarpeta',  // solo si NO estás en el dominio raíz
  // assetPrefix: '/subcarpeta'// idem
};
module.exports = nextConfig;
