///<reference types="cypress"/>

describe("Update Request", () => {
  it("Update an existing post via /post api", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:3000/posts/2",
      body: {
        title: "Where is your plane?",
        author: "Johny",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
