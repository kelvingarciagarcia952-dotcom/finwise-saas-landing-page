/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignora errores de ESLint al construir en Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Allow all hosts for Replit environment
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
