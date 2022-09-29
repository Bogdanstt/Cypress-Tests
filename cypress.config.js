const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalInteractiveRunEvents: true,
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 4000,
  pageLoadTimeout: 29000,
  env: {
    webdriveruni_homepage: "https://webdriveruniversity.com",
    first_name: "Sarah",
    last_name: "magdi",
    password: "webdriveruni",
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
    async setupNodeEvents(on, config) {
      // require("@cypress/code-coverage/task")(on, config);

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },

    excludeSpecPattern: "**/*.{not.js, feature}",
    experimentalSessionAndOrigin: true,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    supportFile: "cypress/support/e2e.js",
  },
});
