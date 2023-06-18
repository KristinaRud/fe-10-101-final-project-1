import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  // mobile: "",
  additional: "",
};

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(25)
    .matches(
      /^[a-zA-Zа-яА-Я]+$/,
      "Allowed characters for name is a-z, A-Z, а-я, А-Я.",
    )
    .required("Last Name is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  // mobile: Yup.string()
  //   .matches(
  //     /^(\+38)?\s?\(?\d{3}\)?\s?\d{3}(-|\s)?\d{2}(-|\s)?\d{2}$/,
  //     "Invalid telephone number",
  //   )
  //   .required("Telephone is required"),
  additional: Yup.string().required("Additional info is required"),
});
