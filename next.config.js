/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");

const nextConfig = {
  i18n,
  reactStrictMode: true,
};

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  i18n,
  reactStrictMode: true,
  images: {
    domains: ["localhost", "test.pozgaj.com"],
  },
});
