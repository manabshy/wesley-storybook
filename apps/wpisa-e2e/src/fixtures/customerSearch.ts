export const customerNotFound = {
  data: {
    customerSearch: { customerSearchStatus: 'NO_MATCH', customerId: 0 },
    productSearch: { productSearchStatus: 'NOT_FOUND', policyNumber: null },
    currentTaxPeriod: {
      taxPeriodCode: '2020-2021',
      taxPeriodDescription: '2020 to 2021',
      startDateTime: '2020-04-06T00:00:00',
      endDateTime: '2021-04-05T00:00:00',
      lumpSumAccepted: true,
      monthlyPaymentsAccepted: true,
      newISAsAccepted: true,
      topUpsAccepted: true,
      totalAnnualAllowance: 20000.0,
      minNewLumpSumAmount: 1000.0,
      minTopUpLumpSumAmount: 1000.0,
      minNewMonthlyAmount: 100.0,
      minTopUpMonthlyAmount: 10.0,
      numberOfMonthlyPayments: 4,
      maxLumpSumAmount: 20000.0,
      maxMonthlyAmount: 1666.66,
    },
  },
};
