import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "upload.wikimedia.org",
      "cdn.iconscout.com",
      "static-00.iconduck.com",
      "cdn4.iconfinder.com",
      "github.com",
      "raw.githubusercontent.com",
    ],
  },
};

export default nextConfig;
