/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});
const withVideos = require("next-videos");
const nextConfig = {
  // ...withVideos(),
  // ...withPWA(),
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
      test: /.(mov|mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    });
    return config;
  },
  output: "standalone",
};

// module.exports = withPWA();
// module.exports = nextConfig;
// module.exports = withVideos({ ...nextConfig });
module.exports = {
  // next.js config
  ...withPWA(),
  ...withVideos(),
  ...nextConfig,
};
