import { Box } from "@mui/material";
import styles from "./DashboardPage.module.scss";
import LeftSideMenu from "../../components/Dashboard/LeftSideMenu/LeftSideMenu";
import AccountInformation from "../../components/Dashboard/Discription/AccountInformation";
import AddressBook from "../../components/Dashboard/Discription/AddressBook";

const DashboardPage = () => {
  return (
    <Box
      sx={{
        margin: "10px auto",
        maxWidth: "1400px",
        padding: { xs: "0 15px", sm: "0 15px", lg: "0" },
      }}
    >
      <h1 className={styles.title}>My Dashboard</h1>
      <Box sx={{ display: "flex", gap: "80px" }}>
        <LeftSideMenu />
        <Box sx={{ marginBottom: "50px", width: "100%" }}>
          <AccountInformation />
          <AddressBook />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
