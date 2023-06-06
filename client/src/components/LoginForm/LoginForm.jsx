import { Formik, Form, Field } from "formik";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TextField } from "formik-mui";
import styles from "./LoginForm.module.scss";
import { validationSchema } from "./utils";

const LoginForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ password: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values) => handleSubmit(values)}
    >
      <Form className={styles.form}>
        <div className={styles.form__row}>
          <Field
            component={TextField}
            name="email"
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
            Sign In
          </Button>
          <Link to="/" className={styles.form__link}>
            Forgot Your Password?
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
