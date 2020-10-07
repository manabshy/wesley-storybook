export interface Config {
  pageTitle: string;
  envConfig: {
    applicationInsightsKey: string;
  };
}

export interface FormInput {
  inputLabel: string;
  inputError: string;
  inputOtherError?: string;
}

export interface EndPoints {
  confirmationErrorPage: string;
  confirmationPage: string;
  knowledgecheckFailurePage: string;
  bookmarkRedirectPage: string;
  formUnavailablePage: string;
}
