import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Enter an email"),
  firstName: Yup.string().min(3).required("Enter a first name"),
  lastName: Yup.string().min(3).required("Enter a last name"),
  phoneNumber: Yup.string()
    .matches(
      /^(\+38)?\s?\(?\d{3}\)?\s?\d{3}(-|\s)?\d{2}(-|\s)?\d{2}$/,
      "Invalid phone number",
    )
    .required("Enter a phone number"),
  paymentMethod: Yup.string().required("Select a payment method"),
  state: Yup.string().nullable().required("Select a state"),
  district: Yup.string().nullable().required("Select a district"),
  city: Yup.string().nullable().required("Select a city"),
  postOffice: Yup.string().required("Enter a post office"),
  postOfficeBranch: Yup.string()
    .nullable()
    .required("Select a post office branch"),
  deliveryDetails: Yup.string().required("Enter delivery details"),
});
