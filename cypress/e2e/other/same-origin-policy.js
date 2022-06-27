///<reference types="cypress"/>
describe("Cypress web security", () => {
  it("Validate visiting two different super-domains", () => {
    cy.visit("https://webdriveruniversity.com/");
    // cy.visit("https://automationteststore.com/"); - will not work
  });

  it("Validate visiting two different super-domains via user actions", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });
  it("Use cy.origin  to visit different super-domains", () => {
    cy.viewport(1200, 768);
    const sentArgs = { name: "webdriveruni", password: "webdriveruni" };
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("attr", "target", "_self")
      .click({ force: true });
    cy.origin(
      "https://automationteststore.com/",
      { args: sentArgs },
      ({ name, password }) => {
        cy.visit("https://automationteststore.com/");
        cy.url().should("eq", "https://automationteststore.com/");
        //login with args sent by 'args' object
        cy.visit("https://automationteststore.com/index.php?rt=account/login");
        cy.get("#loginFrm_loginname").type(name);
        cy.get("#loginFrm_password").type(password);
        cy.get("#loginFrm > fieldset > .btn").click();
        cy.url().should("include", "/index.php?rt=account/account");
        cy.window().then((win) => {});
      }
    );
  });
});
