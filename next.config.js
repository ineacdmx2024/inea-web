/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',  // Dominio principal de Cloudinary
      'inea-web-backend-cg20.onrender.com'  // Dominio de tu backend Strapi
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'inea-web-backend-cg20.onrender.com',
        pathname: '/**',
      }
    ]
  },
  // Asegura que Next.js procese correctamente las URLs absolutas de Cloudinary
  async rewrites() {
    return [];
  }
};

module.exports = nextConfig;
