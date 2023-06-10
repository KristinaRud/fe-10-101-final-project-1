import { Box } from "@mui/material";
import Button from "../../Button/Button";
import styles from "./AddressBook.module.scss";

const AddressBook = () => {
  return (
    <Box>
      <h3 className={styles.title}>Address Book</h3>
      <Box sx={{ display: "flex", gap: "80px" }}>
        <div className={styles["wrapper-address"]}>
          <h4 className={styles.address}>Default Billing Address</h4>
          <p className={styles.text}>
            You have not set a default billing address.
          </p>
          <Button className={styles["btn-account"]}>Edit Address</Button>
        </div>
        <div className={styles["wrapper-address"]}>
          <h4 className={styles.address}>Default Shipping Address</h4>
          <p className={styles.text}>
            You have not set a default billing address.
          </p>
          <Button className={styles["btn-account"]}>Edit Address</Button>
        </div>
      </Box>
    </Box>
  );
};
export default AddressBook;
