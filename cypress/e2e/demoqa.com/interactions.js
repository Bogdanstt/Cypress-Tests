describe("Check interactions between dom elements", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", () => {
      return false;
    });
    // cy.viewport(1920, 1080);
  });
  it("Drag and drop element into a certain position", () => {
    cy.visit("https://demoqa.com/sortable");
    function movePiece(number, x, y) {
      cy.get("#demo-tabpane-list > div>div")
        .contains(`${number}`)
        .trigger("mousedown", { which: 1, force: true })
        .trigger("mousemove", { pageX: x, pageY: y, force: true })
        .trigger("mouseup", { force: true });
    }
    //sortable
    movePiece("Two", 1, 400);
    cy.get("#demo-tabpane-list > div >div").eq(0).should("have.text", "Two");

    //grid;

    cy.get("#demo-tab-grid").click("");
    cy.get("#demo-tabpane-grid > div > div ")
      .contains("Six")
      .trigger("mousedown", { which: 1, force: true })
      .trigger("mousemove", { pageX: 300, pageY: 600, force: true })
      .trigger("mouseup", { force: true });
    cy.get("#demo-tabpane-grid > div > div > div")
      .eq(6)
      .should("have.text", "Six");
  });
  it("Verify selectable elements", () => {
    cy.visit("https://demoqa.com/selectable");
    cy.get("#verticalListContainer > li")
      .click({ multiple: true })
      .should("have.class", "active");
    cy.get("#demo-tab-grid").click();
    cy.get("#gridContainer>div>li")
      .click({ multiple: true })
      .should("have.class", "active");
  });
  it("Resizeable boxes", () => {
    cy.visit("https://demoqa.com/resizable");
    cy.get("#resizableBoxWithRestriction > span")
      .trigger("mousedown", { which: 1, force: true })
      .trigger("mousemove", { clientX: 1500, clientY: 1500 })
      .trigger("mouseup", { force: true });
    cy.get("#resizableBoxWithRestriction")
      .should("have.css", "width", "500px")
      .and("have.css", "height", "300px");
    cy.get("#resizable")
      .invoke("attr", "style", "width:300px")
      .invoke("attr", "style", "height:300px")
      .should("have.attr", "style", "height:300px");
  });
  it.only("Drag and drop items", () => {
    function moveItem(selector, x, y) {
      cy.get(`${selector}`)
        .trigger("mousedown", { which: 1, force: true })
        .trigger("mousemove", { pageX: x, pageY: y, force: true })
        .trigger("mouseup", { force: true });
    }
    cy.visit("https://demoqa.com/droppable");
    moveItem("#draggable", 580, 450);
    cy.get("#droppable > p").first().should("have.text", "Dropped!");
    cy.get("#droppable ").should("have.class", "ui-state-highlight");

    cy.get("#droppableExample-tab-accept").click("");
    moveItem("#notAcceptable", 580, 450);

    cy.get("#droppable > p").eq(1).should("not.have.text", "Dropped!");
    moveItem("#acceptable", 580, 450);
    cy.get("#droppable > p").eq(1).should("have.text", "Dropped!");

    cy.get("#droppableExample-tab-preventPropogation").click("");
    moveItem("#dragBox", 580, 530);
    cy.get("#notGreedyDropBox > p").should("have.text", "Dropped!");

    moveItem("#dragBox", 580, 830);
    cy.get("#greedyDropBoxInner").should("have.text", "Dropped!");
    cy.get("#greedyDropBox > p").should("have.text", "Outer droppable");

    cy.get("#droppableExample-tab-revertable").click("");
    moveItem("#revertable", 580, 830);
    moveItem("#notRevertable", 580, 830);
  });
});
