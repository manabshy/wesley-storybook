export const backToInvestmentOptionsButton = () =>
  cy.get('[data-test=lnkBackToInvestmentOptions]');
export const backToYourInvestmentButton = () =>
  cy.get('[data-test=lnkBackToYourInvestment]');
export const backToPersonalDetailsButton = () =>
  cy.get('[data-test=lnkBackToPersonalDetails]');
export const backToDDButton = () => cy.get('[data-test=lnkBackToDD]');
export const confirmButton = () => cy.get('[data-test=btnConfirm]');

export const authoriseOption = () => cy.get('[data-test=lblAuthorise]');
export const declarationOption = () => cy.get('[data-test=lblDeclaration]');

export const lumpSumAmountText = () => cy.get('[data-test=pLumpSumAmount]');
export const monthlyAmountText = () => cy.get('[data-test=pMonthlyAmount]');
export const totalAmountText = () => cy.get('[data-test=pTotalAmount]');
