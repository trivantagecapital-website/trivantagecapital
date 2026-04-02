/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vantagepoint37.wordpress.com',
      },
      {
        protocol: 'https',
        hostname: 'trivantagecapital.wordpress.com',
      },
      {
        protocol: 'https',
        hostname: '2.gravatar.com',
      }
    ],
  },
};

export default nextConfig;
