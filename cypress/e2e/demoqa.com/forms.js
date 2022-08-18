describe("Demo qa practice form", () => {
  it("Complete and verify practice form", () => {
    cy.viewport(1903, 1000);
    cy.on("uncaught:exception", () => {
      return false;
    });
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#firstName").click();
    cy.get("#firstName").type("Donald");
    cy.get("#lastName").click();
    cy.get("#lastName").type("Trump");
    cy.get("#userEmail").click();
    cy.get("#userEmail").type("dt@hotmail.com");
    cy.get(
      "#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label"
    ).click();
    cy.get(
      "#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label"
    ).click();
    cy.get("#userNumber").click();
    cy.get("#userNumber").type("0744556677");
    cy.get("#dateOfBirthInput").click().type("{selectAll}22 jun 1987{enter}");
    cy.get("#subjectsInput").type("Exam registration");
    cy.get(
      "#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(2) > label"
    ).click();
    cy.get(
      "#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(3)"
    ).click();
    cy.get("#uploadPicture").selectFile("cypress/downloads/sampleFile.jpeg");
    cy.get("#currentAddress").click();
    cy.get("#currentAddress").type("Mar-A-Lago, California, USA");

    cy.get("#submit").click({ force: true });
    cy.get("#example-modal-sizes-title-lg").should(
      "have.text",
      "Thanks for submitting the form"
    );
  });
});
