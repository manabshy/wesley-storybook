export interface Config {
  pageTitle: string;
  endPoints: EndPoints;
  progressBar: {
    steps: string[];
  };
  intro: {
    metaTitle: string;
    pageTitle: string;
    heading: string;
    summary: string;
    nextButtonLabel: string;
  };
  knowledgeCheck: KnowledgeCheck;
  yourDetails: YourDetails;
  investmentOptions: InvestmentOptions;
  validationSummary: {
    heading: string;
    summary: string;
  };
  declaration: Declaration;
  payment: IFramePayment;
  inactivityModal: InactivityModal;
  sessionTimeoutModal: SessionTimeoutModal;
  titleList: [{ value: string; label: string }];
  marketSegmentList: [{ value: string; label: string; key: string }];
  envConfig: {
    applicationInsightsKey: string;
    gtmKey: string;
  };
}

export interface KnowledgeCheck {
  metaTitle: string;
  step1: KnowledgeCheckStep;
  step2: KnowledgeCheckStep;
}

export interface KnowledgeCheckStep {
  metaTitle: string;
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
  title: FormInput;
  firstName: FormInput;
  surname: FormInput;
  dob: YourDetailsDob;
  profession: FormInput;
  niNumber: FormInput;
  niTooltip: string;
  professionTooltip: string;
  nationality: FormInput;
  addressDetails: YourDetailsAddressDetails;
  contactDetails: YourDetailsContactDetails;
  marketing: YourDetailsMarketing;
  privacy: string;
  nextButtonLabel: string;
}

export interface YourDetailsAddressDetails {
  heading: string;
  summary: string;
  findAddress: string;
  searchForAddress: FormInput;
  enterAddressManuallyLabel: string;
  cantSeeAddressLabel: string;
  postcode: FormInput;
  selectYourAddress: FormInput;
  flatNumber: FormInput;
  houseNumber: FormInput;
  houseName: FormInput;
  street: FormInput;
  town: FormInput;
  region: FormInput;
  county: FormInput;
}

export interface FormInput {
  inputLabel: string;
  inputError: string;
  inputOtherError?: string;
}

export interface YourDetailsContactDetails {
  heading: string;
  personalEmail: FormInput;
  mobileNumber: FormInput;
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

export interface InvestmentOptions {
  metaTitle: string;
  heading: string;
  summary: string;
  singleLumpSum: SingleLumpSum;
  monthlyPayments: MonthlyPayments;
  monthlyAndLumpSum: MonthlyAndLumpSum;
  directDebitDetails: DirectDebitDetails;
  nextButtonLabel: string;
  backButtonLabel: string;
}

export interface DirectDebitDetails {
  bankName: FormInput;
  bankNameTooltip: string;
  accountName: FormInput;
  accountNumber: FormInput;
  sortCode: FormInput;
  heading: string;
  summary: string;
  bodyCopy: string;
}

export interface MonthlyAndLumpSum {
  title: string;
  summary: string;
  monthlyAndLumpSumPayment: MonthlyAndLumpSumPayment;
}

export interface MonthlyAndLumpSumPayment {
  metaTitle: string;
  heading: string;
  summary: string;
  monthlyAmount: Omit<FormInput, 'inputError'> & {
    inputMinError: string;
    inputMaxError: string;
  };
  monthlyHelpText: string;
  lumpSumAmount: FormInput;
  lumpSumHelpText: string;
  lumpSumTooltip: string;
  nextButtonLabel: string;
  backButtonLabel: string;
}

export interface MonthlyPayments {
  title: string;
  summary: string;
  monthlyPayment: MonthlyPayment;
}

export interface MonthlyPayment {
  metaTitle: string;
  heading: string;
  summary: string;
  monthlyAmount: Omit<FormInput, 'inputError'> & {
    inputMinError: string;
    inputMaxError: string;
  };
  monthlyHelpText: string;
  nextButtonLabel: string;
  backButtonLabel: string;
}

export interface SingleLumpSum {
  title: string;
  summary: string;
  lumpSumPayment: LumpSumPayment;
}

export interface LumpSumPayment {
  metaTitle: string;
  heading: string;
  summary: string;
  lumpSumAmount: FormInput;
  lumpSumHelpText: string;
  nextButtonLabel: string;
  backButtonLabel: string;
}
export interface Declaration {
  heading: string;
  summary: string;
  metaTitle: string;
  nextButtonLabel: string;
  backButtonLabel: string;
  editLabel: string;
  yourDetailsLabel: string;
  directDebitLabel: string;
  yourInvestmentLabel: string;
  perMonthLabel: string;
  totalInvestmentText: string;
  totalInvestmentSmallText: string;
  isaLabel: string;
  confirmContent: string;
  declarationText: string;
}

export interface IFramePayment {
  metaTitle: string;
  heading: string;
  summary: string;
  backButtonLabel: string;
  nextButtonLabel: string;
}

export interface EndPoints {
  confirmationErrorPage: string;
  confirmationPage: string;
  knowledgecheckFailurePage: string;
  bookmarkRedirectPage: string;
  formUnavailablePage: string;
}

export interface InactivityModal {
  heading: string;
  summary: string;
  continueButtonLabel: string;
  idleTimeInSeconds: number;
  timeoutTimeInSeconds: number;
}
export interface SessionTimeoutModal {
  heading: string;
  summary: string;
  continueButtonLabel: string;
}
