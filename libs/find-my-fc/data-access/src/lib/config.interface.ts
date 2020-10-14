export interface Config {
  pageTitle: string;
  envConfig: {
    applicationInsightsKey: string;
  };
  customerSelector: CustomerSelectorContent;
  professionSelector: ProfessionSelectorContent;
  newCustomerPostcode: NewCustomerPostcodeContent;
  yourDetails: YourDetailsContent;
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
  homePostcode: Input;
  workPostcodeHeading: string;
  workPostcode: Input;
  nextButtonLabel: string;
  backButtonLabel: string;
}

export interface YourDetailsContent {
  heading: string;
  summary: string;
  email: Input;
  homePostcode: Input;
  dateOfBirth: Input;
  nextButtonLabel: string;
  backButtonLabel: string;
}

export interface Input {
  inputLabel: string;
  inputError: string;
}
