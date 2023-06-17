import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import PropTypes from "prop-types";
import styles from "../../RegistrationForm/RegistrationForm.module.scss";
import { selectCustomers } from "../../../store/selectors/customers.selector";

const EditPasswordForm = ({ handleSubmitForm }) => {
  const { data } = useSelector(selectCustomers);

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .test(
        "password-match",
        "Passwords must match",
        (value) => value === data.confirmPassword,
      )
      .required("Current Password is required"),
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
  });

  return (
    <>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
          currentPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={({ password, confirmPassword }) =>
          handleSubmitForm({ password, confirmPassword })
        }
      >
        {() => (
          <Form className={styles.form}>
            <Field
              component={TextField}
              name="currentPassword"
              type="password"
              label="Current password *"
              variant="standard"
            />
            <Field
              component={TextField}
              name="password"
              type="password"
              label="New password *"
              variant="standard"
            />
            <Field
              component={TextField}
              name="confirmPassword"
              type="password"
              label="Confirm new password *"
              variant="standard"
            />
            <Button
              className={styles.form__btn}
              variant="contained"
              size="small"
              type="submit"
            >
              Change password
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

EditPasswordForm.propTypes = {
  handleSubmitForm: PropTypes.func,
};

EditPasswordForm.defaultProps = {
  handleSubmitForm: () => {},
};

export default EditPasswordForm;
