import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://chatslide.ai/:path*',
        permanent: true, // This sets up a 301 permanent redirect
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
