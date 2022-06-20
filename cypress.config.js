const { defineConfig } = require("cypress");
// const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  video: true,
  chromeWebSecurity: false,
  defaultCommandTimeout: 4000,
  pageLoadTimeout: 9000,
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
      // on("file:preprocessor", cucumber());
      // return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://www.rahulshettyacademy.com/AutomationPractice/#",
    excludeSpecPattern: "**other/",
    experimentalSessionAndOrigin: true,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
