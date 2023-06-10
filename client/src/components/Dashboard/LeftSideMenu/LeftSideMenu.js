import { Box } from "@mui/material";
import styles from "./LeftSideMenu.module.scss";
import MenuDashboard from "./MenuDashboard";

const LeftSideMenu = () => {
  return (
    <Box sx={{ marginBottom: "50px", minWidth: "300px" }}>
      <MenuDashboard />
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Compare Products</h3>
        <div>
          <p>You have no items to compare.</p>
        </div>
      </div>
      <div>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>My Wish List</h3>
          <p>You have no items in your wish list.</p>
        </div>
      </div>
    </Box>
  );
};

export default LeftSideMenu;
