/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com'],
  },
}

module.exports = nextConfig
