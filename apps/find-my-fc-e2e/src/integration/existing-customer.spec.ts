import {
  continueButton,
  existingCustomerOption,
} from '../support/customer-select.po';

import {
  customerReferenceLink,
  emailInput,
  postcodeInput,
  dobDayInput,
  dobMonthInput,
  dobYearInput,
} from '../support/your-details.po';
import { customerReferenceInput } from '../support/customer-reference.po';
import { endPoints } from '../support/end-points.const';

describe('find-my-fc', () => {
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
    });
    it(`And submit I should see my Financial Consultant `, () => {
      cy.server();
      cy.route('POST', endPoints.EXISTING_CUSTOMER, {
        id: '1231231',
      }).as('findFC');

      continueButton().focus().click();
      // cy.url().should('include', '/your-fc?id=1231231&customer=existing');
      //   cy.location('pathname').should(
      //     'eq',
      //     '/your-fc?id=1231231&customer=existing'
      //     );
      //   cy.wait('@findFC')
      //     .its('url')
      //     .should('include', '/your-fc?id=1231231&customer=existing');
    });
  });

  describe('Existing Customer using Customer Reference', () => {
    it(`Given I'm on customer select page And I'm an existing customer`, () => {
      cy.visit('/');

      existingCustomerOption().click();
      continueButton().click();
    });
    it(`When I enter my Customer Reference number`, () => {
      customerReferenceLink().click();
      customerReferenceInput().type('123456789');
    });
    it(`And submit I should see my Financial Consultant `, () => {
      cy.server();
      cy.route('GET', `${endPoints.EXISTING_CUSTOMER}?id=123456789`, {
        id: '1231231',
      }).as('findFC');

      cy.route('GET', '/your-fc?id=1231231&customer=existing').as(
        'fcPageRedirect'
      );

      continueButton().focus().click();
      //   cy.wait('@fcPageRedirect')
      //     .its('url')
      //     .should('include', '/your-fc?id=1231231&customer=existing');
      //   cy.url().should('include', '/your-fc?id=1231231&customer=existing');
    });
  });

  describe('Existing Customer using wrong Customer Reference 3 times retry', () => {
    it(`Given I'm on customer select page And I'm an existing customer`, () => {
      cy.visit('/');

      existingCustomerOption().click();
      continueButton().click();
    });
    it(`When I enter a wrong Customer Reference number`, () => {
      customerReferenceLink().click();
      customerReferenceInput().type('000000000');
    });
    it(`And submit I should see an error message`, () => {
      cy.server({ status: 404 });
      cy.route('GET', `${endPoints.EXISTING_CUSTOMER}?id=000000000`, {
        id: '1231231',
      }).as('findFC');

      continueButton().focus().click();

      cy.get('.wes-error').should('exist');
    });
    it(`When I enter a wrong Customer Reference number 2nd time`, () => {
      customerReferenceInput().clear().type('000000001');
    });
    it(`And submit I should see an error message`, () => {
      cy.server({ status: 404 });
      cy.route('GET', `${endPoints.EXISTING_CUSTOMER}?id=000000001`, {
        id: '1231231',
      }).as('findFC');

      continueButton().focus().click();

      cy.get('.wes-error').should('exist');
    });
    it(`When I enter a wrong Customer Reference number 3rd time`, () => {
      customerReferenceInput().clear().type('000000002');
    });
    it(`And submit I should see an error page`, () => {
      cy.server({ status: 404 });
      cy.route('GET', `${endPoints.EXISTING_CUSTOMER}?id=000000002`, {
        id: '1231231',
      }).as('findFC');

      continueButton().focus().click();

      cy.url().should('include', 'customer-error');
    });
    it(`And I can start the search as new customer to select my profession`, () => {
      continueButton().click();
      cy.url().should('include', 'profession');
    });
  });

  describe('Existing Customer using wrong Customer Details 3 times retry', () => {
    it(`Given I'm on customer select page And I'm an existing customer`, () => {
      cy.visit('/');

      existingCustomerOption().click();
      continueButton().click();
    });
    it(`When I enter  wrong Customer details`, () => {
      emailInput().type('test@test.com');
      postcodeInput().type('B4 6AB');
      dobDayInput().type('12');
      dobMonthInput().type('12');
      dobYearInput().type('1980');
    });
    it(`And submit I should see an error message`, () => {
      cy.server({ status: 404, force404: true });
      cy.route({
        method: 'POST',
        url: `**${endPoints.EXISTING_CUSTOMER}`,
        response: {},
      });

      continueButton().focus().click();

      cy.get('.wes-alert').should('exist');
    });
    it(`When I enter a wrong details 2nd time`, () => {
      emailInput().clear().type('test1@test.com');
    });
    it(`And submit I should see an error message`, () => {
      cy.server({ status: 404, force404: true });
      cy.route({
        method: 'POST',
        url: `**${endPoints.EXISTING_CUSTOMER}`,
        response: {},
      });

      continueButton().focus().click();

      cy.get('.wes-alert').should('exist');
    });
    it(`When I enter a wrong Customer Reference number 3rd time`, () => {
      emailInput().clear().type('test2@test.com');
    });
    it(`And submit I should see an error page`, () => {
      cy.server({ status: 404, force404: true });
      cy.route({
        method: 'POST',
        url: `**${endPoints.EXISTING_CUSTOMER}`,
        response: {},
      });

      continueButton().focus().click();

      cy.url().should('include', 'customer-error');
    });
    it(`And I can start the search as new customer to select my profession`, () => {
      continueButton().click();
      cy.url().should('include', 'profession');
    });
  });
});
