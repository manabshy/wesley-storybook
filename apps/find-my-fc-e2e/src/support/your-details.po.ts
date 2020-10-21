export const alertBox = () => cy.get('.wes-alert.wes-alert-danger');

export const emailInput = () => cy.get('[data-test=txtPersonalEmail]');
export const postcodeInput = () => cy.get('[data-test=txtPostcode]');
export const dobDayInput = () => cy.get('[data-test=dobDay]');
export const dobMonthInput = () => cy.get('[data-test=dobMonth]');
export const dobYearInput = () => cy.get('[data-test=dobYear]');

export const backButton = () => cy.get('[data-test=lnkBack]');
export const continueButton = () => cy.get('[data-test=btnContinue]');
