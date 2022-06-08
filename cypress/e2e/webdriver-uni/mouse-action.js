///<reference types="cypress"/>

describe(
  "Test mouse actions via webdriveruni",
  {
    baseUrl: "https://webdriveruniversity.com/",
  },
  () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("Scroll element into view", () => {
      cy.get("#actions")
        .scrollIntoView()
        .invoke("attr", "target", "_self")
        .click({ force: true });
    });
    it("I should be able to drag and drop a dragable item", () => {
      cy.get("#actions")
        .invoke("attr", "target", "_self")
        .click({ force: true });
      cy.get("#draggable").scrollIntoView().trigger("mousedown", { button: 1 });
      cy.get("#droppable").trigger("mousemove", { force: true });
    });
    it("I should be able to perform a double mouse click", () => {
      cy.get("#actions")
        .invoke("attr", "target", "_self")
        .click({ force: true });
      cy.get("#double-click").dblclick();
    });
    it("I should be able to hold down the left mouse button on a given element", () => {
      cy.get("#actions")
        .invoke("attr", "target", "_self")
        .click({ force: true });
      cy.get("#click-box")
        .trigger("mousedown", { button: 1 })
        .then(($el) => {
          expect($el).to.have.css("background-color", "rgb(0, 255, 0)");
        });
    });
    it("I should be able to hover over a specific element and click on first option in dropdown menu", () => {
      cy.get("#actions")
        .invoke("attr", "target", "_self")
        .click({ force: true });
      cy.get("#div-hover")
        .contains("Hover Over Me Third!")
        .trigger("mouseover")
        .then((el) => {
          cy.get("#div-hover > div:nth-child(3) > div > a:nth-child(2)").click({
            force: true,
          });
          cy.on("window:alert", (alertMessage) => {
            expect(alertMessage).to.equal("Well done you clicked on the link!");
          });
        });
    });
  }
);
