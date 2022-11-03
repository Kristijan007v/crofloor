const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "hr",
    locales: ["hr", "en"],
    localePath: path.resolve("./public/locales"),
  },
};
