/** @type {import('next').NextConfig} */
const nextConfig = {
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
  // Configure for Replit proxy environment
  experimental: {
    allowedHosts: true,
  },
};

export default nextConfig;
