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
      url: "http://localhost:3000/comments/",
      body: {
        body: randomCommentBody,
        postId: postId,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      id = response.body.id;
      console.log(id);
    });
  });
  it("Locate and assert the new comment", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/comments",
    }).then((response) => {
      const lastBodyText = response.body[response.body.length - 1].body;
      expect(lastBodyText).to.eq(randomCommentBody);
    });
  });
  it("Delete the last comment", () => {
    cy.request({
      method: "DELETE",
      url: `http://localhost:3000/comments/${id}`,
    });
  });
});
