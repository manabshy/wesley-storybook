export interface AppForms {
  customerSelect: {
    type: string;
  };
  professionSelect: {
    sector: string;
  };
  newCustomerPostcode: {
    postcode: string;
  };
  yourDetails: {
    email: string;
    postcode: string;
    dateOfBirth: Dob;
  };
  customerReference: {
    ref: string;
  };
}

export interface Dob {
  day: string;
  month: string;
  year: string;
}
