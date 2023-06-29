import {
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-mui";
import { forgotPassword } from "../../../store/actionCreator/customers.actionCreator";
import { selectCustomers } from "../../../store/selectors/customers.selector";

const ForgotPasswordDialog = ({ open, setOpen }) => {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const { isLoading, error } = useSelector(selectCustomers);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };

  const handleBackdropClose = () => {
    setOpenBackdrop(false);
  };

  const handleSentEmail = async (values) => {
    setOpenBackdrop(true);
    await dispatch(forgotPassword(values));
    setSubmit(true);
  };

  const handleClickCloseActions = () => {
    setSubmit(false);
    setOpen(false);
    setSecondModal(false);
  };

  useEffect(() => {
    if (submit) {
      if (isLoading) {
        setOpenBackdrop(true);
      } else {
        setOpenBackdrop(false);
        setSecondModal(true);
      }
    }
  }, [isLoading, submit]);

  return (
    <Dialog open={open} onClose={handleClose}>
      {secondModal ? (
        <>
          <DialogTitle>
            {error
              ? "An error occurred while sending the password"
              : "The password email has been successfully sent to your email address"}
          </DialogTitle>
          <DialogContent>
            {error
              ? `${error}`
              : "We recommend immediately changing the password in the user's personal account"}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickCloseActions}>OK</Button>
          </DialogActions>
        </>
      ) : (
        <>
          <DialogTitle>Please enter your email address</DialogTitle>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            })}
            onSubmit={handleSentEmail}
          >
            <Form>
              <DialogContent>
                <Field
                  component={TextField}
                  autoFocus
                  name="email"
                  type="text"
                  label="Email Address *"
                  variant="standard"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} type="button">
                  Cancel
                </Button>
                <Button type="submit">OK</Button>
              </DialogActions>
            </Form>
          </Formik>
        </>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleBackdropClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Dialog>
  );
};

ForgotPasswordDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
export default ForgotPasswordDialog;
