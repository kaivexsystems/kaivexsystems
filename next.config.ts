import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/rise-with-fariha",
        destination: "/rise-with-fariha.html",
      },
    ];
  },
};

export default nextConfig;
