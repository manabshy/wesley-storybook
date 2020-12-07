import {
  backButton,
  continueButton,
  newCustomerOption,
} from '../support/customer-select.po';
import {
  hospitalOption,
  gpOption,
  educationOption,
  otherOption,
  legalOption,
  dentalOption,
} from '../support/profession-select.po';
import { postcodeLabel } from '../support/postcode.po';
import { routesNames } from '../support/routes-names.const';

describe('find-my-fc', () => {
  describe('New Customer segment checks', () => {
    it(`Given I'm on customer select page And I'm a new customer`, () => {
      cy.visit('/');
    });

    it(`When I select New Customer option and click Continue`, () => {
      newCustomerOption().click();
      continueButton().click();
    });

    it(`Then I'm taken to the Profession Select page`, () => {
      cy.url().should('include', `/#/${routesNames.PROFESSION_SELECT}`);
    });

    it(`When I select Hospital option and click Continue`, () => {
      hospitalOption().click();
      cy.wait(300);
      continueButton().click();
    });

    it(`Then I'm taken to the Postcode page`, () => {
      cy.url().should('include', `/#/${routesNames.POSTCODE}`);
    });

    it(`And I can enter my Home postcode`, () => {
      postcodeLabel().contains('home');
    });

    it(`When I go back and select GP Practice option and click Continue`, () => {
      backButton().click();
      gpOption().click();
      continueButton().click();
    });

    it(`Then I'm taken to the Postcode page And I can enter my Home postcode`, () => {
      cy.url().should('include', `/#/${routesNames.POSTCODE}`);
      postcodeLabel().contains('home');
    });

    it(`When I go back and select Legal option and click Continue`, () => {
      backButton().click();
      legalOption().click();
      continueButton().click();
    });

    it(`Then I'm taken to the Postcode page And I can enter my Home postcode`, () => {
      cy.url().should('include', `/#/${routesNames.POSTCODE}`);
      postcodeLabel().contains('home');
    });

    it(`When I go back and select Other option and click Continue`, () => {
      backButton().click();
      otherOption().click();
      continueButton().click();
    });

    it(`Then I'm taken to the Postcode page And I can enter my Home postcode`, () => {
      cy.url().should('include', `/#/${routesNames.POSTCODE}`);
      postcodeLabel().contains('home');
    });

    it(`When I go back and select Education option and click Continue`, () => {
      backButton().click();
      educationOption().click();
      continueButton().click();
    });

    it(`Then I'm taken to the Postcode page And I can enter my Work postcode`, () => {
      cy.url().should('include', `/#/${routesNames.POSTCODE}`);
      postcodeLabel().contains('work');
    });

    it(`When I go back and select Dental option and click Continue`, () => {
      backButton().click();
      dentalOption().click();
      continueButton().click();
    });

    it(`Then I'm taken to the Postcode page And I can enter my Work postcode`, () => {
      cy.url().should('include', `/#/${routesNames.POSTCODE}`);
      postcodeLabel().contains('work');
    });
  });
});
