import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
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

const EditUserForm = ({ handleSubmitForm }) => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          telephone: "",
          birthdate: "",
          gander: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmitForm(values)}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {() => (
          <Form className={styles.form}>
            <Field
              component={TextField}
              name="firstName"
              type="text"
              label="First name *"
              variant="standard"
            />
            <Field
              component={TextField}
              name="lastName"
              type="text"
              label="Last name *"
              variant="standard"
            />
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email *"
              variant="standard"
            />
            <TelephoneField />
            <BirthdateField />
            <Field component={RadioGroup} name="gander">
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
  handleSubmitForm: PropTypes.func,
};

EditUserForm.defaultProps = {
  handleSubmitForm: () => {},
};

export default EditUserForm;
