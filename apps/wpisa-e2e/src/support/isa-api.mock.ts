export const submitInitialAnswer = (response) => {
  cy.route({
    method: 'POST',
    url: '/api/isawebapiwrapper/knowledgecheckstepinitial',
    response,
  }).as('submitInitialAnswer');
};

export const submitSubsequentAnswer = (response) => {
  cy.route({
    method: 'PUT',
    url: '/api/isawebapiwrapper/knowledgecheckstepsubsequent',
    response,
  }).as('submitSubsequentAnswer');
};

export const getTransactionId = (response) => {
  cy.route({
    method: 'POST',
    url: '/api/isawebapiwrapper/gettransaction',
    response,
  }).as('getTransactionId');
};

export const getPaymentUrl = (response) => {
  cy.route({
    method: 'POST',
    url: '/api/isawebapiwrapper/getpaymenturl',
    response,
  }).as('getPaymentUrl');
};

export const submitTransaction = (response) => {
  cy.route({
    method: 'PUT',
    url: 'api/isawebapiwrapper/transaction',
    response,
  }).as('submitTransaction');
};

export const findAddressByPostcode = (postcode: string, response) => {
  cy.route({
    method: 'GET',
    url: `/api/lookup/search?postcode=${postcode}`,
    response,
  }).as('findAddressByPostcode');
};

export const getAddressDetails = (addrId: string, response) => {
  cy.route({
    method: 'GET',
    url: `/api/lookup/select?moniker=${addrId}&format=experian`,
    response,
  }).as('getAddressDetails');
};

export const getAppState = (response) => {
  cy.route({
    method: 'GET',
    url: `/api/isawebapiwrapper/appstate`,
    response,
  }).as('getAppState');
};

export const saveAppState = (response) => {
  cy.route({
    method: 'POST',
    url: `/api/isawebapiwrapper/appstate`,
    response,
  }).as('saveAppState');
};

export const customerSearch = (response) => {
  cy.route({
    method: 'POST',
    url: `/api/isawebapiwrapper/customersearch`,
    response,
  }).as('customerSearch');
};

export const getGenericLookups = (response) => {
  cy.route({
    method: 'POST',
    url: `/api/isawebapiwrapper/genericlookup`,
    response,
  }).as('getGenericLookups');
};
