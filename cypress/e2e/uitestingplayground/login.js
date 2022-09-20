describe("Login and validate", () => {
  it("Login with username:Bgd  and password:pwd", () => {
    cy.visit("http://uitestingplayground.com/sampleapp");
    cy.get("[name='UserName']").type("Bgd");
    cy.get("[name='Password']").type("pwd");
    cy.get("#login").click("");
    cy.get("#loginstatus").should("have.text", "Welcome, Bgd!");
  });
});
