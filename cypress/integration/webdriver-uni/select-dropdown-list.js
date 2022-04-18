///<reference types="cypress"/>
describe("Interact with dropdown list via webdriveruni", () => {
  it("Select specific values via dropdown list", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("attr", "target", "_self")
      .click({ force: true });
    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng");
    cy.get("#dropdowm-menu-3").select("jquery").contains("JQuery");

    cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven");
    cy.get("#dropdowm-menu-2").select("TestNG").contains("TestNG");
  });
});
