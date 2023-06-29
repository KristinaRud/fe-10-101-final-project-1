/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import styles from "./AddressBook.module.scss";

// eslint-disable-next-line react/prop-types
const AddressBook = ({ activeComponent, address }) => {
  return (
    <Box>
      <h3 className={styles.title}>{activeComponent}</h3>
      <Box
        sx={{
          display: "flex",
          gap: { sm: "40px", md: "40px", xl: "80px" },
          flexWrap: "wrap",
          justifyContent: { sm: "center", md: "start" },
        }}
      >
        <div className={styles["wrapper-address"]}>
          <h4 className={styles.address}>Default Billing Address</h4>
          <p className={styles.text}>
            {address !== undefined
              ? `${address?.postOfficeBranch?.CityDescription}, ${address?.postOffice}, ${address?.postOfficeBranch?.Description}`
              : address}
          </p>
          <br />
        </div>
      </Box>
      {!activeComponent && (
        <div>
          <h4 className={styles.address}>Additional Addresses</h4>
          <div className={styles["wrapper-address"]}>
            <p className={styles.text}>You have not set an address.</p>
            <Button className={styles["btn-account"]}>Edit Address</Button>
          </div>
        </div>
      )}
    </Box>
  );
};

AddressBook.propTypes = {
  activeComponent: PropTypes.string,
};

AddressBook.defaultProps = {
  activeComponent: "",
};
export default AddressBook;
