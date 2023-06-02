export const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  return errors;
};

export const allRegions = [
  {
    name: "Kyiv region",
  },
  {
    name: "Kharkiv region",
  },
  {
    name: "Dnipro region",
  },
];
export const allCities = [
  { name: "Kyiv" },
  { name: "Kharkiv" },
  { name: "Dnipro" },
  { name: "Odesa" },
];

export const allPostOfficeBranch = [
  { numberPostOffice: 1 },
  { numberPostOffice: 2 },
];
