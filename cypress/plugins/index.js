/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
//   return require("@bahmutov/cypress-extends")(config.configFile);
// };

// promisified fs module

// const cucumber = require("cypress-cucumber-preprocessor").default;

// plugins file
module.exports = (on, config) => {
  // accept a configFile value or use development by default
  // const file = config.env.configFile || "development";
  //for BDD
  // on("file:preprocessor", cucumber());
};
