import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  domains: ["i.ytimg.com"],
  image: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: ""
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // 빌드 시 ESLint 검사 무시
  },
};

export default nextConfig;
