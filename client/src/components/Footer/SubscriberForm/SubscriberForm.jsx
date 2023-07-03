import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";
import { useStyles, validationSchema } from "./utils";
import { addSubscriber } from "../../../store/actionCreator/subscribe.actionCreaator";
import { selectSubscribe } from "../../../store/selectors/subscribe.selector";

const SubscriberForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { error } = useSelector(selectSubscribe);
  const [textHelper, setTextHelper] = useState(
    "You have subscribed successfully",
  );
  const [submit, setSubmit] = useState(false);

  const handleSubmitForm = async (values, { resetForm }) => {
    dispatch(addSubscriber(values.email));
    resetForm();
    setSubmit(true);
  };

  useEffect(() => {
    if (error) {
      setTextHelper(error);
      setSubmit(false);
    }
  }, [error, textHelper]);

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => handleSubmitForm(values, actions)}
    >
      <Form className={classes.form}>
        <Field
          className={classes.input}
          as={TextField}
          name="email"
          type="email"
          label="Email"
          variant="filled"
          helperText={submit ? textHelper : "Please enter your email"}
        />
        <Button
          className={classes.submitButton}
          variant="contained"
          size="large"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
    </Formik>
  );
};

export default SubscriberForm;
