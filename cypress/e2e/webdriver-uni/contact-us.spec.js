import Homepage_PO from "../../support/pageObject/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObject/webdriver-uni/Contact_Us_PO";

///<reference types="cypress"/>
describe("test Contact us form via WebdriverUni", function () {
  const homepage_PO = new Homepage_PO();
  const contact_Us_PO = new Contact_Us_PO();
  before(() => {
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });
  beforeEach(() => {
    // cy.visit(Cypress.env("webdriveruni_homepage"));
    homepage_PO.visitHomepage();
    homepage_PO.clickOn_ContactUs_Button();
  });

  it("Should be able to submit a succesful submission via the contacts us form", () => {
    //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.visit("https://webdriveruniversity.com");
    // cy.get("#contact-us")
    //   .invoke("attr", "target", "_self") // or invoke("removeAttr", "_taget")
    //   .click({ force: true });
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    // cy.get("#contact-us").click({ force: true });
    // cy.get('[name="first_name"]').type(this.data.first_name);
    // cy.get('[name="last_name"]').type(this.data.last_name);
    // cy.get('[name="email"]').type(this.data.email);
    // cy.get("textarea.feedback-input").type("Hi there");
    // cy.get('[type="submit"]').click();
    // cy.xpath("//h1[normalize-space()='Thank You for your Message!']").should(
    //   "have.text",
    //   "Thank You for your Message!"
    // );
    // cy.webdriverUni_ContactForm_Submission(
    //   Cypress.env("first_name"),
    //   Cypress.env("last_name"),
    //   this.data.email,
    //   "Hi there",
    //   "h1",
    //   "Thank You for your Message!"
    // );
    contact_Us_PO.contactForm_Submission(
      this.data.first_name,
      this.data.last_name,
      this.data.email,
      "Hi there",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a succesful submission via the contacts us form as all fields are required", () => {
    // cy.visit("https://webdriveruniversity.com");
    // cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    // cy.get('[name="first_name"]').type("Snd");
    // cy.get('[name="last_name"]').type("Bgd");
    // // cy.get('[name="email"]').type("sandubogdan@google.com");
    // cy.get("textarea.feedback-input").type("Hi there");
    // cy.get('[type="submit"]').click();
    // cy.get("body").contains("Error: all fields");
    // cy.webdriverUni_ContactForm_Submission(
    //   this.data.first_name,
    //   this.data.last_name,
    //   " ", // this.data.email,   ------ ommit the email filed
    //   "Hi there",
    //   "body",
    //   "Error: Invalid email address"
    // );
    contact_Us_PO.contactForm_Submission(
      this.data.first_name,
      this.data.last_name,
      this.data.email,
      "Hi there",
      "h1",
      "Thank You for your Message!"
    );
  });
});
