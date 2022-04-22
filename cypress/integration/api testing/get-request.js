///<reference types="cypress"/>
describe("Get Request", () => {
  let result;
  it("Validate status code of the /post api", () => {
    result = cy
      .request({
        url: "http://localhost:3000/posts",
      })
      .its("status")
      .should("eq", 200);
  });
  it("Validate /post api contains the correct keys and values", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = response.body;
      expect(body[0]).has.property("title", "json-server");
      expect(body[1]).property("author").eq("ngrf5");
      body.forEach((item) => {
        expect(item).to.have.keys("id", "title", "author");
      });
    });
  });
});
