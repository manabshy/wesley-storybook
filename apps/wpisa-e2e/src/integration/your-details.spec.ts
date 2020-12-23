import {
  continueButton,
  knowledgeCheckQ1YesOption,
  knowledgeCheckQ2YesOption,
} from '../support/app.po';
import * as customerDetailsPage from '../support/customer-details.po';
import * as investmentOptionPage from '../support/investment-options.po';
import * as declarationPage from '../support/declaration.po';
import * as apiMocks from '../support/isa-api.mock';
import { knowledgeCheckAnswers } from '../fixtures/knowledgeAnsweredAppState';
import { customerNotFound } from '../fixtures/customerSearch';
import { isaRoutesNames } from '../support/routes.names';
import { genericLookup } from '../fixtures/genericLookups';

describe('Your details page', () => {
  beforeEach(() => {
    cy.server();

    apiMocks.getAppState({
      state: JSON.stringify(knowledgeCheckAnswers),
    });

    apiMocks.saveAppState({});

    cy.visit(`/#/${isaRoutesNames.YOUR_DETAILS}`);

    apiMocks.submitInitialAnswer({
      data: {
        attemptId: '123123',
      },
    });

    apiMocks.submitSubsequentAnswer({
      data: {
        attemptId: '123123',
      },
    });

    apiMocks.findAddressByPostcode('B12ST', {
      addresses: [
        {
          singleLine: 'Address 1',
          moniker: 'addr1',
        },
        {
          singleLine: 'Address 2',
          moniker: 'addr2',
        },
        {
          singleLine: 'Address 3',
          moniker: 'addr3',
        },
        {
          singleLine: 'Address 4',
          moniker: 'addr4',
        },
      ],
    });

    apiMocks.getAddressDetails('addr2', {
      flat: null,
      buildingName: null,
      buildingNumber: '15',
      street: 'Anderton Street',
      district: null,
      countryCode: null,
      countryName: null,
      town: 'BIRMINGHAM',
      county: null,
      postcode: 'B1 2ST',
    });

    apiMocks.customerSearch(customerNotFound);

    apiMocks.getGenericLookups(genericLookup);
  });

  describe('Address', () => {
    it('Address lookup', () => {
      customerDetailsPage.titleSelect().select('Mr');
      customerDetailsPage.firstNameInput().type('James');
      customerDetailsPage.lastNameInput().type('Bond');
      customerDetailsPage.dobDayInput().type('07');
      customerDetailsPage.dobMonthInput().type('07');
      customerDetailsPage.dobYearInput().type('1957');
      customerDetailsPage.professionSelect().select('Other');
      customerDetailsPage.ninoInput().type('SN123123A');
      customerDetailsPage.nationalitySelect().select('British');
      customerDetailsPage.findAddressPostcodeInput().type('B12ST');
      customerDetailsPage.findAddressButton().click();
      customerDetailsPage.addressListSelect().select('Address 2');
      customerDetailsPage.emailInput().type('james.bond@wesleyan.co.uk');
      customerDetailsPage.personalMobileNumberInput().type('07007007007');
      customerDetailsPage.marketingEmailCheckbox().click();
      customerDetailsPage.marketingPhoneCheckbox().click();
      customerDetailsPage.marketingPostCheckbox().click();

      continueButton().click();

      cy.url().should('include', isaRoutesNames.INVESTMENT_OPTIONS);
    });

    it('Manual address', () => {
      customerDetailsPage.titleSelect().select('Mr');
      customerDetailsPage.firstNameInput().type('James');
      customerDetailsPage.lastNameInput().type('Bond');
      customerDetailsPage.dobDayInput().type('07');
      customerDetailsPage.dobMonthInput().type('07');
      customerDetailsPage.dobYearInput().type('1957');
      customerDetailsPage.professionSelect().select('Other');
      customerDetailsPage.ninoInput().type('SN123123A');
      customerDetailsPage.nationalitySelect().select('British');
      customerDetailsPage.emailInput().type('james.bond@wesleyan.co.uk');
      customerDetailsPage.personalMobileNumberInput().type('07007007007');

      customerDetailsPage.enterAddressManuallyButton().click();
      customerDetailsPage.manualFlatNumberInput().type('7');
      customerDetailsPage.manualHouseNumberInput().type('700');
      customerDetailsPage.manualStreetInput().type('Liverpool Street');
      customerDetailsPage.manualTownInput().type('London');
      customerDetailsPage.manualPostcodeInput().type('B12ST');

      continueButton().click();

      cy.url().should('include', isaRoutesNames.INVESTMENT_OPTIONS);
    });
  });
});
