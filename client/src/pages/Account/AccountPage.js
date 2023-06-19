import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./AccountPage.module.scss";
import LeftSideMenu from "../../components/Dashboard/LeftSideMenu/LeftSideMenu";
import AddressBook from "../../components/Dashboard/Description/AddressBook";
import UserInformation from "../../components/Dashboard/Description/UserInformation";
import AccountOrders from "../../components/Dashboard/Description/AccountOrders";
import { getCustomer } from "../../store/actionCreator/customers.actionCreator";
import { fetchOrders } from "../../store/actionCreator/orders.actionCreator";
import { selectOrders } from "../../store/selectors/orders.selector";
import CompareProducts from "../../components/LeftSidear/CompareProducts/CompareProducts";

const AccountPage = () => {
  const dispatch = useDispatch();
  const [activeComponent, setActiveComponent] = useState("Account Dashboard");
  const mediaMobile = useMediaQuery("(max-width: 480px)");
  // eslint-disable-next-line no-unused-vars
  const { orders } = useSelector(selectOrders);

  useEffect(() => {
    dispatch(getCustomer());
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleMenuItemClick = (menuItem) => {
    setActiveComponent(menuItem.item);
  };

  let componentToRender = null;

  if (activeComponent === "Account Dashboard") {
    componentToRender = (
      <>
        <UserInformation activeComponent={activeComponent} />
        <AddressBook activeComponent={activeComponent} />
        <AccountOrders />
      </>
    );
  } else if (activeComponent === "Account Information") {
    componentToRender = <UserInformation />;
  } else if (activeComponent === "Address Book") {
    componentToRender = <AddressBook />;
  } else if (activeComponent === "My Orders") {
    componentToRender = <AccountOrders />;
  }

  return (
    <Box
      sx={{
        margin: "10px auto",
        maxWidth: "1400px",
        padding: { xs: "0 15px", sm: "0 15px", xlg: "0" },
      }}
    >
      <h1 className={styles.title}>My Dashboard</h1>
      <Box
        sx={{
          display: { md: "flex", xl: "flex" },
          gap: { sm: "40px", md: "40px", xl: "80px" },
        }}
      >
        <LeftSideMenu onItemClick={handleMenuItemClick} />
        <Box sx={{ marginBottom: "50px", width: "100%" }}>
          {componentToRender}
        </Box>
        {mediaMobile && (
          <CompareProducts classname={styles["wrapper-compare"]} />
        )}
        {mediaMobile && (
          <CompareProducts isFavourite classname={styles["wrapper-compare"]} />
        )}
      </Box>
    </Box>
  );
};

export default AccountPage;
