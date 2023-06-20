import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import styles from "./UserInformation.module.scss";
import { selectCustomers } from "../../../store/selectors/customers.selector";
import EditPasswordForm from "../EditAccountForms/EditPasswordForm";
import LoginSnackbar from "../../LoginForm/LoginSnackbar";
import EditUserForm from "../EditAccountForms/EditUserForm";

const UserInformation = ({ activeComponent }) => {
  const [submit, setSubmit] = useState(false);
  const { data, error } = useSelector(selectCustomers);
  const [openFormUser, setOpenFormUser] = useState(false);
  const [openFormPassword, setOpenFormPassword] = useState(false);
  const [status, setStatus] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [textError, setTextError] = useState("Change failed!");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (Object.keys(data).length && submit) {
      setStatus("success");
      setOpenSnackbar(true);
      setOpenFormUser(false);
      setOpenFormPassword(false);
      setSubmit(false);
    }
    if (error && submit) {
      setTextError(JSON.stringify(error));
      setOpenSnackbar(true);
      setStatus("error");
      setSubmit(false);
      setOpenFormUser(true);
      setOpenFormPassword(true);
    }
  }, [submit, error, data]);

  return (
    <Box>
      <h3 className={styles.title}>Account Information</h3>
      <Box
        sx={{
          display: "flex",
          gap: { sm: "40px", md: "40px", xl: "80px" },
          flexWrap: "wrap",
          justifyContent: { sm: "center", md: "start" },
        }}
      >
        <div className={styles["wrapper-account"]}>
          <h4 className={styles.contact}>Contact information</h4>
          <p className={styles.text}>{`${data.firstName} ${data.lastName}`}</p>
          <p className={styles.text}>{data.email}</p>
          <p className={styles.text}>{data.mobile}</p>
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

          {openFormUser && <EditUserForm setSubmit={setSubmit} />}
          {openFormPassword && <EditPasswordForm setSubmit={setSubmit} />}
        </div>
      </Box>
      <LoginSnackbar
        open={openSnackbar}
        status={status}
        handleClose={handleClose}
        textSuccess="Edit successes!"
        textError={textError}
      />

      {!activeComponent && (
        <div className={styles["wrapper-add"]}>
          <h4 className={styles.contact}>Additional Information</h4>
          <p className={styles.text}>
            <span>Birth Date: </span>
            {data.birthdate}
          </p>
          <p className={styles.text}>
            <span>Gender: </span>
            {data.gender}
          </p>
          <p className={styles.text}>
            <span>Login: </span>
            {data.login}
          </p>
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
