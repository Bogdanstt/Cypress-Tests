///<reference types="cypress"/>
describe("Handling Iframe and Modals", () => {
  it("Handling webdriveruni iframe and modal", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#iframe")
      .invoke("attr", "target", "_self") // or invoke("removeAttr", "_taget")
      .click({ force: true });
    cy.get("#frame").then(($iframe) => {
      console.log($iframe.contents());
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });
    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find("#myModal").as("modal");
    cy.get("@modal").should((modalTag) => {
      const text = modalTag.text();
      expect(text).include(
        "Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras"
      );
    });
    cy.get("@modal").contains("Close").click();
  });
});
