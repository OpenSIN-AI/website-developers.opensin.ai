import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
  // Ensure Cloudflare compatibility
  output: 'export',
  distDir: 'dist',
};

const withMDX = createMDX({
  options: {
    // Note: remark-gfm and rehype plugins are omitted in this block to avoid ESM import complexity in config
  },
});

export default withMDX(nextConfig);
