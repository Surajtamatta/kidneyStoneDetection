/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
      async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://127.0.0.1:8080/api/:path*', // Proxy to the desired host
          },
        ];
      },
    
}



module.exports = nextConfig;