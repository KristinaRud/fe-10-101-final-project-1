import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import styles from "./UserInformation.module.scss";
import { selectCustomers } from "../../../store/selectors/customers.selector";
import EditPasswordForm from "../EditAccountForms/EditPasswordForm";
import LoginSnackbar from "../../LoginForm/LoginSnackbar";
import { editCustomer } from "../../../store/actionCreator/customers.actionCreator";
import EditUserForm from "../EditAccountForms/EditUserForm";

const UserInformation = ({ activeComponent }) => {
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);
  const { data } = useSelector(selectCustomers);
  const [openFormUser, setOpenFormUser] = useState(false);
  const [openFormPassword, setOpenFormPassword] = useState(false);
  const [status, setStatus] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmitForm = async (values) => {
    await dispatch(editCustomer(values));
    await setSubmit(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (submit) {
      setStatus("success");
      setOpenSnackbar(true);
      setOpenFormUser(false);
      setOpenFormPassword(false);
    } else {
      setStatus("error");
    }
  }, [dispatch, submit]);

  return (
    <Box>
      <h3 className={styles.title}>Account Information</h3>
      <h4 className={styles.contact}>Contact information</h4>
      <p className={styles.text}>{`${data.firstName} ${data.lastName}`}</p>
      <p className={styles.text}>{data.email}</p>
      <p className={styles.text}>{data.telephone}</p>
      <div>
        <Button
          className={styles["btn-account"]}
          onClick={() => {
            setOpenFormUser(!openFormUser);
          }}
        >
          {openFormUser ? "Close" : "Edit"}
        </Button>
        <Button
          className={styles["btn-account"]}
          onClick={() => {
            setOpenFormPassword(!openFormPassword);
          }}
        >
          {openFormPassword ? "Close" : "Change Password"}
        </Button>
      </div>
      {openFormUser && <EditUserForm handleSubmitForm={handleSubmitForm} />}
      {openFormPassword && (
        <EditPasswordForm handleSubmitForm={handleSubmitForm} />
      )}
      <LoginSnackbar
        open={openSnackbar}
        status={status}
        handleClose={handleClose}
        textSuccess="Edit successes!"
        textError={"Your new password is not change"}
      />

      {!activeComponent && (
        <div className={styles["wrapper-add"]}>
          <h4 className={styles.contact}>Additional Information</h4>
          <div className={styles["wrapper-text"]}>
            <h6 className={styles.text}>Birth Date:</h6>
            <p className={styles.text}>{data.birthdate}</p>
          </div>
          <div className={styles["wrapper-text"]}>
            <h6 className={styles.text}>Gender:</h6>
            <p className={styles.text}>{data.gander}</p>
          </div>
        </div>
      )}
    </Box>
  );
};

UserInformation.propTypes = {
  activeComponent: PropTypes.string,
};

UserInformation.defaultProps = {
  activeComponent: "",
};

export default UserInformation;
