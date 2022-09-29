describe("Interact with buttons that are not visible", () => {
  beforeEach(() => {
    cy.visit("http://uitestingplayground.com/visibility");
    cy.get("#hideButton").click("");
  });
  it("Check if removed button exists", () => {
    cy.get("removedButton").should("not.exist");
  });
  it("Check if button with  zero height or width exists, its visible and click it", () => {
    // element with  zero height or width
    cy.get("#zeroWidthButton")
      .click({ force: true }) // use force to click it
      .should("exist")
      .and("not.be.visible");
  });
  it("Click on overlapped button", () => {
    cy.get("#overlappedButton").click({ force: true });
  });
  it("Click on  button with max transparency", () => {
    cy.get("#transparentButton").should("not.be.visible").click(); // can be clicked without force:true
  });
  it("Click on  button that is hidden", () => {
    cy.get("#invisibleButton").should("not.be.visible").click({ force: true }); // can't be clicked without force:true
  });
  it("Click on  button that has diplay:none", () => {
    cy.get("#notdisplayedButton")
      .should("not.be.visible")
      .invoke("removeAttr", "style", "display")
      .click(); // or could be clicked with force:true
  });
  it("Click on  button that is offscreen", () => {
    cy.get("#offscreenButton").should("be.visible").click({ force: true }); //can be clicked with force:true only
  });
});
