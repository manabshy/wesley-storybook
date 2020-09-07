export interface Config {
  apiErrorMessage:           string;
  pageHeading:               string;
  apiEndPoints:              APIEndPoints;
  calculator:                Calculator;
  serviceUnavailableContent: ServiceUnavailableContent;
}

export interface APIEndPoints {
  budgetBasedApiUrl: string;
}

export interface Calculator {
  type:         string;
  isStandalone: boolean;
  budget:       Budget;
  disclaimers:  Disclaimers;
  footer:       Footer;
}

export interface Budget {
  initialValues:  InitialValues;
  header:         Header;
  description:    string;
  sliders:        Slider[];
  inputs:         any[];
  riskInvestment: RiskInvestment;
  results:        Results;
}

export interface Header {
  icon:  string;
  title: string;
}

export interface InitialValues {
  contributionAmount: number;
  balanceAmount:      number;
  frequency:          string;
  initialTermYears:   number;
  remainingTermYears: number;
  passedTermYears:    number;
  riskCode:           string;
}

export interface Results {
  truncate:     Truncate;
  params:       Param[];
  graphs:       Graphs;
  dataGtmClass: string;
}

export interface Graphs {
  summary:      Summary;
  xAxisLabel:   string;
  yAxisLabel:   string;
  dataGtmId:    string;
  dataGtmClass: string;
}

export interface Summary {
  title:    string;
  sentence: string;
}

export interface Param {
  id:      string;
  text:    string;
  value:   string;
  tooltip: Tooltip;
  label?:  string;
}

export interface Tooltip {
  content: string;
}

export interface Truncate {
  description:    string;
  truncatedLines: boolean;
}

export interface RiskInvestment {
  title:       string;
  name:        string;
  placeholder: string;
  tooltip:     Tooltip;
  values:      Value[];
}

export interface Value {
  label: string;
  value: string;
}

export interface Slider {
  label:             string;
  tooltip:           Tooltip;
  name:              string;
  type:              string;
  sliderMin:         number;
  sliderMax:         number;
  sliderStep:        number;
  inputMin:          number;
  inputMax:          number;
  value:             number;
  prefix?:           string;
  size:              number;
  validationMessage: string;
  maxErrorMessage:   string;
  minErrorMessage:   string;
  dataGtmId?:        string;
  dataGtmClass?:     string;
  suffix?:           string;
}

export interface Disclaimers {
  defaultDisclaimers: DefaultDisclaimersClass;
  remodelDisclaimers: DefaultDisclaimersClass;
}

export interface DefaultDisclaimersClass {
  leftDisclaimers:  string[];
  rightDisclaimers: string[];
}

export interface Footer {
  buttons: Button[];
}

export interface Button {
  key:        string;
  label:      string;
  url:        string;
  dataGtmId?: string;
}

export interface ServiceUnavailableContent {
  serviceUnavailableTitle:   string;
  serviceUnavailableSummary: string;
}
