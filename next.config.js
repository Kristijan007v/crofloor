/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const MEDIA_DOMAIN = process.env.MEDIA_DOMAIN;

const nextConfig = {
  i18n,
  reactStrictMode: true,
};

module.exports = withPlugins([
  [withBundleAnalyzer],
  withPWA({
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
    },
    i18n,
    reactStrictMode: true,
    images: {
      domains: ["localhost", MEDIA_DOMAIN],
    },
  }),
]);
