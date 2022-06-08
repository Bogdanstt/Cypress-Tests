const { method } = require("cypress/types/bluebird");

describe("Hooks", () => {
  before(() => {
    cy.log("once before all tests in the block");
  });

  beforeEach(() => {
    cy.log("runs before each test in the block");
  });

  afterEach(() => {
    cy.log("runs after each test in the block");
  });
  after(() => {
    cy.log("runs once after all tests in the block");
  });

  it("Example test1", () => {
    cy.log("Example test1!");
  });
  it("Example test1", () => {
    cy.log("Example test2!");
  });
});
describe('Cypress commands', () => 
  ".and(chainers, method, value) || .and( callbackFn($item) ) "
  ".as(aliasName) "
  ".blur(options) "
  ".check(valueS, options)"
  ".children(selector, option)"
  ".clear(options)"
  ".clearCookie(name, options)" //yields null
  ".cleaCookies(options)" //yields null
  ".clearLocalStorage(keyS, options)" //yields null
  ".click(position, options)"
  ".clock(now, functionNames, options)"
  ".closest(selector, options)"

"
 )