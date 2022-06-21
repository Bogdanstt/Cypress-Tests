///<reference types="cypress"/>
let randomCommentBody =
  Math.random().toString(36).substring(2) +
  Math.random().toString(36).substring(2);
let postId = Math.floor(Math.random() * 10);
let id;

describe("Post, Get, Delete Request", () => {
  it("Create a new comment", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        body: randomCommentBody,
        postId: postId,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      id = response.body.id;
    });
  });
  it("Locate and assert the new comment", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then((response) => {
      const lastBodyText = response.body[response.body.length - 1].body;
      expect(lastBodyText).to.eq(
        "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
      );
    });
  });
  it("Delete the last comment", () => {
    cy.request({
      method: "DELETE",
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    });
  });
});
