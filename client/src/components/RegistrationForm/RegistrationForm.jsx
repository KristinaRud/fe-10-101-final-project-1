import { Field, Form, Formik } from "formik";
import { RadioGroup, TextField } from "formik-mui";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./RegistrationForm.module.scss";
import { validationSchema } from "./utils";
import BirthdateField from "./BirthdateField/BirthdateField";
import TelephoneField from "./TelephoneField/TelephoneField";
import LoginSnackbar from "../LoginForm/LoginSnackbar";
import { signUp } from "../../store/actionCreator/customers.actionCreator";
import { selectCustomers } from "../../store/selectors/customers.selector";

const RegistrationForm = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [status, setStatus] = useState("");
  const [textError, setTextError] = useState("Sign up failed!");
  const [submit, setSubmit] = useState(false);
  const { successSignup, error } = useSelector(selectCustomers);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSubmit = async (values) => {
    dispatch(signUp(values));
    setSubmit(true);
  };

  useEffect(() => {
    if (submit) {
      if (successSignup) {
        setStatus("success");
        setOpenSnackbar(true);
        setSubmit(false);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setTextError(error);
        setSubmit(false);
        setStatus("error");
        setOpenSnackbar(true);
      }
    }
  }, [submit, successSignup, error, navigate]);

  return (
    <div className={styles.form__wrapper}>
      <Typography component="h2" className={styles.title}>
        Sign Up
      </Typography>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          login: "",
          email: "",
          password: "",
          confirmPassword: "",
          mobile: "",
          birthdate: "",
          gender: "",
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
              name="login"
              type="text"
              label="Login *"
              variant="standard"
            />
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email *"
              variant="standard"
            />
            <Field
              component={TextField}
              name="password"
              type="password"
              label="Password *"
              variant="standard"
            />
            <Field
              component={TextField}
              name="confirmPassword"
              type="password"
              label="Confirm password *"
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
              size="large"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <LoginSnackbar
        open={openSnackbar}
        status={status}
        handleClose={handleClose}
        textSuccess="Sign in successes!"
        textError={textError}
      />
    </div>
  );
};

export default RegistrationForm;
