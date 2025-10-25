import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: 'https://chatslide.ai/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
