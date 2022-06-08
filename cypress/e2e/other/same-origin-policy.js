///<reference types="cypress"/>
describe("Cypress web security", () => {
  it("Validate visiting two different super-domains", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.visit("https://automationteststore.com/");
  });

  it("Validate visiting two different super-domains via user actions", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });
  it.only("Use cy.origin  to visit different super-domains", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("attr", "target", "_self")
      .click({ force: true });
    cy.origin("https://automationteststore.com/", () => {
      cy.visit("https://automationteststore.com/");
      cy.url().should("eq", "https://automationteststore.com/");
    });
  });
});
