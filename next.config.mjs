/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },

  trailingSlash: true,
}

export default nextConfig