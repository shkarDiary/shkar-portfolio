const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
    ],
  },
  skipMiddlewareUrlNormalize: true,
};

module.exports = nextConfig;
