export const userDetailsFilled = {
  forms: {
    knowledgeCheckQ1: { question1: 'Yes' },
    knowledgeCheckQ2: { question2: 'Yes' },
    customerPersonalDetails: {
      title: 'c2044dac-a1eb-48c8-b23c-5255bac96bc0',
      firstName: 'James',
      lastName: 'Bond',
      dob: { day: '07', month: '07', year: '1957' },
      profession: '1237',
      nationalInsuranceNumber: 'SN123123A',
      nationality: '92',
      addressLookup: {
        postcode: 'B12ST',
        selectedAddressId: 'addr2',
      },
      manualAddress: {
        flatNumber: null,
        houseNumber: '15',
        houseName: null,
        street: 'Anderton Street',
        town: 'BIRMINGHAM',
        region: null,
        county: null,
        postcode: 'B1 2ST',
      },
      personalEmail: 'james.bond@wesleyan.co.uk',
      personalMobileNumber: '07007007007',
      marketingEmail: true,
      marketingPost: true,
      marketingPhone: true,
    },
    addressLookup: {
      postcode: 'B12ST',
      selectedAddressId: 'addr2',
    },
    manualAddress: {
      flatNumber: null,
      houseNumber: '15',
      houseName: null,
      street: 'Anderton Street',
      town: 'BIRMINGHAM',
      region: null,
      county: null,
      postcode: 'B1 2ST',
    },
    investmentOptions: {
      investmentOption: 'LUMP_SUM',
    },
    lumpSumPayment: {
      amount: '1000',
    },
  },
  attemptId: '123123',
  postcodeLookupAddressList: [
    { singleLine: 'Address 1', moniker: 'addr1' },
    { singleLine: 'Address 2', moniker: 'addr2' },
    { singleLine: 'Address 3', moniker: 'addr3' },
    { singleLine: 'Address 4', moniker: 'addr4' },
  ],
  currentTaxPeriod: {
    taxPeriodCode: '2020-2021',
    taxPeriodDescription: '2020 to 2021',
    startDateTime: '2020-04-06T00:00:00',
    endDateTime: '2021-04-05T00:00:00',
    lumpSumAccepted: true,
    monthlyPaymentsAccepted: true,
    newISAsAccepted: true,
    topUpsAccepted: true,
    totalAnnualAllowance: 20000,
    minNewLumpSumAmount: 1000,
    minTopUpLumpSumAmount: 1000,
    minNewMonthlyAmount: 100,
    minTopUpMonthlyAmount: 10,
    numberOfMonthlyPayments: 4,
    maxLumpSumAmount: 20000,
    maxMonthlyAmount: 1666.66,
  },
};