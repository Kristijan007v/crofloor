const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hr"],
    localePath: path.resolve("./public/locales"),
  },
};
