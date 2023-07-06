/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
    ],
  },
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: false
  }
}

module.exports = nextConfig
