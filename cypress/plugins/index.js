/// <reference types="cypress" />

module.exports = async (on, config) => {
  on("file:preprocessor");

  return config;
};
