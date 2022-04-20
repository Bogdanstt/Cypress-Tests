const accesHomepage = () => {
  cy.visit("https://automationteststore.com/");
};
const clickOn_HairCare_Link = () => {
  cy.get("a[href*='product/category&path']").contains("Hair Care").click();
};

export { accesHomepage, clickOn_HairCare_Link };
