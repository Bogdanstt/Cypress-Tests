///<reference types="cypress"/>
describe("Use cy.intercept to spy or stub requests and responses", () => {
  it("Intercept a request and stub the response body", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.intercept(
      { method: "GET", path: "/posts" },
      { body: [{ projectId: "1" }, { projectId: "2" }] }
    ).as("posts");
    cy.get("table:nth-of-type(1) a[href='/posts']").click();
    cy.wait("@posts").then((int) => {
      console.log(int.response);
    });
  });
  it("Intercept the  request  and stub the request body", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.intercept({ method: "GET", path: "/posts" }, (req) => {
      req.body = "BGD";
      req.headers["x-custom-headers"] = "added by cy.intercept";
      // req.reply({ plan: "starter" });
      req.continue((res) => {
        // res.setThrottle(1000);
      });
    }).as("posts");
    cy.get("table:nth-of-type(1) a[href='/posts']").click();
    cy.wait("@posts").then((int) => {
      console.log(int);
      expect(int.request.headers).to.have.property(
        "x-custom-headers",
        "added by cy.intercept"
      );
    });
  });
  it("Intercept the  request  and modify the response", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.intercept({ method: "GET", path: "/posts" }, (req) => {
      // req.reply(201, "bgd", {"x-custom-headers" : "added by cy.intercept"});
      req.on("before:response", (res) => {
        // do something when the `before:response` event is triggered
      });
      req.continue((res) => {
        res.setThrottle(1000);
        res.setDelay(2000);
        console.log(res);
      });
    }).as("posts");
    cy.get("table:nth-of-type(1) a[href='/posts']").click();
    cy.wait("@posts").then((intercept) => {
      console.log(intercept.response);
    });
  });
});
