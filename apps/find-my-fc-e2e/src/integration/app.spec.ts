import {
  backButton,
  continueButton,
  existingCustomerOption,
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
import {
  customerReferenceLink,
  emailInput,
  postcodeInput,
  dobDayInput,
  dobMonthInput,
  dobYearInput,
} from '../support/your-details.po';
import { customerReferenceInput } from '../support/customer-reference.po';

describe('find-my-fc', () => {
  // beforeEach(() => cy.visit('/'));

  describe('New Customer segment checks', () => {
    it(`Given I'm on customer select page And I'm a new customer`, () => {
      cy.visit('/');
    });

    it(`When I select New Customer option and click Continue`, () => {
      newCustomerOption().click();
      continueButton().click();
    });

    it(`Then I'm taken to the Profession Select page`, () => {
      cy.url().should('include', '/#/profession-type');
    });

    it(`When I select Hospital option and click Continue`, () => {
      hospitalOption().click();
      continueButton().click();
    });

    it(`Then I'm taken to the Postcode page`, () => {
      cy.url().should('include', '/#/postcode');
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
      cy.url().should('include', '/#/postcode');
      postcodeLabel().contains('home');
    });

    it(`When I go back and select Legal option and click Continue`, () => {
      backButton().click();
      legalOption().click();
      continueButton().click();
    });

    it(`Then I'm taken to the Postcode page And I can enter my Home postcode`, () => {
      cy.url().should('include', '/#/postcode');
      postcodeLabel().contains('home');
    });

    it(`When I go back and select Other option and click Continue`, () => {
      backButton().click();
      otherOption().click();
      continueButton().click();
    });

    it(`Then I'm taken to the Postcode page And I can enter my Home postcode`, () => {
      cy.url().should('include', '/#/postcode');
      postcodeLabel().contains('home');
    });

    it(`When I go back and select Education option and click Continue`, () => {
      backButton().click();
      educationOption().click();
      continueButton().click();
    });

    it(`Then I'm taken to the Postcode page And I can enter my Work postcode`, () => {
      cy.url().should('include', '/#/postcode');
      postcodeLabel().contains('work');
    });

    it(`When I go back and select Dental option and click Continue`, () => {
      backButton().click();
      dentalOption().click();
      continueButton().click();
    });

    it(`Then I'm taken to the Postcode page And I can enter my Work postcode`, () => {
      cy.url().should('include', '/#/postcode');
      postcodeLabel().contains('work');
    });
  });

  describe('Existing Customer using Customer reference number', () => {
    it(`Given I'm on customer select page And I'm an existing customer`, () => {
      cy.visit('/');

      existingCustomerOption().click();
      continueButton().click();
    });
    it(`When I enter my Customer Reference number`, () => {
      customerReferenceLink().click();
      customerReferenceInput().type('123123123');
      continueButton().click();
    });
  });

  describe('Existing Customer using details', () => {
    it(`Given I'm on customer select page And I'm an existing customer`, () => {
      cy.visit('/');

      existingCustomerOption().click();
      continueButton().click();
    });
    it(`When I enter my details`, () => {
      emailInput().type('test@test.com');
      postcodeInput().type('B4 6AB');
      dobDayInput().type('12');
      dobMonthInput().type('12');
      dobYearInput().type('1980');
      continueButton().click();
    });
  });
});
