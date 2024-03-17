const selectors = require("../../fixtures/selectors");
const tests = require("../../fixtures/seats");

beforeEach(() => {
  cy.visit("/");
});



it("book a vip place", () => {
  cy.get(selectors.pageNav).click();
  cy.get(selectors.movie).first().contains("12:00").click();
  cy.get(`${selectors.child2}(5) > ${selectors.vip}`).click();
  cy.get(selectors.acceptinButton).click();
    cy.contains(selectors.messageAboutSelectedTickets).should("be.visible");
});
