///<reference types="cypress-xpath" />
describe("Insepct Automation Test Store using chain of commands", () => {
  it("Click on the first item using item header", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
  });
  it("Click on the first item using text", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then((itemText) => {
        console.log("The following item is selected ", itemText.text());
      });
  });
  it("Click on the first item using index", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0);
  });
});
