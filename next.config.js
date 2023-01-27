/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "www.superherodb.com",
      }
    ]
  }
};

module.exports = nextConfig
