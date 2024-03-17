const login = require("../../fixtures/login");
const selectors = require("../../fixtures/selectors");
const valid = login.valid;

beforeEach(() => {
  cy.visit("/admin/");
});


it("header check", () => {
  cy.visit("/");
  cy.get(selectors.pageNav).click();
  cy.get(selectors.movie).first().contains("12:00").click();
  cy.contains("Зверополис").should("be.visible");
  
});
