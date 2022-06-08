///<reference types="cypress"/>
describe("Verify radio buttons via webdriveruni", () => {
  before(() => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("attr", "target", "_self")
      .click({ force: true });
  });
  it("Check specific radio buttons", () => {
    cy.get("#radio-buttons").find('input[type="radio"]').first().check();
    cy.get("#radio-buttons").find('input[type="radio"]').eq(2).check();
  });
  it("Validate the state of specific radio buttons", () => {
    cy.get('[value="lettuce"]').should("not.be.checked");
    cy.get('[value="pumpkin"]').should("be.checked");
    cy.get('[value="lettuce"]').check();
    cy.get('[value="lettuce"]').should("be.checked");
    cy.get('[value="pumpkin"]').should("not.be.checked");
    cy.get('[value="cabbage"]').should("be.disabled");
  });
});
