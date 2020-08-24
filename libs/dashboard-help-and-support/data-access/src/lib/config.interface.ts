export interface Config {
  searchProps:   SearchProps;
  contactUsInfo: ContactUsInfo;
  data:          Data;
  className:     string;
}

export interface ContactUsInfo {
  verticalLayout: boolean;
  lightTheme:     boolean;
  timeTables:     TimeTable[];
  contacts:       Contacts;
}

export interface Contacts {
  icon:    string;
  text:    string;
  ctaText: string;
  ctaURL:  string;
}

export interface TimeTable {
  title:    string;
  phone:    string;
  openings: Opening[];
}

export interface Opening {
  day:  string;
  time: string;
}

export interface Data {
  sections: Section[];
}

export interface Section {
  title:        Title;
  href:         string;
  articles:     Article[];
  dataGtmId:    string;
  dataGtmClass: string;
}

export interface Article {
  title:   string;
  content: string;
  tag:     Title;
}

export enum Title {
  General = "General",
  Glossary = "Glossary",
  MyProfile = "My profile",
  Policies = "Policies",
}

export interface SearchProps {
  id:            string;
  label:         string;
  fieldType:     string;
  placeholder:   string;
  noResultsText: NoResultsText;
  dataGtmId:     string;
  dataGtmClass:  string;
}

export interface NoResultsText {
  heading:   string;
  strapline: string;
}
