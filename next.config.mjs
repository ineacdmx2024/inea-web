/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',           // Define el protocolo (http/https)
        hostname: 'res.cloudinary.com', // El dominio o subdominio permitido
        port: '',                    // Si hay algún puerto específico (normalmente se deja vacío)
        pathname: '/dce9xqd1e/**',      // Define un patrón para los path (aquí permite todas las rutas)
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/images/**',      // Otra regla para otro dominio
      },
      {
        protocol: 'https',
        hostname: 'localhost:1337',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        pathname: '/**',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
