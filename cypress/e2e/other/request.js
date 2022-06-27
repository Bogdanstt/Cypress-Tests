///<reference types="cypress"/>
describe("Use cy.request to make API requests", () => {
  it("Get data for an user and create a file with user avatar image", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/2",
    }).then((response) => {
      const id = response.body.data.id;
      cy.request({
        url: `https://reqres.in/img/faces/${id}-image.jpg`,
        // encode the response in base64
        encoding: "base64",
      }).then((response) => {
        // save image to a .jpg file with base64 encoding option
        cy.writeFile("cypress/fixtures/immaage.jpg", response.body, "base64");
      });
    });

    //delayed request
    cy.request({
      url: "https://reqres.in/img/faces/2-image.jpg",
    }).should((response) => {
      console.log(response);
      expect(response.headers["content-type"]).to.include("image");
    });
    cy.request("https://reqres.in/api/users?delay=3").then((res) => {
      console.log(res);
    });
  });
  it("Login in autoTestStore with request only and check if customer cookie exists", () => {
    cy.request("https://automationteststore.com/index.php?rt=account/login")
      .its("body")
      .then((body) => {
        // we can use Cypress.$ to parse the string body
        // thus enabling us to query into it easily

        // Find the csrfinsance and csrftoken first and put them into variables
        const $html = Cypress.$(body);
        let csrftoken, csrfinstance;
        csrfinstance = $html.find("#loginFrm input[name=csrfinstance]").val();
        csrftoken = $html.find("#loginFrm input[name=csrftoken]").val();
        console.log(csrfinstance, csrftoken);

        cy.request({
          method: "POST",
          url: "https://automationteststore.com/index.php?rt=account/login",
          form: true,
          body: {
            csrftoken: csrftoken,
            csrfinstance: csrfinstance,
            loginname: "webdriveruni",
            password: "webdriveruni",
          },
        }).then((el) => {
          console.log(el);
        });
      });

    cy.visit("https://automationteststore.com/");
    cy.getCookie("customer").should("exist");
  });
  it("Login with request object", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/login",
      body: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    }).then((res) => {
      console.log(res);
      expect(res.body).to.have.property("token");
    });
  });
});
