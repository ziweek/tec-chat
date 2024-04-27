/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: true,
});

const nextConfig = { reactStrictMode: false };

// module.exports = nextConfig;

module.exports = withPWA({
  // next.js config
  ...nextConfig,
});
