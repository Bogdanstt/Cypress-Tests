///<reference types="cypress"/>
describe("Handle js alert", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com");
  });
  it("Confirm js alert contains the correct text", () => {
    //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");

    cy.get("#popup-alerts")
      .invoke("attr", "target", "_self") // or invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button1").click();
    cy.on("window:alert", (string) => {
      expect(string).to.equal("I am an alert box!");
    });
  });
  it("Validate js confirm alert box works correctly when clicking ok", () => {
    cy.get("#popup-alerts")
      .invoke("attr", "target", "_self") // or invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click();
    cy.on("window:confirm", (string) => {
      return true;
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });
  it("Validate js confirm alert box works correctly when clicking cancel", () => {
    cy.get("#popup-alerts")
      .invoke("attr", "target", "_self") // or invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click();
    cy.on("window:confirm", (string) => {
      return false;
    });
    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });
  it("Validate js confirm alert box using a stub", () => {
    cy.get("#popup-alerts")
      .invoke("attr", "target", "_self") // or invoke("removeAttr", "target")
      .click({ force: true });

    const stub = cy.stub();
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
        console.log(stub.getCall(0));
      });
  });
  it("Check if cypress waits for link to apear and click it after", () => {
    cy.on("uncaught:exception", () => {
      return false;
    });
    cy.get("#popup-alerts")
      .invoke("attr", "target", "_self") // or invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button3").click();
    cy.wait(5000);
    cy.get("#button1")
      .click()
      .then(() => {
        cy.get(".modal-title").should(
          "have.text",
          "Well Done For Waiting....!!!"
        );
        cy.contains("Close").click();
      });
  });
});
