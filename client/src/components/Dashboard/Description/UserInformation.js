import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import styles from "./UserInformation.module.scss";
import { selectCustomers } from "../../../store/selectors/customers.selector";
import EditCustomerForm from "../EditCustomerForm/EditCustomerForm";

const UserInformation = ({ activeComponent }) => {
  const { data } = useSelector(selectCustomers);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleForm = () => {
    setIsOpenForm(!isOpenForm);
  };

  return (
    <Box>
      <h3 className={styles.title}>Account Information</h3>
      <h4 className={styles.contact}>Contact information</h4>
      <p className={styles.text}>{`${data.firstName} ${data.lastName}`}</p>
      <p className={styles.text}>{data.email}</p>
      <p className={styles.text}>{data.telephone}</p>
      <div>
        <Button className={styles["btn-account"]} onClick={handleForm}>
          {isOpenForm ? "Close" : "Edit"}
        </Button>
        <Button className={styles["btn-account"]}>Change Password</Button>
      </div>
      {isOpenForm && <EditCustomerForm />}
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
