describe("Working with delays", () => {
  it("Wait for the page to load and verify url and button text", () => {
    cy.visit("http://uitestingplayground.com/home");
    cy.contains("Load Delay").click();
    cy.get("button").should("have.text", "Button Appearing After Delay");
    cy.url().should("eq", "http://uitestingplayground.com/loaddelay");
  });
  it("Wait 15 sec after ajax request and verify  response data", () => {
    cy.visit("http://uitestingplayground.com/ajax");
    cy.get("#ajaxButton").click("");
    cy.get("#content>p", { timeout: 16000 }).then((p) => {
      expect(p).to.have.text("Data loaded with AJAX get request.");
    });
    cy.request("http://uitestingplayground.com/ajaxdata").then((res) => {
      expect(res.body).to.contain("Data loaded with AJAX get request.");
    });
  });
  it("Wait 15 sec for javascript proccesing on client side, and verify display message", () => {
    cy.visit("http://uitestingplayground.com/clientdelay");
    cy.get("#ajaxButton").click();
    cy.get("#content>p", { timeout: 16000 }).should(
      "have.text",
      "Data calculated on the client side."
    );
  });

});
