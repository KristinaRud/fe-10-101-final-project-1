import * as Yup from "yup";

export const validationSchema = Yup.object({
  loginOrEmail: Yup.string().required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one digit",
    )
    .required("Password is required"),
});
