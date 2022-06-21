describe(
  "Practice testing on qaclickcademy.com practice site",
  {
    baseUrl: "https://www.rahulshettyacademy.com/AutomationPractice",
    waitForAnimations: false,
  },
  () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("Verify that radio buttons, autocomplete, dropdown menu and checkboxes can be used", () => {
      cy.get('[for="radio1"]').children().check().should("be.checked");
      cy.get('input[value="radio2"]').check().should("be.checked");
      cy.get("label")
        .find('[value="radio3"]')
        .first()
        .check()
        .should("be.checked");
      cy.get('[placeholder="Type to Select Countries"]')
        .type("ro")
        .then(() => {
          cy.get("#ui-id-1").each((el, idx, list) => {
            cy.contains("Romania")
              .click()
              .then(() => {
                cy.get("#autocomplete").should("have.value", "Romania");
              });
          });
        });
      cy.get("#dropdown-class-example")
        .select("option3")
        .should("have.value", "option3");
      cy.get("#checkbox-example fieldset label>input")
        .check()
        .should("be.checked");
    });
    it("Verify that new tab link works", () => {
      cy.get("#opentab")
        .invoke("attr", "target", "_self")
        .click()
        .then(() => {
          cy.url().should("eq", "https://www.rahulshettyacademy.com/");
        });
    });
    it("Verify alert and confirm pop-ups", () => {
      cy.get("#name").type("Bogdan");
      cy.get("#alertbtn").click();
      cy.on("window:alert", (message) => {
        expect(message).to.equal(
          "Hello Bogdan, share this practice page and share your knowledge"
        );
      });
      cy.get("#name").type("Bogdan");
      cy.get("#confirmbtn").click();
      cy.on("window:confirm", (message) => {
        expect(message).to.equal(
          "Hello Bogdan, Are you sure you want to confirm?"
        );
        return true;
      });
    });
    it("Traverse table", () => {
      cy.get("#product td")
        .contains("Bugzilla")
        .next()
        .should("have.text", "25");
      cy.get("#product td")
        .contains("Resume")
        .siblings()
        .parentsUntil("fieldset")
        .should("have.length", 3);
    });
    it("Check visibility of input", () => {
      cy.get("legend")
        .contains("Element Displayed Example")
        .siblings("#displayed-text")
        .type("Bogdan")
        .should("be.visible")
        .and("have.value", "Bogdan");
      cy.get("#hide-textbox")
        .click()
        .then(() => {
          cy.get("#displayed-text")
            .should("not.be.visible")
            .and("have.css", "display", "none");
        });
    });
    it("Sum all the values from the Amount column and verify it ", () => {
      let totalSum = 0;
      cy.get(".tableFixHead #product td:last-child").each((el) => {
        const value = parseInt(el.text());
        totalSum += value;
      });
      cy.get(".totalAmount").then((el) => {
        let numberFromText = parseInt(el.text().match(/\d/g).join(""));
        expect(numberFromText).to.equal(totalSum);
      });
    });
    it("Hover over element", () => {
      cy.get("#mousehover")
        .trigger("mouseover")
        .then(() => {
          cy.contains("Top").click({ force: true });
          cy.location("hash").should("include", "#top");
        });
      cy.get("#mousehover")
        .trigger("mouseover")
        .siblings()
        .children()
        .contains("Reload")
        .click({ force: true });
      cy.url().should(
        "eq",
        "https://www.rahulshettyacademy.com/AutomationPractice/"
      );
    });
    it("Test iframe", () => {
      cy.get("#courses-iframe").then(($iframe) => {
        const body = $iframe.contents().find("body");
        cy.wrap(body)
          .as("iframe")
          .find('[href="https://rahulshettyacademy.com/blog/"]')
          .last()
          .click({ force: true })
          .then(($iframe2) => {
            expect($iframe2[0].innerHTML).to.include("Blog");
          });
      });
    });
  }
);
