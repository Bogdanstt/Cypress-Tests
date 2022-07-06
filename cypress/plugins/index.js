/// <reference types="cypress" />



const testomatioReporter = require("@testomatio/reporter/lib/adapter/cypress-plugin");
//For Cucumber Integration
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const nodePolyfills =
  require("@esbuild-plugins/node-modules-polyfill").NodeModulesPolyfillPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
module.exports = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config); // to allow json to be produced
  // To use esBuild for the bundler when preprocessing
  on(
    "file:preprocessor",
    createBundler({
      plugins: [nodePolyfills(), createEsbuildPlugin(config)],
    })
  );
  testomatioReporter(on, config);
  return config;
};
