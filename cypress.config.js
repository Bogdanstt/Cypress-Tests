const { defineConfig } = require("cypress");
module.exports = defineConfig({
  video: true,
  chromeWebSecurity: false,
  defaultCommandTimeout: 4000,
  pageLoadTimeout: 29000,
  env: {
    webdriveruni_homepage: "https://webdriveruniversity.com",
    first_name: "Sarah",
    last_name: "magdi",
  },
  failOnStatusCode: false,
  projectId: "haxrtm",
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // on();
      return require("./cypress/plugins/index.js")(on, config);
    },

    excludeSpecPattern: "**/*.not.js",
    experimentalSessionAndOrigin: true,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
  },
});
