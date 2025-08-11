// set google form "form action" URL here
export const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/u/0/d/1dTHEPA7uNKSBaYhF-YwQUtjCZObcYnYvJ0EKfB77_JM/formResponse";

export type GoogleFormsFieldMap = {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  website: string;
  budget: string;
  services: string;
  message: string;
};

// set each value to the corresponding entry.<id> here
export const GOOGLE_FORM_FIELDS: GoogleFormsFieldMap = {
  name: "entry.2083985832",
  email: "entry.1983861747",
  phone: "entry.1848601088",
  companyName: "entry.126735824",
  website: "entry.510163513",
  budget: "entry.1198400802",
  services: "entry.1614712088",
  message: "entry.61400844",
};

// prefill form
// https://docs.google.com/forms/d/e/1FAIpQLSci4RNmN3Yo4p9z3auDPOiA7fYm3XStJQ9UTJPs1lYZyqFfNg/viewform?usp=pp_url&entry.2083985832=one&entry.1983861747=two&entry.1848601088=three&entry.126735824=four&entry.510163513=five&entry.1198400802=six&entry.1614712088=seven&entry.61400844=eight
