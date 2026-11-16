import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["sharp", "tesseract.js", "msedge-tts"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
