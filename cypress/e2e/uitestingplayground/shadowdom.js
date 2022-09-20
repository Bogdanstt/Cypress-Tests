describe("Working with shadow Dom", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
  it("asd", () => {
    cy.visit("http://uitestingplayground.com/shadowdom");
    cy.get("#buttonGenerate", { includeShadowDom: true }).click();
    cy.get("#buttonCopy", { includeShadowDom: true }).click({ force: true });
  });
});
