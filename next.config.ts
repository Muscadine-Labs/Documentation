import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ["basescan.org"],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
