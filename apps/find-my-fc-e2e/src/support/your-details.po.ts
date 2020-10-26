export const alertBox = () => cy.get('.wes-alert.wes-alert-danger');

export const customerReferenceLink = () =>
  cy.get('[data-test=lnkCustomerReference]');

export const emailInput = () => cy.get('[data-test=txtPersonalEmail]');
export const postcodeInput = () => cy.get('[data-test=txtPostcode]');
export const dobDayInput = () => cy.get('[data-test=txtDoBDay]');
export const dobMonthInput = () => cy.get('[data-test=txtDoBMonth]');
export const dobYearInput = () => cy.get('[data-test=txtDoBYear]');

export const backButton = () => cy.get('[data-test=lnkBack]');
export const continueButton = () => cy.get('[data-test=btnContinue]');
