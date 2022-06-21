///<reference types="cypress"/>

describe("Delete Request", () => {
  it("Delete a post via /posts api", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/2",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
