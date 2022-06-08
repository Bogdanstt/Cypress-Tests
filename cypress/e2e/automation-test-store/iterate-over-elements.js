///<reference types="cypress-xpath" />
describe("Iterate over element", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();
  });
  it("Log information of all Hair care product", () => {
    cy.get(".fixed_wrapper .prdocutname").each((el, index, list) => {
      cy.log(index, " : ", el.text());
    });
  });
  it("Add specific product to basket", () => {
    // cy.get(".fixed_wrapper .prdocutname").each((el, index, list) => {
    //   if (el.text().includes("Eau Parfumee au The Vert Shampoo")) {
    //     cy.wrap(el).click();
    //     console.log(cy.wrap(el));
    //   }
    // });
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });
  it("Add another specific product to basket", () => {
    cy.selectProduct("Seaweed Conditioner");
  });
  it("Add one more product to basket", () => {
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });
});
