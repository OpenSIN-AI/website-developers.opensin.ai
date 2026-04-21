/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
  // Ensure Cloudflare compatibility
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;
