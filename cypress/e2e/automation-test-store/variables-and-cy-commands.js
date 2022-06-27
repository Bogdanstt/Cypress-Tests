///<reference types="cypress-xpath" />
describe("Verifying variables, cypress commands and jQuery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");

    cy.get("a[href*='product/category&path']").contains("Makeup").click();

    cy.get("h1 .maintext").then((item) => {
      cy.log(item.text());
      expect(item.text()).is.eq("Makeup");
    });
  });
  it("Validate properties of the Contact Us page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    //Cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    //JQuery aproach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((divText) => {
      const firstNameText = divText.find("#field_11").text();
      expect(firstNameText).to.contain("First name");
      //Embedded commands(Closures)
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text());
      });
    });
  });
});
