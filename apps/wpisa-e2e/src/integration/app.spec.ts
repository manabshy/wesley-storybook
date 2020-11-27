import {
  continueButton,
  knowledgeCheckQ1YesOption,
  knowledgeCheckQ2YesOption,
} from '../support/app.po';
import * as customerDetailsPage from '../support/customer-details.po';
import * as investmentOptionPage from '../support/investment-options.po';
import * as declarationPage from '../support/declaration.po';
import * as apiMocks from '../support/isa-api.mock';

describe('Lumpsum payment', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.server();
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

    declarationPage.authoriseOption().click();
    declarationPage.declarationOption().click();
    declarationPage.confirmButton().click();
  });
});
