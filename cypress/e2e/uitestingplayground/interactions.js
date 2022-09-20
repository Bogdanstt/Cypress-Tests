import { recurse } from "cypress-recurse";

describe("Interact and verify elements", () => {
  it("Check if a button can be clicked", () => {
    cy.visit("http://uitestingplayground.com/click");
    cy.get("#badButton")
      .should("have.class", "btn btn-primary")
      .click()
      .should("have.class", "btn btn-success");
  });
  it("Check if button changes text after input text", () => {
    cy.visit("http://uitestingplayground.com/textinput");
    cy.get("#newButtonName").type("Bogdan");
    cy.get("#updatingButton").should("have.text", "Bogdan");
  });
  it("Scroll the button into view then click it", () => {
    cy.visit("http://uitestingplayground.com/scrollbars");
    cy.get("#hidingButton").scrollIntoView().click("").should("have.focus");
  });
  it("Verify value in a dynamic table", () => {
    cy.visit("http://uitestingplayground.com/dynamictable");
    cy.get("span")
      .contains("Chrome")
      .siblings()
      .contains("%")
      .then((proc) => {
        cy.get("p.bg-warning").should("include.text", proc.text());
      });
  });
  it("Find element with space before and after text", () => {
    cy.visit("http://uitestingplayground.com/verifytext");
    cy.get(".bg-primary > .badge-secondary").should("include.text", "Welcome");
  });
  it.only("Start and stop progress bar (start at 25% and stop close to 75%)", () => {
    cy.visit("http://uitestingplayground.com/progressbar");
    cy.get("#startButton").click();
    let value;
    const checkAndReload = () => {
      cy.get("#progressBar", { log: false }).then((el) => {
        value = parseInt(el.attr("aria-valuenow"));
        if (value === 75) {
          cy.get("#stopButton").click();
          cy.get("#result").then((res) => {
            let txt = res.text();
            let numb = parseInt(txt.match(/\d/g)[0]);
            expect(numb).to.be.lessThan(5);
          });
        } else {
          cy.wait(50, { log: false });
          checkAndReload();
        }
      });
    };
    checkAndReload();
  });
});
