///<reference types="cypress"/>

let randomTitle =
  Math.random().toString(36).substring(2) +
  Math.random().toString(36).substring(2);

describe("Post Request", () => {
  it("Create new post via /post api", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
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
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then((response) => {
      const lastPost = response.body[response.body.length - 1];
      console.log(lastPost);
      expect(lastPost.title).to.eq('at nam consequatur ea labore ea harum');
    });
  });
});
