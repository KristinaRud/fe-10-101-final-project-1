import { Field, Form, Formik } from "formik";
import { RadioGroup, TextField } from "formik-mui";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./RegistrationForm.module.scss";
import { validationSchema } from "./utils";
import BirthdateField from "./BirthdateField/BirthdateField";
import TelephoneField from "./TelephoneField/TelephoneField";
import request from "../../utils/api/request";
import LoginSnackbar from "../LoginForm/LoginSnackbar";
import { updateShoppingCart } from "../../utils/cart/updateCart";
import { createShoppingCart } from "../../store/actionCreator/shoppingCart.actionCreator";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [status, setStatus] = useState("");
  const [textError, setTextError] = useState("Sign in failed!");
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleSubmit = async (values) => {
    const { res, err } = await request({
      url: "/customers",
      method: "POST",
      body: values,
    });
    if (res) {
      setStatus("success");
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    if (err) {
      setTextError(err.request.responseText);
      setStatus("error");
      setOpenSnackbar(true);
    }
    if (localStorage.getItem("shoppingCart")) {
      await dispatch(updateShoppingCart(createShoppingCart));
    }
  };
  return (
    <>
      <Typography component="h2" className={styles.title}>
        Sign In
      </Typography>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          login: "",
          email: "",
          password: "",
          confirmPassword: "",
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
              size="large"
              type="submit"
            >
              Sign In
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
    </>
  );
};

export default RegistrationForm;
