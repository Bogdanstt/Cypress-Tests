describe("Interact with hidden elements", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", () => {
      return false;
    });
    cy.visit("https://webdriveruniversity.com/Hidden-Elements/index.html");
  });
  it("Check  and change the css display:none property of hidden button and click it", () => {
    cy.get(".thumbnail")
      .first()
      .children("div")
      .should("have.css", "display", "none")
      .invoke("css", "display", "block")
      .then(() => {
        cy.get("#button1")
          .click()
          .then(() => {
            cy.get("#myModalClick").should(
              "contain",
              "Well done for successfully using the click() method!"
            );
            cy.contains("Close").click();
          });
      });
  });
  it("Check and change the visibility of button and click it", () => {
    cy.get("#visibility-hidden")
      .should("have.css", "visibility", "hidden")
      .invoke("css", "visibility", "visible")
      .find("span")
      .click();
    cy.get("#myModalJSClick")
      .find(".modal-title")
      .should("have.text", "It’s that Easy!!  Well I think it is.....");
  });
});
