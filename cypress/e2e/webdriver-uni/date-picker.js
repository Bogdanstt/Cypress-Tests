/// <reference types="Cypress" />

import { isInteger, isNumber } from "lodash";

describe("Test datepicker via webdriveruni", () => {
  it("Select date from the datepicker", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    cy.get("#datepicker").click();
    let date = new Date();
    date.setDate(date.getDate() + 71);
    let futureYear = date.getFullYear();
    let futureMonth = date.toLocaleString("default", { month: "long" });
    let futureDay = date.getDate();
    cy.log(futureDay + futureMonth + futureYear);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currDate) => {
          if (!currDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currDate) => {
              if (!currDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
                selectMonthAndYear();
              }
            });
        });
    }

    function selectFutureDay() {
      cy.get("[class=day]").contains(futureDay).click();
    }
    selectMonthAndYear();
    selectFutureDay();
  });
});
