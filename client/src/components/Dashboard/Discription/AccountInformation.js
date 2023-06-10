import { Box } from "@mui/material";
import Button from "../../Button/Button";
import styles from "./AccountInformation.module.scss";

const AccountInformation = () => {
  return (
    <Box>
      <h3 className={styles.title}>Account Information</h3>
      <h4 className={styles.contact}>Contact information</h4>
      <p className={styles.text}>Name</p>
      <p className={styles.text}>email</p>
      <p className={styles.text}>phone</p>
      <div>
        <Button className={styles["btn-account"]}>Edit</Button>
        <Button className={styles["btn-account"]}>Change Password</Button>
      </div>
    </Box>
  );
};
export default AccountInformation;
