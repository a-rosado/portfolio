/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.erasolutions.us'],
  },
};

module.exports = nextConfig;
