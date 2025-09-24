/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',                     // Dominio principal de Cloudinary
      'inea-web-backend-production.up.railway.app' // Nuevo dominio de Strapi en Railway
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'inea-web-backend-production.up.railway.app',
        pathname: '/**',
      }
    ]
  },
  async rewrites() {
    return [];
  }
};

module.exports = nextConfig;
