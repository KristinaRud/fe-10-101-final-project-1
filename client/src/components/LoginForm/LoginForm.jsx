import { Formik, Form } from "formik";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      onSubmit={async (values) => handleSubmit(values)}
    >
      <Form className={styles.form}>
        <div className={styles.form__row}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
          />
        </div>
        <div className={styles.form__row}>
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
          />
        </div>
        <div className={styles.form__control}>
          <Button className={styles.form__btn} variant="contained" size="large">
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
