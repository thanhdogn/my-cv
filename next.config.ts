import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  assetPrefix: isProd ? "/my-cv/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
