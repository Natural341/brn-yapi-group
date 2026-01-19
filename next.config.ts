import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone", // Removed for SQLite compatibility
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
