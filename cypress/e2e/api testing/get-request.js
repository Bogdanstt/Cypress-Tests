///<reference types="cypress"/>
describe("Get Request", () => {
  let result;
  it("Validate status code of the /post api", () => {
    result = cy
      .request({
        url: "https://jsonplaceholder.typicode.com/posts",
      })
      .its("status")
      .should("eq", 200);
  });
  it("Validate /post api contains the correct keys and values", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = response.body;
    
      expect(body[0]).has.property(
        "title",
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      );
      expect(body[1]).property("userId").eq(1);
      body.forEach((item) => {
        expect(item).to.have.keys("userId", "id", "title", "body");
      });
    });
  });
});
