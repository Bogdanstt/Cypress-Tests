///<reference types="cypress"/>

let randomTitle =
  Math.random().toString(36).substring(2) +
  Math.random().toString(36).substring(2);
console.log(randomTitle);
describe("Post Request", () => {
  it("Create new post via /post api", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts/",
      body: {
        title: randomTitle,
        author: "bog",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
  it("Validate title of latest post", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
    }).then((response) => {
      const lastPost = response.body[response.body.length - 1];
      expect(lastPost.title).to.eq(randomTitle);
    });
  });
});
