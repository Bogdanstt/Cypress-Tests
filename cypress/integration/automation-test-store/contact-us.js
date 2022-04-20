///<reference types="cypress-xpath" />
describe("Test Contact-Us form via Automation Test Store", function () {
  before(() => {
    cy.fixture("userDetails").as("user");
  });
  it("Should be able to submit a succesful submission via the contacts us form", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(
      "#footer > footer > section.footerlinks > div > div.pull-left > div > ul > li:nth-child(5) > a"
    )
      .click()
      .then((item) => {
        cy.log(item.text());
      });
    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
    });
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type(
      "Can you provide some discount to nice consumers?"
    );
    cy.get(".col-md-6 > .btn").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
