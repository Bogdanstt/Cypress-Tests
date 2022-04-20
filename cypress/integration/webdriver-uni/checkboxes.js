///<reference types="cypress"/>
describe("Verify checkboxes via webdriveruni", () => {
  beforeEach(() => {
    
    cy.navigateTo_wuCheckbox_Page();
    // cy.get("#dropdown-checkboxes-radiobuttons")
    //   .invoke("attr", "target", "_self") // or invoke("removeAttr", "_taget")
    //   .click({ force: true });
  });
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
});
