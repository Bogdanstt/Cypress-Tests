///<reference types="cypress-xpath" />
var lodash = require("lodash");
describe("Alias and invoke tutorial", () => {
  it("Validate a specific Hair Care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productT");
    cy.get("@productT").its("length").should("be.gt", 5);
    cy.get("@productT").should("include", "Seaweed Conditioner");
  });
  it("Validates total number of products in homepage", () => {
    cy.visit("https://automationteststore.com/");
    // cy.get(".thumbnail").as("productThumbnail").its("length").should("eq", 16);
    // cy.get(".productcart").should("have.attr", "title", "Add to Cart");
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("eq", "Add to Cart");
  });
  it("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    // cy.get("@productThumbnail")
    //   .find(".oneprice")
    //   .each((el, index, list) => {
    //     cy.log(el.text());
    //   });
    cy.get("@productThumbnail")
      .find(".oneprice")
      .invoke("text")
      .as("itemPrice");
    cy.get("@productThumbnail")
      .find(".pricenew")
      .invoke("text")
      .as("saleitemPrice");

    let totalProductsValue = 0;
    cy.get("@itemPrice").then((priceText) => {
      let nonSale = 0;
      let priceNumber = priceText.split("$").forEach((el) => {
        nonSale += Number(el);
      });
      totalProductsValue = nonSale;
    });
    cy.get("@saleitemPrice")
      .then((priceText) => {
        let isonSale = 0;
        let priceNumber = priceText.split("$").forEach((el) => {
          isonSale += Number(el);
        });
        totalProductsValue += isonSale;
      })
      .then(() => {
        cy.log("Total price of all products is: ", totalProductsValue);
        expect(totalProductsValue).to.equal(685.6);
      });
  });
});
