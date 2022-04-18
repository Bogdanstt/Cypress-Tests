class AutoStore_HairCare_PO {
  addHairCareProductToBasket() {
    globalThis.data.productName.forEach((el) => {
      console.log(el);
      cy.addProductToBasket(el).then(() => {});
    });
    cy.get(".dropdown-toggle > .fa").click().debug();
  }
}
export default AutoStore_HairCare_PO;
