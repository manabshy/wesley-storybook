import { getGreeting } from '../support/app.po';

describe('find-my-fc', () => {
  // beforeEach(() => cy.visit('/'));

  describe('New Customer segment checks', () => {
    it(`Given I'm on customer select page And I'm a new customer`, () => {
      cy.visit('/');
      // Custom command example, see `../support/commands.ts` file
      // cy.login('my-email@something.com', 'myPassword');

      // Function helper example, see `../support/app.po.ts` file
      // getGreeting().contains('Welcome to find-my-fc!');
    });

    it(`When I select New Customer option and click Continue`, () => {
      cy.get('[data-test=lblNew]').click();
      cy.get('[data-test=btnContinue]').click();
    });

    it(`Then I'm taken to the Profession Select page`, () => {
      cy.url().should('include', '/#/profession-type');
    });

    it(`When I select Hospital option and click Continue`, () => {
      cy.get('[data-test=lblHospital]').click();
      cy.get('[data-test=btnContinue]').click();
    });

    it(`Then I'm taken to the Postcode page`, () => {
      cy.url().should('include', '/#/postcode');
    });

    it(`And I can enter my Home postcode`, () => {
      cy.get('#postcodeLabel').contains('home');
    });

    it(`When I go back and select GP Practice option and click Continue`, () => {
      cy.get('[data-test=lnkBack]').click();
      cy.get('[data-test=lblGPPractice]').click();
      cy.get('[data-test=btnContinue]').click();
    });

    it(`Then I'm taken to the Postcode page And I can enter my Home postcode`, () => {
      cy.url().should('include', '/#/postcode');
      cy.get('#postcodeLabel').contains('home');
    });

    it(`When I go back and select Legal option and click Continue`, () => {
      cy.get('[data-test=lnkBack]').click();
      cy.get('[data-test=lblLegal]').click();
      cy.get('[data-test=btnContinue]').click();
    });

    it(`Then I'm taken to the Postcode page And I can enter my Home postcode`, () => {
      cy.url().should('include', '/#/postcode');
      cy.get('#postcodeLabel').contains('home');
    });

    it(`When I go back and select Other option and click Continue`, () => {
      cy.get('[data-test=lnkBack]').click();
      cy.get('[data-test=lblOther]').click();
      cy.get('[data-test=btnContinue]').click();
    });

    it(`Then I'm taken to the Postcode page And I can enter my Home postcode`, () => {
      cy.url().should('include', '/#/postcode');
      cy.get('#postcodeLabel').contains('home');
    });

    it(`When I go back and select Education option and click Continue`, () => {
      cy.get('[data-test=lnkBack]').click();
      cy.get('[data-test=lblEducation]').click();
      cy.get('[data-test=btnContinue]').click();
    });

    it(`Then I'm taken to the Postcode page And I can enter my Work postcode`, () => {
      cy.url().should('include', '/#/postcode');
      cy.get('#postcodeLabel').contains('work');
    });

    it(`When I go back and select Dental option and click Continue`, () => {
      cy.get('[data-test=lnkBack]').click();
      cy.get('[data-test=lblDental]').click();
      cy.get('[data-test=btnContinue]').click();
    });

    it(`Then I'm taken to the Postcode page And I can enter my Work postcode`, () => {
      cy.url().should('include', '/#/postcode');
      cy.get('#postcodeLabel').contains('work');
    });
  });

  describe('Existing Customer', () => {
    it(`Given I'm on customer select page And I'm an existing customer`, () => {
      cy.visit('/');

      cy.get('[data-test=lblExisting]').click();
      cy.get('[data-test=btnContinue]').click();
      // Custom command example, see `../support/commands.ts` file
      // cy.login('my-email@something.com', 'myPassword');

      // Function helper example, see `../support/app.po.ts` file
      // getGreeting().contains('Welcome to find-my-fc!');
    });
  });
});
