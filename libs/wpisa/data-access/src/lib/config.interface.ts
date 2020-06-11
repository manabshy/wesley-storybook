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
  investmentOptions: InvestmentOptions;
  validationSummary: {
    heading: string;
    summary: string;
  };
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
  title: FormInput;
  firstName: FormInput;
  surname: FormInput;
  dob: YourDetailsDob;
  profession: FormInput;
  niNumber: FormInput;
  niTooltip: string;
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
  heading: string;
  summary: string;
  monthlyAmount: FormInput;
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
  heading: string;
  summary: string;
  monthlyAmount: FormInput;
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
  heading: string;
  summary: string;
  lumpSumAmount: FormInput;
  lumpSumHelpText: string;
  nextButtonLabel: string;
  backButtonLabel: string;
}
