///<reference types="cypress"/>

describe("Test  spys and stubs ", () => {
  it("Spy on a function and validate it arguments ", () => {
    const logging = {
      clg(message) {
        console.log(message);
      },
    };
    const spy = cy.spy(logging, "clg").as("spyConsole");
    const spyWith = spy.withArgs("clg").as("spyWithArgs");
    logging.clg();
    spyWith("bogdan");
    expect(spy).to.be.called;
    expect(spyWith).to.be.calledWith("bogdan");
  });
  it.only("Stub on a function and its return value ", () => {
    const logging = {
      clg(message) {
        cy.log("Hi there " + message);
        return 5;
      },
    };
    const stub = cy
      .stub(logging, "clg")
      .callsFake((args) => {
        cy.log("hello " + args);
        return 20;
      })
      .as("stubLog");
    logging.clg("bbog");
    expect(logging.clg).to.have.returned(20);
  });
});
