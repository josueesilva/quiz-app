/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://opentdb.com/api.php:path*',
        },
      ]
    },
};

module.exports = nextConfig
