import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: isProd ? "my-csv-next" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
