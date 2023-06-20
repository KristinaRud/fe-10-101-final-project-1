import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { TextField } from "formik-mui";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { validationSchemaPassword } from "./utils";
import styles from "../../RegistrationForm/RegistrationForm.module.scss";
import { editPasswordCustomer } from "../../../store/actionCreator/customers.actionCreator";

const EditPasswordForm = ({ setSubmit }) => {
  const dispatch = useDispatch();

  const handleSubmitForm = async (values) => {
    const passwords = {
      password: values.currentPassword,
      newPassword: values.password,
    };
    await dispatch(editPasswordCustomer(passwords));
    setSubmit(true);
  };

  return (
    <>
      <Formik
        initialValues={{
          currentPassword: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchemaPassword}
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
  setSubmit: PropTypes.func,
};

EditPasswordForm.defaultProps = {
  setSubmit: () => {},
};

export default EditPasswordForm;
