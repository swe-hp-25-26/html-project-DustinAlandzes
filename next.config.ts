import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === "development" ? "" : "/html-project-DustinAlandzes"
};

export default nextConfig;
