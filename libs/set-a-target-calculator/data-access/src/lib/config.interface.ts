export interface Config {
  apiErrorMessage: string;
  pageHeading: string;
  calculator: Calculator;
  apiEndPoints: APIEndPoints;
  serviceUnavailableContent: ServiceUnavailableContent;
}

export interface APIEndPoints {
  budgetBasedApiUrl: string;
  targetOneOffApiUrl: string;
  targetRegularApiUrl: string;
}

export interface Calculator {
  type: string;
  isStandalone: boolean;
  target: CalculatorTarget;
  disclaimers: Disclaimers;
  footer: Footer;
}

export interface Disclaimers {
  defaultDisclaimers: string[];
  remodelDisclaimers: any[];
}

export interface Footer {
  buttons: Button[];
}

export interface Button {
  key: string;
  label: string;
  url: string;
  dataGtmId?: string;
}

export interface CalculatorTarget {
  header: Header;
  description: string;
  initialValues: InitialValues;
  sliders: Slider[];
  inputs: Input[];
  riskInvestment: RiskInvestment;
  results: Results;
}

export interface Header {
  icon: string;
  title: string;
}

export interface InitialValues {
  targetAmount: number;
  initialTermYears: number;
  remainingTermYears: number;
  passedTermYears: number;
  contributionAmount: number;
  balanceAmount: number;
  riskCode: string;
  frequency: string;
}

export interface Input {
  title?: string;
  id: string;
  name: string;
  label: string;
  type: string;
  value: string;
  defaultChecked: boolean;
  disabled: boolean;
  tooltip: Tooltip;
}

export interface Tooltip {
  content: string;
}

export interface Results {
  standaloneInitialLabel: string;
  emptyResultsLabel: string;
  description: string;
  labels: Labels;
}

export interface Labels {
  target: string;
  term: string;
  projection: string;
  lumpSumContributionLabel: string;
  monthlyContributionLabel: string;
  worse: string;
  better: string;
  projectionDisclaimer: string;
  gtm: Gtm;
  dataGtmId: string;
}

export interface Gtm {
  target: GtmTarget;
  projection: Projection;
  worse: Best;
  best: Best;
}

export interface Best {}

export interface Projection {
  dataGtmId: string;
  dataGtmClass: string;
}

export interface GtmTarget {
  dataGtmId: string;
}

export interface RiskInvestment {
  title: string;
  name: string;
  placeholder: string;
  tooltip: Tooltip;
  values: Value[];
}

export interface Value {
  label: string;
  value: string;
}

export interface Slider {
  label: string;
  name: string;
  value: number;
  type: string;
  sliderMin: number;
  sliderMax: number;
  sliderStep: number;
  inputMin: number;
  inputMax: number;
  defaultValue: number;
  prefix: string;
  size: number;
  validationMessage: string;
  maxErrorMessage: string;
  minErrorMessage: string;
  suffix: string;
  tooltip: Tooltip;
  dataGtmId: string;
  dataGtmClass: string;
}

export interface ServiceUnavailableContent {
  serviceUnavailableTitle: string;
  serviceUnavailableSummary: string;
}
