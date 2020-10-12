export interface Config {
  pageTitle: string;
  envConfig: {
    applicationInsightsKey: string;
  };
  customerSelector: CustomerSelectorContent;
  professionSelector: ProfessionSelectorContent;
  newCustomerPostcode: NewCustomerPostcodeContent;
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

export interface ProfessionSelectorContent {
  heading: string;
  summary: string;
  areaOfWork: { label: string; id: string }[];
  nextButtonLabel: string;
  backButtonLabel: string;
}

export interface NewCustomerPostcodeContent {
  homePostcodeHeading: string;
  homePostcode: {
    inputLabel: string;
    inputError: string;
  };
  workPostcodeHeading: string;
  workPostcode: {
    inputLabel: string;
    inputError: string;
  };
  nextButtonLabel: string;
  backButtonLabel: string;
}
