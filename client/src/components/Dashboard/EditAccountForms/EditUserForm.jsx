import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { useDispatch } from "react-redux";
import {
  Button,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "../../RegistrationForm/RegistrationForm.module.scss";
import { validationSchema } from "./utils";
import BirthdateField from "../../RegistrationForm/BirthdateField/BirthdateField";
import TelephoneField from "../../RegistrationForm/TelephoneField/TelephoneField";
import { updateCustomer } from "../../../store/actionCreator/customers.actionCreator";

const EditUserForm = ({ setSubmit }) => {
  const dispatch = useDispatch();

  const handleSubmitForm = async (values) => {
    const valuesNonEmpty = Object.entries(values).reduce(
      (object, [key, value]) => {
        if (value) {
          object[key] = value;
        }
        return object;
      },
      {},
    );
    await dispatch(updateCustomer(valuesNonEmpty));
    setSubmit(true);
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          login: "",
          mobile: "",
          birthdate: "",
          gender: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmitForm(values)}
      >
        {() => (
          <Form className={styles.form}>
            <Field
              component={TextField}
              name="firstName"
              type="text"
              label="First name "
              variant="standard"
            />
            <Field
              component={TextField}
              name="lastName"
              type="text"
              label="Last name "
              variant="standard"
            />
            <Field
              component={TextField}
              name="login"
              type="text"
              label="Login "
              variant="standard"
            />
            <TelephoneField />
            <BirthdateField />
            <Field component={RadioGroup} name="gender">
              <FormLabel component="legend">Gender: </FormLabel>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </Field>
            <Button
              className={styles.form__btn}
              variant="contained"
              size="small"
              type="submit"
            >
              Edit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

EditUserForm.propTypes = {
  setSubmit: PropTypes.func,
};

EditUserForm.defaultProps = { setSubmit: () => {} };

export default EditUserForm;
