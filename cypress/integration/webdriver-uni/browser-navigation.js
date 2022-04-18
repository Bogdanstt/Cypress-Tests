///<reference types="cypress"/>
describe("Validate Webdriveruni homepage links", () => {
  it("Should redirect to the correct pages", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#contact-us")
      .invoke("attr", "target", "_self") // or invoke("removeAttr", "_taget")
      .click({ force: true });
    cy.url().should("include", "contactus");
    cy.go("back");
    cy.reload(true);
    cy.url().should("include", "https://webdriveruniversity.com");
    cy.go("forward");
    cy.url().should("include", "contactus");
    cy.go("back");
    cy.get("#login-portal")
      .invoke("attr", "target", "_self") // or invoke("removeAttr", "_taget")
      .click({ force: true });
    cy.url().should("include", "Login-Portal");
      cy.go("back");
    cy.get("#to-do-list")
      .invoke("attr", "target", "_self") // or invoke("removeAttr", "_taget")
      .click({ force: true });
    cy.url().should("include", "To-Do-List");
      cy.go("back");
      
  });
});
