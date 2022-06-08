///<reference types="cypress"/>
describe(
  "Verify autocomplete dropdown list via webdriveruni",
  {
    baseUrl: "https://webdriveruniversity.com/",
  },
  () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("Select specific product via autocomplete list", () => {
      cy.get("#autocomplete-textfield")
        .invoke("attr", "target", "_self")
        .click({ force: true });
      cy.get("#myInput").type("A");
      cy.get("#myInputautocomplete-list > *")
        .each(($el, index, $list) => {
          const prod = $el.text();
          const productToSelect = "Avacado";
          if (prod === productToSelect) {
            $el.trigger("click");
            cy.get("#submit-button").click();
            cy.url().should("include", productToSelect);
          }
        })
        .then((el) => {
          console.log(el);
          cy.get("#myInput").type("G");
          cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = "Grapes";
            if (prod === productToSelect) {
              $el.trigger("click");
              cy.get("#submit-button").click();
              cy.url().should("include", productToSelect);
            }
          });
        });
    });
  }
);
