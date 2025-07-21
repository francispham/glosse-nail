import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Known domain for project assets - ignore spell check warning
    domains: ["res.cloudinary.com", "html.tailus.io", "ik.imagekit.io"],
  },
};

export default nextConfig;
