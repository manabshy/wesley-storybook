export const mockGenericLookups = {
  data: {
    genericLookups: [
      {
        categoryCode: 'TITLE',
        members: [
          { memberId: '10', customerDescription: 'Dr' },
          { memberId: '8', customerDescription: 'Miss' },
          { memberId: '5', customerDescription: 'Mr' },
          { memberId: '6', customerDescription: 'Mrs' },
          { memberId: '68', customerDescription: 'Ms' },
        ],
      },
      {
        categoryCode: 'NATIONALITY',
        members: [
          { memberId: '92', customerDescription: 'British' },
          { memberId: '95', customerDescription: 'American' },
          { memberId: '159', customerDescription: 'Australian' },
          { memberId: '113', customerDescription: 'Dutch' },
          { memberId: '119', customerDescription: 'French' },
          { memberId: '121', customerDescription: 'German' },
        ],
      },
      {
        categoryCode: 'MARKET_SEGMENT',
        members: [
          { memberId: 'DENTISTS', customerDescription: 'Dentist' },
          {
            memberId: 'GENMEDPRAC',
            customerDescription: 'General Medical Practitioner',
          },
          { memberId: 'HOSDOCS', customerDescription: 'Hospital Doctor' },
          { memberId: 'OTHER', customerDescription: 'Other' },
          { memberId: 'TEACHERS', customerDescription: 'Teacher' },
        ],
      },
    ],
    currentTaxPeriod: {
      taxPeriodCode: '2020-2021',
      taxPeriodDescription: '2020 to 2021',
      startDateTime: '2020-04-06T01:00:00+01:00',
      endDateTime: '2021-04-06T00:59:59+01:00',
      lumpSumAccepted: true,
      monthlyPaymentsAccepted: true,
      newISAsAccepted: true,
      topUpsAccepted: true,
      totalAnnualAllowance: 20000,
      minNewLumpSumAmount: 2000,
      minTopUpLumpSumAmount: 1000,
      minNewMonthlyAmount: 250,
      minTopUpMonthlyAmount: 25,
      numberOfMonthlyPayments: 11,
    },
  },
};
