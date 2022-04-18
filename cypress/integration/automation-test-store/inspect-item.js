///<reference types="cypress-xpath" />
describe("Insepct Automation Test Store using chain of commands", () => {
  it("Click on the first item using item header", () => {
    cy.visit("https://automationteststore.com/");
    cy.xpath(
      "//*[@id='block_frame_featured_1769']/div/div[1]/div[1]/div/a"
    ).click();
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
  });
  it.only("Click on the first item using text", () => {
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
