/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  trailingSlash: true,
  generateBuildId: () => "lookatme",
};

module.exports = nextConfig;
