import { Formik, Form, Field } from "formik";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "formik-mui";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "./LoginForm.module.scss";
import { validationSchema } from "./utils";
import { login } from "../../store/actionCreator/customers.actionCreator";
import LoginSnackbar from "./LoginSnackbar";
import { selectCustomers } from "../../store/selectors/customers.selector";

const LoginForm = () => {
  const dispatch = useDispatch();
  const customer = useSelector(selectCustomers);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    await dispatch(login(values));
    await setSubmit(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (submit) {
      setOpen(true);
      if (customer.isLogin) {
        setStatus("success");
        setSubmit(false);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setStatus("error");
        setSubmit(false);
      }
    }
  }, [customer.isLogin, navigate, submit]);

  return (
    <>
      <Formik
        initialValues={{ password: "", loginOrEmail: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className={styles.form}>
          <div className={styles.form__row}>
            <Field
              component={TextField}
              name="loginOrEmail"
              type="email"
              label="Email Address *"
              variant="standard"
            />
          </div>
          <div className={styles.form__row}>
            <Field
              component={TextField}
              name="password"
              id="standard-basic"
              type="password"
              label="Password *"
              variant="standard"
            />
          </div>
          <div className={styles.form__control}>
            <Button
              className={styles.form__btn}
              variant="contained"
              size="large"
              type="submit"
            >
              Log In
            </Button>
            <Link to="/" className={styles.form__link}>
              Forgot Your Password?
            </Link>
          </div>
        </Form>
      </Formik>
      <LoginSnackbar
        open={open}
        status={status}
        handleClose={handleClose}
        textSuccess="Login success!"
        textError="Login failed!"
      />
    </>
  );
};

export default LoginForm;

// TODO: forgot password, set timeout for snackbar
