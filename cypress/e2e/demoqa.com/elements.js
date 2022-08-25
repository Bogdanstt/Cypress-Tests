import { slowCypressDown } from "cypress-slow-down";
// slow down each command by the default amount
// which is 1 second
slowCypressDown(false);

describe("Test elements on demoqa", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", () => {
      return false;
    });
    cy.visit("https://demoqa.com/");
    cy.get(".category-cards").children().eq(0).click();
  });
  it("Verify functionality of textbox", () => {
    cy.get("#item-0").click();
    cy.get("#userName").type("Led Zeppelin");
    cy.get("#userEmail").type("zeppelin@email.com");
    cy.get("#currentAddress").type("Berlin, no.45, Germany");
    cy.get("#permanentAddress").type("Munchen, Prinz Albert strasse, Germany");
    cy.get("#submit").click({ force: true });
    cy.get("#name").contains("Led Zeppelin");
    cy.get("#email").contains("zeppelin@email.com");
    cy.get("p#currentAddress").contains("Berlin, no.45, Germany");
    cy.get("p#permanentAddress").contains(
      "Munchen, Prinz Albert strasse, Germany"
    );
  });
  it("Verify checkboxes functionality", () => {
    cy.get("#item-1").click();
    cy.get(".rct-collapse > .rct-icon").click();
    cy.get(
      ".rct-node-expanded > ol > :nth-child(1) > .rct-text > .rct-collapse > .rct-icon"
    ).click();
    cy.get("#tree-node-notes").check({ force: true });
    cy.get(
      "#tree-node > ol > li > ol > li:nth-child(2) > span > button > svg"
    ).click();
    cy.get(
      "#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(1) > span > button > svg"
    ).click();
    cy.get("#tree-node-angular").check({ force: true });
    cy.get("#result span").eq(1).should("have.text", "notes");
    cy.get("#result span").eq(2).should("have.text", "angular");
  });
  it("Verify radio buttons", () => {
    cy.get("#item-2").click();
    cy.get("#yesRadio").check({ force: true });
    cy.get(
      "#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > p > span"
    ).should("contain.text", "Yes");
    cy.get("#impressiveRadio").check({ force: true });
    cy.get(
      "#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > p > span"
    ).should("contain.text", "Impressive");
    cy.get("#noRadio").should("be.disabled");
    cy.get("#noRadio").check({ force: true });
    cy.get("#noRadio").should("be.checked");
  });
  it("Check and modify data within web tables", () => {
    cy.get("#item-3").click();
    cy.get("#edit-record-1").click();
    cy.get("#firstName").clear().type("Donald");
    cy.get("#lastName").clear().type("Trump");
    cy.get("#userEmail").clear().type("dt@hotmail.com");
    cy.get("#age").clear().type("74");
    cy.get("#salary").clear().type("100000");
    cy.get("#department").clear().type("FBI most wanted");
    cy.get("#submit").click();
    cy.get(":nth-child(5) > .rt-resizable-header-content").click();
    cy.get(":nth-child(3) > .rt-tr > :nth-child(5)").should(
      "have.text",
      "100000"
    );
    cy.get("#searchBox").type("Donald");
    cy.get(".rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)").should(
      "contain",
      "Donald"
    );
  });
  it("Verify clickable buttons", () => {
    cy.get("#item-4").click();
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage").should(
      "have.text",
      "You have done a double click"
    );
    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage").should(
      "have.text",
      "You have done a right click"
    );
    cy.get(".btn.btn-primary").last().click({ force: true });
    cy.get("#dynamicClickMessage").should(
      "have.text",
      "You have done a dynamic click"
    );
  });
  it("Verify links and status code", () => {
    cy.get("#item-5").click();
    cy.get("#simpleLink").should("have.attr", "href", "https://demoqa.com");
    cy.request("GET", "https://demoqa.com/created").then((resp) => {
      expect(resp.status).to.eq(201);
    });
    cy.get("#no-content").click();
    cy.get("#linkResponse b").first().should("have.text", "204");
    cy.get("#linkResponse b").last().should("have.text", "No Content");
    cy.get("#moved").click("");
    cy.get("#linkResponse b").first().should("have.text", "301");
    cy.get("#linkResponse b").last().should("have.text", "Moved Permanently");
    cy.get("#bad-request").click();
    cy.get("#linkResponse b").first().should("have.text", "400");
    cy.get("#linkResponse b").last().should("have.text", "Bad Request");
    cy.get("#invalid-url").click();
    cy.get("#linkResponse b").first().should("have.text", "404");
    cy.get("#linkResponse b").last().should("have.text", "Not Found");
  });
  it("Check if upload and download file works as intended ", () => {
    cy.get("#item-7").click();
    cy.get("#downloadButton")
      .should("have.attr", "download", "sampleFile.jpeg")
      .click();
    cy.readFile("cypress/downloads/sampleFile.jpeg", "binary", {
      timeout: 15000,
    }).should((buffer) => {
      expect(buffer.length).to.be.gte(1000);
    });
    cy.get("#uploadFile")
      .click()
      .selectFile("cypress/downloads/sampleFile.jpeg", { action: "drag-drop" });
    cy.get("#uploadedFilePath").should("include.text", "sampleFile.jpeg");
  });
  it("Dynamic properties", () => {
    cy.get("#item-8").click();
    cy.get("#enableAfter").should("be.disabled");
    cy.get("#visibleAfter").should("not.exist");
    cy.wait(5000);
    cy.get("#colorChange").should("have.class", "text-danger");
    cy.get("#visibleAfter")
      .should("be.visible")
      .and("have.text", "Visible After 5 Seconds");
  });
});
