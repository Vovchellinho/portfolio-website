import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              // можно включить, если хочешь, чтобы fill/stroke унаследовались
              // svgo: true,
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
