/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [
      "img.icons8.com"
    ]
  },
  pageExtensions: [
    "p.js"
  ]
}

module.exports = nextConfig
