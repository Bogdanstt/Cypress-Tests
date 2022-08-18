describe("Check elements in iframes", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", () => {
      return false;
    });
  });
  it("Assert text within body element of an simple iframe", () => {
    const getIframeDocument = () => {
      return (
        cy
          .get("#frame1")
          // Cypress yields jQuery element, which has the real
          // DOM element under property "0".
          // From the real DOM iframe element we can get
          // the "document" element, it is stored in "contentDocument" property
          // Cypress "its" command can access deep properties using dot notation
          .its("0.contentDocument")
          .should("exist")
      );
    };
    const getIframeBody = () => {
      // get the document
      return (
        getIframeDocument()
          // automatically retries until body is loaded
          .its("body")
          .should("not.be.undefined")
          // wraps "body" DOM element to allow
          // chaining more Cypress commands, like ".find(...)"
          .then(cy.wrap)
      );
    };
    cy.visit("https://demoqa.com/frames");
    getIframeBody()
      .find("#sampleHeading")
      .should("have.text", "This is a sample page");
  });
  it("Intercept iframes and check if body exists", () => {
    cy.intercept("GET", "https://demoqa.com/sample").as("iframe");
    cy.visit("https://demoqa.com/frames");
    cy.wait("@iframe").its("response.body").should("exist");
  });
});
