import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow loading the dev server over the local network (e.g. http://192.168.x.x:3000)
  // so HMR + client chunks aren't blocked as cross-origin dev resources.
  allowedDevOrigins: ["192.168.11.104"],
};

export default nextConfig;
