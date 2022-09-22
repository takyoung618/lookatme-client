/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  trailingSlash: true,
  generateBuildId: () => "lookatme",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/admin-my-page": { page: "/admin-my-page" },
    "/community": { page: "/community" },
    "/customer-center": { page: "/customer-center" },
    "/expert": { page: "/expert" },
    "/expert-my-page": { page: "/expert-my-page" },
    "/id-find": { page: "/id-find" },
    "/live-chat": { page: "/live-chat" },
    "/login": { page: "/login" },
    "/main": { page: "/main" },
    "/my-page": { page: "/my-page" },
    "/password-find": { page: "/password-find" },
    "/sign-up": { page: "/sign-up" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
