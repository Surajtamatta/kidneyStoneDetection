/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
      async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: ['https://kidneystonedetection.streamlit.app/api/:path*','http://localhost:3000/api/:path*'], // Proxy to the desired host
          },
        ];
      },
  output:'standalone'
}



module.exports = nextConfig;
