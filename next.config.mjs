/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',           // Define el protocolo (http/https)
        hostname: 'res.cloudinary.com', // El dominio o subdominio permitido
        port: '',                    // Si hay algún puerto específico (normalmente se deja vacío)
        pathname: '/m43g0r/**',      // Define un patrón para los path (aquí permite todas las rutas)
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/images/**',      // Otra regla para otro dominio
      },
    ],
  },
};

export default nextConfig;
