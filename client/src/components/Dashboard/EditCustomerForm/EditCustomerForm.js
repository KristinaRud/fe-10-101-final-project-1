import { Field, Form, Formik } from "formik";
import { RadioGroup, TextField } from "formik-mui";
import { Button, FormControlLabel, FormLabel, Radio } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../../RegistrationForm/RegistrationForm.module.scss";
import { validationSchema } from "./validationSchema";
import BirthdateField from "../../RegistrationForm/BirthdateField/BirthdateField";
import TelephoneField from "../../RegistrationForm/TelephoneField/TelephoneField";
import LoginSnackbar from "../../LoginForm/LoginSnackbar";
import { editCustomer } from "../../../store/actionCreator/customers.actionCreator";

const EditCustomerForm = () => {
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [status, setStatus] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSubmit = async (values) => {
    await dispatch(editCustomer(values));
    await setSubmit(true);
  };

  useEffect(() => {
    if (submit) {
      setStatus("success");
      setOpenSnackbar(true);
    } else {
      setStatus("error");
    }
  }, [dispatch, submit]);
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
        onSubmit={(values) => handleSubmit(values)}
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
              <FormLabel component="legend">Gander: </FormLabel>
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
      <LoginSnackbar
        open={openSnackbar}
        status={status}
        handleClose={handleClose}
        textSuccess="Edit successes!"
        textError={"Edit error"}
      />
    </>
  );
};

export default EditCustomerForm;
