///<reference types="cypress"/>
describe("Verify checkboxes via webdriveruni", () => {
  beforeEach(() => {
    cy.visit(
      "https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
  });

  // cy.get("#dropdown-checkboxes-radiobuttons")
  //   .invoke("attr", "target", "_self") // or invoke("removeAttr", "_target")
  //   .click({ force: true });

  it("Check and validate checkbox", () => {
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    cy.get("@option-1").check().should("be.checked");
  });
  it("Uncheck and validate checkbox", () => {
    cy.get(":nth-child(5) > input").as("option-3");
    cy.get("@option-3").uncheck().should("not.be.checked");
  });
  it("Check multiple checkboxs", () => {
    cy.get("input[type = 'checkbox']")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("cypress-studio-test", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[value="green"]').check();
    cy.get('[value="blue"]').check();
    cy.get('[value="yellow"]').check();
    cy.get('#radio-buttons > [value="orange"]').check();
    cy.get('[value="purple"]').check();
    /* ==== End Cypress Studio ==== */
  });
});
