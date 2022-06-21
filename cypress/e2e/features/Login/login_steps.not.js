import {
  Before,
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

let stub;

Before(() => {
  cy.log("Execute before step");
  stub = cy.stub();
});

Given("I acces the webdriveruniversity Login page", () => {
  cy.visit("https://webdriveruniversity.com/Login-Portal/index.html");
});

When("I enter a username {word}", (username) => {
  cy.get("#text").type(username);
});

And("I enter the password {word}", (password) => {
  cy.get("#password").type(password);
});

And("I click on the login button", () => {
  cy.get("#login-button").click();
  cy.on("window:alert", stub);
});

Then(
  "I should be presented the following message: {word} {word}",
  (message, message2) => {
    expect(stub.getCall(0)).to.be.calledWith(message + " " + message2);
  }
);
