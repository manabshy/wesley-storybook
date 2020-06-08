export interface Config {
  pageTitle: string;
  progressBar: {
    steps: string[];
  };
  start: {
    pageTitle: string;
    heading: string;
    summary: string;
    nextButtonLabel: string;
  };
  knowledgeCheck: KnowledgeCheck;
  yourDetails: YourDetails;
}

export interface KnowledgeCheck {
  metaTitle: string;
  step1: KnowledgeCheckStep;
  step2: KnowledgeCheckStep;
}

export interface KnowledgeCheckStep {
  heading: string;
  summary: string;
  questions: string[];
  nextButtonLabel: string;
  backButtonLabel: string;
}

export interface YourDetails {
  metaTitle: string;
  heading: string;
  summary: string;
  personalInformationLabel: string;
  title: YourDetailsFormInput;
  YourDetailsFormInput: YourDetailsFormInput;
  firstName: YourDetailsFormInput;
  surname: YourDetailsFormInput;
  dob: YourDetailsDob;
  profession: YourDetailsFormInput;
  niNumber: YourDetailsFormInput;
  nationality: YourDetailsFormInput;
  nationalityTooltip: string;
  dualNationalityLabel: string;
  addAnotherNationalityLabel: string;
  addressDetails: YourDetailsAddressDetails;
  contactDetails: YourDetailsContactDetails;
  marketing: YourDetailsMarketing;
  privacy: string;
  nextButtonLabel: string;
}

export interface YourDetailsAddressDetails {
  heading: string;
  searchForAddressLabel: string;
  searchForAddress: YourDetailsFormInput;
  enterAddressManuallyLabel: string;
  tooltip: string;
}

export interface YourDetailsFormInput {
  inputLabel: string;
  inputError: string;
}

export interface YourDetailsContactDetails {
  heading: string;
  personalEmail: YourDetailsFormInput;
  mobileNumber: YourDetailsFormInput;
}

export interface YourDetailsDob {
  inputLabel: string;
  inputError: string;
  inputOtherError: string;
}

export interface YourDetailsMarketing {
  heading: string;
  email: string;
  phone: string;
  post: string;
}
