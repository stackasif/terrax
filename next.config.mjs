
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/w320/**',
      },
    ],
  },
};

export default nextConfig;
