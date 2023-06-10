import { Box } from "@mui/material";
import Button from "../../Button/Button";
import styles from "./AccountInformation.module.scss";

const AccountOrders = () => {
  return (
    <Box>
      <h3 className={styles.title}>Address Book</h3>
      <Box sx={{ display: "flex", gap: "30px" }}>
        <div>
          <h4 className={styles.contact}>Default Billing Address</h4>
          <p className={styles.text}>
            You have not set a default billing address.
          </p>
          <Button className={styles["btn-account"]}>Edit Address</Button>
        </div>
        <div>
          <h4 className={styles.contact}>Default Shipping Address</h4>
          <p className={styles.text}>
            You have not set a default billing address.
          </p>
          <Button className={styles["btn-account"]}>Edit Address</Button>
        </div>
      </Box>
    </Box>
  );
};
export default AccountOrders;
