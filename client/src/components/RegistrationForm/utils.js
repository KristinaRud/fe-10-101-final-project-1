import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .matches(
      /^[a-zA-Zа-яА-Я]+$/,
      "Allowed characters for First Name is a-z, A-Z, а-я, А-Я.",
    )
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2)
    .max(25)
    .matches(
      /^[a-zA-Zа-яА-Я]+$/,
      "Allowed characters for First Name is a-z, A-Z, а-я, А-Я.",
    )
    .required("Last Name is required"),
  login: Yup.string().min(3).max(10).required("Login is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one digit",
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one digit",
    )
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  mobile: Yup.string()
    .matches(
      /^(\+38)?\s?\(?\d{3}\)?\s?\d{3}(-|\s)?\d{2}(-|\s)?\d{2}$/,
      "Invalid telephone number",
    )
    .required("Telephone is required"),
  birthdate: Yup.string(),
  gender: Yup.string(),
});
