import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { validationSchema, useStyles } from "./utils";
import { updateSubscriber } from "../../store/actionCreator/subscribe.actionCreaator";
import { selectSubscribe } from "../../store/selectors/subscribe.selector";

const UnsubscribePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { error } = useSelector(selectSubscribe);
  const [textHelper, setTextHelper] = useState(
    "You have Unsubscribed successfully",
  );
  const [submit, setSubmit] = useState(false);

  const handleSubmitForm = async (values, { resetForm }) => {
    dispatch(updateSubscriber(values.email));
    resetForm();
    setSubmit(true);
  };

  useEffect(() => {
    if (error && submit) {
      setTextHelper(JSON.stringify(error));
      setSubmit(false);
    }
  }, [error, textHelper, submit]);

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Manage Your Email Preferences
      </Typography>
      <Typography variant="body1" align="center">
        Enter your email to unsubscribe from our emails:
      </Typography>

      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => handleSubmitForm(values, actions)}
      >
        <Form className={classes.form}>
          <Field
            as={TextField}
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            helperText={submit ? textHelper : "Please enter your email"}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Unsubscribe
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default UnsubscribePage;
