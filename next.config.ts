import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ShutterArcStudios",
  assetPrefix: "/ShutterArcStudios/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
