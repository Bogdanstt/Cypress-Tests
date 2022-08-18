describe("Alerts, frames, and windows", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/browser-windows");
    cy.on("uncaught:exception", () => {
      return false;
    });
  });
  it("Check new tab and new window", () => {
    cy.window().then((win) => {
      cy.stub(win, "open").as("open");
    });
    cy.get("#tabButton").click("");
    cy.get("@open").should("have.been.calledOnceWithExactly", "/sample");
    cy.get("#windowButton").click();
    cy.get("@open").should("have.been.calledTwice");
  });
  it("Open new window messsage", () => {
    cy.window().then((win) => {
      cy.stub(win, "open")
        .callsFake((url) => {
          return win.open.wrappedMethod.call(win, url, "_self");
        })
        .as("open");
    });
    cy.get("#messageWindowButton").click();
    cy.get("body").contains("Knowledge increases by sharing but not by saving");
  });
});
