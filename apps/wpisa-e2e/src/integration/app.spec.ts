import {
  continueButton,
  knowledgeCheckQ1YesOption,
  knowledgeCheckQ2YesOption,
} from '../support/app.po';
import * as customerDetailsPage from '../support/customer-details.po';
import * as investmentOptionPage from '../support/investment-options.po';
import * as declarationPage from '../support/declaration.po';
import * as apiMocks from '../support/isa-api.mock';
import { userDetailsFilled } from '../fixtures/userDetailsFilled';
import { isaRoutesNames } from '../support/routes.names';
import { customerNotFound } from '../fixtures/customerSearch';
import { genericLookup } from '../fixtures/genericLookups';

describe('WPISA journeys', () => {
  beforeEach(() => {
    cy.server();

    apiMocks.saveAppState({});

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

    apiMocks.getTransactionId({ data: { transactionId: 'WPJ002920' } });
    apiMocks.getPaymentUrl({
      paymentUrl:
        'https://test.sagepay.com/gateway/service/cardselection?vpstxid={C9879511-EC64-601F-E08A-C8F7E6FDD2CC}',
    });
    apiMocks.submitTransaction({});

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

  it('Lumpsum full journey', () => {
    cy.visit('/');
    continueButton().click();
    knowledgeCheckQ1YesOption().click();
    continueButton().click();

    cy.wait(500);
    knowledgeCheckQ2YesOption().click();
    continueButton().click();

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

    investmentOptionPage.lumpSumOption().click();

    continueButton().click();

    investmentOptionPage.lumpSumOnlyAmountInput().type('1000');

    continueButton().click();

    declarationPage.confirmButton().click();
  });

  it('Lumpsum & Monthly, Your details pre filled', () => {
    apiMocks.getAppState({
      state: JSON.stringify(userDetailsFilled),
    });
    cy.visit(`/#/${isaRoutesNames.YOUR_DETAILS}`);
    continueButton().click();

    investmentOptionPage.monthlyAndLumpSumOption().click();

    continueButton().click();

    investmentOptionPage.combinedLumpSumAmountInput().type('1000');
    investmentOptionPage.combinedMonthlyAmountInput().type('125');

    investmentOptionPage.accountHolderFullNameInput().type('Mr Bond');
    investmentOptionPage.bankNameInput().type('Wesleyan');
    investmentOptionPage.accountNumberInput().type('123456');
    investmentOptionPage.sortCode1Input().type('11');
    investmentOptionPage.sortCode2Input().type('22');
    investmentOptionPage.sortCode3Input().type('33');

    continueButton().click();

    declarationPage.confirmButton().click();
  });

  it('Monthly, Your details pre filled', () => {
    apiMocks.getAppState({
      state: JSON.stringify(userDetailsFilled),
    });
    cy.visit(`/#/${isaRoutesNames.YOUR_DETAILS}`);
    continueButton().click();

    investmentOptionPage.monthlyOption().click();

    continueButton().click();

    investmentOptionPage.monthlyOnlyAmountInput().type('125');

    investmentOptionPage.accountHolderFullNameInput().type('Mr Bond');
    investmentOptionPage.bankNameInput().type('Wesleyan');
    investmentOptionPage.accountNumberInput().type('123456');
    investmentOptionPage.sortCode1Input().type('11');
    investmentOptionPage.sortCode2Input().type('22');
    investmentOptionPage.sortCode3Input().type('33');

    continueButton().click();

    declarationPage.confirmButton().click();
  });
});
