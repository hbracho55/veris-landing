  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    /* config options here */
    // Permitir puerto personalizado desde .env.local
    serverExternalPackages: ["dotenv"],
    env: {
      PORT: process.env.PORT || "3010",
    },
  };

  export default nextConfig;
