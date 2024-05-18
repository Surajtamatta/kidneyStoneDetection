/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
      async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://flask-app:8080/api/:path*', // Proxy to the desired host
          },
        ];
      },
  output:'standalone'
}



module.exports = nextConfig;