describe("Overlapped elements", () => {
  it("Enter text into an input filed coveered by another element", () => {
    cy.visit("http://uitestingplayground.com/overlapped");
    cy.get("#id").type("2");
    cy.get("body > section > div > div > div:nth-child(2)").invoke(
      "removeAttr",
      "style"
    );
    cy.get("#name")
      .scrollIntoView()
      .type("asd", { force: true })
      .should("have.value", "asd");
    cy.get("h3").click();
    cy.get("#subject")
      .scrollIntoView()
      .type("mgd", { force: true })
      .should("have.value", "mgd"); //assertion only works with "have.value", not "have.text"
  });
});
