/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@lifi/widget']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  compiler: {
    chakra: true,
  },
  webpack: {
    unknownContextCritical: false,
    unknownContextRegExp: /^.\/.*$/
  },
  images: {
    domains: ['d1wqzb5bdbcre6.cloudfront.net']
  },
}

module.exports = withTM(nextConfig)
