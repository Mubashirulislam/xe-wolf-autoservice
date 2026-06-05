/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'xe-wolf.de' },
      { protocol: 'https', hostname: 'videos.pexels.com' },
    ],
  },
}
module.exports = nextConfig
