/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: true,
});
const withVideos = require("next-videos");
const nextConfig = { reactStrictMode: false };

// module.exports = nextConfig;

module.exports = withPWA({
  // next.js config
  ...withVideos(),
  ...nextConfig,
});
