/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.access-fulcrum.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.traxys.com',
      },
      {
        protocol: 'https',
        hostname: 'continental-lithium.com',
      },
      {
        protocol: 'https',
        hostname: 'readdy.ai',
      },
    ],
  },
};

export default nextConfig;
