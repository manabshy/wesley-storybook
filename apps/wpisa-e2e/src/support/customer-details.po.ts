export const titleSelect = () => cy.get('[data-test=ddTitle]');
export const firstNameInput = () => cy.get('[data-test=txtFirstName]');
export const lastNameInput = () => cy.get('[data-test=txtLastName]');
export const dobDayInput = () => cy.get('[data-test=txtDoBDay]');
export const dobMonthInput = () => cy.get('[data-test=txtDoBMonth]');
export const dobYearInput = () => cy.get('[data-test=txtDoBYear]');
export const professionSelect = () => cy.get('[data-test=ddProfession]');
export const ninoInput = () => cy.get('[data-test=txtNino]');
export const nationalitySelect = () => cy.get('[data-test=ddNationality]');

export const findAddressPostcodeInput = () =>
  cy.get('[data-test=txtFindAddressPostcode]');
export const findAddressButton = () => cy.get('[data-test=btnFindAddress]');
export const enterAddressManuallyButton = () =>
  cy.get('[data-test=btnEnterAddressManually]');
export const addressListSelect = () => cy.get('[data-test=ddAddressList]');

export const manualFlatNumberInput = () => cy.get('[data-test=txtFlatNumber]');
export const manualHouseNumberInput = () =>
  cy.get('[data-test=txtHouseNumber]');
export const manualHouseNameInput = () => cy.get('[data-test=txtHouseName]');
export const manualStreetInput = () => cy.get('[data-test=txtStreet]');
export const manualTownInput = () => cy.get('[data-test=txtTown]');
export const manualRegionInput = () => cy.get('[data-test=txtRegion]');
export const manualCountyInput = () => cy.get('[data-test=txtCounty]');
export const manualPostcodeInput = () => cy.get('[data-test=txtPostcode]');

export const emailInput = () => cy.get('[data-test=txtPersonalEmail]');
export const personalMobileNumberInput = () =>
  cy.get('[data-test=textPersonalMobileNumber]');

export const marketingEmailCheckbox = () =>
  cy.get('[data-test=lblMarketingEmail]');
export const marketingPhoneCheckbox = () =>
  cy.get('[data-test=lblMarketingPhone]');
export const marketingPostCheckbox = () =>
  cy.get('[data-test=lblMarketingPost]');
