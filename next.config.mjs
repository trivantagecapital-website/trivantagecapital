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
        hostname: 'vantagepoint37.files.wordpress.com',
      },
    ],
  },
};

export default nextConfig;
