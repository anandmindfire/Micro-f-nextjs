/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@micro-frontend-demo/shared"],
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM http://localhost:3000',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 