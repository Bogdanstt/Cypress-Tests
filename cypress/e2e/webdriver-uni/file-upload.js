///<reference types="cypress"/>
describe("Test file upload via webdriveruni", () => {
  it("Upload a file...", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("attr", "target", "_self") // or invoke("removeAttr", "_taget")
      .click({ force: true });
    cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
    cy.get("#submit-button").click();
  });
  it("Upload no file", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("attr", "target", "_self") // or invoke("removeAttr", "_taget")
      .click({ force: true });
    cy.get("#myFile");
    cy.get("#submit-button").click();
  });
});
