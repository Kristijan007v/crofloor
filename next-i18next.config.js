const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "hr",
    locales: ["en", "hr"],
    localeDetection: true,
    localePath: path.resolve("./public/locales"),
  },
};
