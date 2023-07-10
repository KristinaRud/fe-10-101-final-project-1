import Typography from "@mui/material/Typography";
import { Field, Form, Formik } from "formik";
import { Button } from "@mui/material";
import { TextField } from "formik-mui";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import ShopInfoStatic from "../../components/ShopInfoStatic/ShopInfoStatic";
import styles from "./ContactUs.module.scss";
import { initialValues, validationSchema } from "./ContactUs.helpers-config";
import BreadcrumbsApp from "../../components/BreadcrumbsApp/BreadcrumbsApp";
import TelephoneField from "./TelephoneField/TelephoneField";

const ContactUs = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [activeSubmit, setActiveSubmit] = useState(true);
  const handleClose = () => {
    setOpen(false);
    setActiveSubmit(false);
  };
  const handleSubmit = (values) => {
    setOpen(true);
    setUsername(values.name);
  };
  return (
    <div className={styles.container}>
      <BreadcrumbsApp />
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
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form className={(styles.form, styles["form-wrapper"])} noValidate>
              <Field
                component={TextField}
                name="name"
                type="text"
                label="Your Name *"
                variant="standard"
                className={(styles.form__row, styles.form__field)}
              />
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Your Email *"
                variant="standard"
                className={(styles.form__row, styles.form__field)}
              />
              <TelephoneField
                name="mobile"
                className={(styles.form__row, styles.form__field)}
              />
              <Field
                component={TextField}
                name="additional"
                type="text"
                label="What’s on your mind? *"
                variant="standard"
                className={(styles.form__row, styles.form__field)}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                className={(styles.form__btn, styles["form__submit-btn"])}
                disabled={!activeSubmit}
              >
                Submit
              </Button>
            </Form>
          </Formik>
        </div>
        <ShopInfoStatic className={styles.details} />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className={styles.modal}>
            <Typography id="transition-modal-title" variant="h6" component="p">
              Thank you, {username}!
            </Typography>
            <Typography
              id="transition-modal-description"
              styles={{ marginTop: 2 }}
            >
              Your request was accepted.
              <br />
              Our agent will call you during 1 hour.
              <br />
              Please, be patient.
              <Link to="/" className={styles.button}>
                Back home
              </Link>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ContactUs;
