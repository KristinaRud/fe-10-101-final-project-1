import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";
import { initialValues } from "./ContactUs.helpers-config";
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <div>breadcrumbs</div>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <Typography
            className={styles.form__title}
            variant="h2"
            component="h2"
            fontSize={32}
            fontWeight={600}
          >
            Contact Us
          </Typography>
          <Typography
            component="p"
            fontSize={16}
            fontWeight={300}
            className={styles.form__subtitle}
          >
            We love hearing from you, our Shop customers. <br />
            Please contact us and we will make sure to get back to you as soon
            as we possibly can.
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => handleSubmit(values)}
          >
            <Form className={(styles.form, styles["form-wrapper"])}>
              <TextField
                required
                id="standard-basic"
                label="Your Name"
                variant="standard"
                type="text"
                name="name"
                className={(styles.form__row, styles.form__field)}
              />
              <TextField
                required
                id="standard-basic"
                label="Your Email"
                variant="standard"
                type="email"
                name="email"
                className={(styles.form__row, styles.form__field)}
              />
              <TextField
                id="standard-basic"
                label="Your Phone"
                variant="standard"
                type="text"
                name="phone"
                className={(styles.form__row, styles.form__field)}
              />
              <TextField
                required
                id="standard-basic"
                label="What’s on your mind?"
                variant="standard"
                type="text"
                name="additional"
                className={(styles.form__row, styles.form__field)}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                className={(styles.form__btn, styles["form__submit-btn"])}
              >
                Submit
              </Button>
            </Form>
          </Formik>
        </div>
        <div className={styles.details} />
      </div>
    </>
  );
};

export default ContactUs;
