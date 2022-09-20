describe("Deal with non-breaking space", () => {
  it("Find an element with &nbsp; included in text and validate its text content", () => {
    cy.visit("http://uitestingplayground.com/nbsp");
    cy.get("button")
      .contains("My Button").click()
      .should("have.text", "My\u00a0Button");
    cy.log(
      "In cy.contains we can use a simple <space> instead of <\\&nbsp;> and still find the element"
    );
    cy.log(
      "In assertion we need to use Unicode value \\u00a0 instead of \\&nbsp;. Also simple <space> doesnt not work for assertion."
    );
  });
});
