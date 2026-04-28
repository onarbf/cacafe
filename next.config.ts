import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cacafe",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
