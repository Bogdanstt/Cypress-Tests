describe("Handle alerts", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/alerts");
    cy.on("uncaught:exception", () => {
      return false;
    });
  });
  it("Start and close alert1", () => {
    const stub = cy.stub().returns(true);
    cy.on("window:alert", stub);
    cy.get("#alertButton")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("You clicked a button");
      });
  });
  it("Start and close alert2 with 5 sec delay", () => {
    // const stub = cy.stub().returns(true);
    // cy.on("window:alert", stub);
    cy.get("#timerAlertButton").click();
    cy.on("window:alert", (string) => {
      expect(string).to.equal("This alert appeared after 5 seconds");
    });
  });
  it("Accept  and assert prompt message", () => {
    // const stub = cy.stub().returns(true);
    // cy.on("window:alert", stub);
    cy.get("#confirmButton").click();
    cy.on("window:confirm", (string) => {
      return true;
    });
    cy.get("#confirmResult").should("have.text", "You selected Ok");
  });
  it("Stub window.prompt to return certain text message", () => {
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Donald Duck");
      cy.get("#promtButton").click();
      cy.get("#promptResult").contains("Donald Duck");
    });
  });
});
