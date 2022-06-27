/// <reference types="Cypress" />

import { isInteger, isNumber } from "lodash";

describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("Calculate and assert the total age of all user", () => {
    let userDetails = [];
    let ageSum = 0;
    // cy.get("#thumbnail-1 td")
    //   .each((el, idx, list) => {
    //     userDetails[idx] = el.text();
    //   })
    //   .then(() => {
    //     for (let i = 0; i < userDetails.length; i++) {
    //       if (Number(userDetails[i])) {
    //         numb += Number(userDetails[i]);
    //       }
    //     }
    //   });
    cy.get("#thumbnail-1 td")
      .each((el, i, list) => {
        userDetails[i] = el.text();
        const age = Number(userDetails[i]);
        if (Cypress._.isInteger(age)) {
          //Using Lodash
          ageSum += age;
        }
      })
      .then(() => cy.log("The sum of age is: " + ageSum));
  });
  it("Calculate and assert the  age of a given use based on last name", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each((el) => {
      if (el.text().includes("Woods")) {
        expect(el.next().text()).to.equal("80");
      }
    });
   
  });
});
