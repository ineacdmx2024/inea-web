/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Dominio principal de Cloudinary
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'inea-web-backend-production.up.railway.app',  // Nuevo dominio de Strapi en Railway
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
