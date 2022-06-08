import AutoStore_Homepage_PO from "../../support/pageObject/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_HairCare_PO from "../../support/pageObject/automation-test-store/AutoStore_HairCare_PO";
///<reference types="cypress-xpath" />
describe("Add multiple items to basket", function () {
  const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
  const autoStore_HairCare_PO = new AutoStore_HairCare_PO();

  before(() => {
    cy.fixture("product").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    autoStore_Homepage_PO.accesHomepage();
    autoStore_Homepage_PO.clickOn_HairCare_Link();
  });
  it("Add specific items to basket", () => {
    autoStore_HairCare_PO.addHairCareProductToBasket();
  });
});
