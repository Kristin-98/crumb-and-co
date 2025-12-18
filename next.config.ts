import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tesyiggwwfruswjnnbme.supabase.co",
      },
    ],
  },
};

export default nextConfig;
