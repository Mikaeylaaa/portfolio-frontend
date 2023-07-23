/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

// next.config.js
module.exports = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL || "http://localhost:8082/api",
    DEBUG: process.env.DEBUG || true,
    // Add other configuration variables here
  },
};
