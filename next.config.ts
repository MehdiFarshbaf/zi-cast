import type { NextConfig } from "next";

const nextConfig = {
  images: {
      localPatterns: [
          {
              pathname: '/assets/images/**',
              search: '',
          },
      ],
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'api.tiademco.com',
              port: '',
          }
      ]
  }
};
export default nextConfig;
