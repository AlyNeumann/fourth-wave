/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  //this should stop the ethers library error but it's not for some reason....AH!
  webpack: {
    unknownContextCritical: false,
    unknownContextRegExp: /^.\/.*$/
  },
}

module.exports = nextConfig
