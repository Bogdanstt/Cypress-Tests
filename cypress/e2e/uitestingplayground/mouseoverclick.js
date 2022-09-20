describe("Click on a link that changes all attributes on mouseover", () => {
  it("Click on link twice and confirm number of clicks", () => {
    cy.visit("http://uitestingplayground.com/mouseover");
    cy.get("a").contains("Click me").click();
    cy.log(
      "because after the first click the element will be detached from DOM, it cannot be clicked the second time so we need to query the element again"
    );
    cy.get("a").contains("Click me").click();

    cy.get("#clickCount").should("have.text", "2");
  });
});
