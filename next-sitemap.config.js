/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://crofloor.vercel.app",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  // ...other options
};
