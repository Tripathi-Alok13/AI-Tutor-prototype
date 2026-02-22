/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [{ 
      source: "/api/:path*", 
      destination: "https://adaptive-ai-tutor-production.up.railway.app/api/:path*" 
    }];
  },
};
export default nextConfig;