describe("Test widgets on demoqa", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", () => {
      return false;
    });
  });
  it("Check functionality of accordian", () => {
    cy.visit("https://demoqa.com/accordian");
    cy.get("#section1Content > p").should(
      "include.text",
      "It has survived not only five centuries, but also the leap into electronic"
    );
    cy.get("#section2Heading").click("");
    cy.get("#section2Content > p:nth-child(1)").should(
      "include.text",
      "(The Extremes of Good and Evil)"
    );
    cy.get("#section3Heading").click({ force: true });
    cy.get("#section3Content > p").should(
      "include.text",
      "and a search for 'lorem ipsum' will uncover many web sites still in their"
    );
  });
  it("Check if autocomplete works", () => {
    cy.visit("https://demoqa.com/auto-complete");
    cy.get("#autoCompleteMultipleInput").type("gree{enter}");
    cy.get("#autoCompleteMultipleContainer>div>div>div>div")
      .first()
      .should("have.text", "Green");
    cy.get("#autoCompleteSingleInput").type("bl{enter}");
    cy.get("#autoCompleteSingleContainer>div>div>div")
      .first()
      .should("have.text", "Blue");
  });
  it("Enter and validate date 17.10.2022 and time 18:30", () => {
    cy.visit("https://demoqa.com/date-picker");
    cy.get("#datePickerMonthYearInput")
      .clear()
      .type("10/17/22{enter}")
      .should("have.value", "10/17/2022");
    cy.get("#dateAndTimePickerInput")
      .clear()
      .type("10/17/22 18:30{enter}")
      .should("have.value", "October 17, 2022 6:30 PM");
  });
  it("Interact with slider and change value to 33", () => {
    cy.visit("https://demoqa.com/slider");
    cy.get("#sliderContainer > div.col-9 > span > input")
      .invoke("val", 33)
      .trigger("input"); // or trigger change
    cy.get("#sliderContainer > div.col-9 > span > input").should(
      "have.value",
      33
    );
  });
  it("Check if hover over elements diplays message", () => {
    cy.visit("https://demoqa.com/tool-tips");
    cy.get(".tooltip-inner").should("not.exist");
    cy.get("#toolTipButton").trigger("mouseover");
    cy.get(".tooltip-inner").should("have.text", "You hovered over the Button");
  });
  it("Selecting from option list", () => {
    cy.visit("https://demoqa.com/select-menu");
    cy.get("#react-select-2-input").type("A root option{enter}", {
      force: true,
    });
    cy.get(
      "#withOptGroup > div > div.css-1hwfws3 > div.css-1uccc91-singleValue"
    ).should("have.text", "A root option");
    cy.get("#oldSelectMenu").select("Aqua").should("have.value", "10");
    cy.get("#cars")
      .select(["Volvo", "Opel", "Audi"])
      .invoke("val")
      .should("deep.equal", ["volvo", "opel", "audi"]);
  });
});
