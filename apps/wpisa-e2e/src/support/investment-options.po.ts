export const lumpSumOption = () => cy.get('[data-test=lblLumpSum]');
export const monthlyAndLumpSumOption = () =>
  cy.get('[data-test=lblMonthlyAndLumpSum]');
export const monthlyOption = () => cy.get('[data-test=lblMonthly]');

export const lumpSumOnlyAmountInput = () => cy.get('[data-test=txtAmount]');

export const monthlyOnlyAmountInput = () => cy.get('[data-test=txtAmount]');

export const combinedLumpSumAmountInput = () =>
  cy.get('[data-test=txtLumpSumAmount]');
export const combinedMonthlyAmountInput = () =>
  cy.get('[data-test=txtMonthlyAmount]');

export const bankNameInput = () => cy.get('[data-test=txtBankName]');
export const accountHolderFullNameInput = () =>
  cy.get('[data-test=txtAccountHolderFullName]');
export const accountNumberInput = () => cy.get('[data-test=txtAccountNumber]');
export const sortCode1Input = () => cy.get('[data-test=txtSortCode1]');
export const sortCode2Input = () => cy.get('[data-test=txtSortCode2]');
export const sortCode3Input = () => cy.get('[data-test=txtSortCode3]');
