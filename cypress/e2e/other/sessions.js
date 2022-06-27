///<reference types="cypress-xpath" />
describe("Test sessions  via Automation Test Store", function () {
  beforeEach(() => {
    const name = "webdriveruni";
    const password = Cypress.env("password");
    cy.session(
      [name, password],
      () => {
        cy.visit("https://automationteststore.com/index.php?rt=account/login");
        cy.get("#loginFrm_loginname").type(name);
        cy.get("#loginFrm_password").type(password);
        cy.get("#loginFrm > fieldset > .btn").click();
      },
      {
        validate() {
          cy.visit(
            "https://automationteststore.com/index.php?rt=account/account"
          );
          cy.url().should("include", "/index.php?rt=account/account");
        },
      }
    );
  });
  it("Should be able to record sessions for test1 ", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("https://automationteststore.com/");
    cy.get(
      "#block_frame_latest_1770 > .thumbnails > :nth-child(2) > .thumbnail > .pricetag > .productcart"
    ).click();
    cy.get(
      "#block_frame_latest_1770 > .thumbnails > :nth-child(3) > .thumbnail > .pricetag > .productcart > .fa"
    ).click();
  });
  it("Should be able to record sessions for this test2 ", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("https://automationteststore.com/");
    cy.get(
      "#block_frame_latest_1770 > .thumbnails > :nth-child(2) > .thumbnail > .pricetag > .productcart"
    ).click();
    cy.get(
      "#block_frame_latest_1770 > .thumbnails > :nth-child(3) > .thumbnail > .pricetag > .productcart > .fa"
    ).click();
    /* ==== End Cypress Studio ==== */
  });
  it("Test3", () => {
    cy.visit("https://automationteststore.com/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get(
      "#block_frame_latest_1770 > .thumbnails > :nth-child(3) > .thumbnail > .pricetag > .productcart > .fa"
    ).click();
    cy.get(
      "#block_frame_bestsellers_1771 > .thumbnails > :nth-child(3) > .thumbnail > .pricetag > .productcart > .fa"
    ).click();
    cy.get(".cart").click();
    cy.get(":nth-child(1) > .active").click();
    cy.get(
      "#block_frame_special_1772 > .thumbnails > :nth-child(2) > .thumbnail > .pricetag > .productcart > .fa"
    ).click();
    cy.get(".cart").click();
    cy.get(".col-md-6 > .btn-default").click();
    cy.get(".nav-pills > :nth-child(1) > .active").click();
    /* ==== End Cypress Studio ==== */
  });
});
