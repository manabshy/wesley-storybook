export interface Config {
  pageTitle: string;
  envConfig: {
    applicationInsightsKey: string;
  };
  customerSelector: CustomerSelectorContent;
}

export interface FormInput {
  inputLabel: string;
  inputError: string;
  inputOtherError?: string;
}

export interface EndPoints {}

export interface CustomerSelectorContent {
  heading: string;
  summary: string;
  newCustomerLabel: string;
  existingCustomerLabel: string;
  nextButtonLabel: string;
}
