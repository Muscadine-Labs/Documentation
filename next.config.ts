import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "basescan.org",
      },
    ],
  },
};

export default nextConfig;
