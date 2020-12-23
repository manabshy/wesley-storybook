export const getGreeting = () => cy.get('h1');
export const continueButton = () => cy.get('[data-test=btnContinue]');
export const knowledgeCheckQ1YesOption = () =>
  cy.get('[data-test=lblAnswerYes]');
export const knowledgeCheckQ1NoOption = () => cy.get('[data-test=lblAnswerNo]');
export const knowledgeCheckQ2YesOption = () =>
  cy.get('[data-test=lblAnswerYes]');
export const knowledgeCheckQ2NoOption = () => cy.get('[data-test=lblAnswerNo]');
