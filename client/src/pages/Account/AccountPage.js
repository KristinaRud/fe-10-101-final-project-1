import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Routes, Route } from "react-router-dom";
import styles from "./AccountPage.module.scss";
import LeftSideMenu from "../../components/Dashboard/LeftSideMenu/LeftSideMenu";
import AddressBook from "../../components/Dashboard/Description/AddressBook";
import UserInformation from "../../components/Dashboard/Description/UserInformation";
import AccountOrders from "../../components/Dashboard/Description/AccountOrders";
import { getCustomer } from "../../store/actionCreator/customers.actionCreator";
import { fetchOrders } from "../../store/actionCreator/orders.actionCreator";
import CompareProducts from "../../components/LeftSidear/CompareProducts/CompareProducts";
import { selectWishList } from "../../store/selectors/wishList.selector";
import { selectCustomers } from "../../store/selectors/customers.selector";
import { fetchWishList } from "../../store/actionCreator/wishList.actionCreator";
import { selectOrders } from "../../store/selectors/orders.selector";
import BreadcrumbsApp from "../../components/BreadcrumbsApp/BreadcrumbsApp";
import OrderDetailsPage from "../OrderDetails/OrderDetailsPage";

const AccountPage = () => {
  const dispatch = useDispatch();
  const [activeComponent, setActiveComponent] = useState("Account Dashboard");
  const mediaMobile = useMediaQuery("(max-width: 480px)");
  const { itemsWishList } = useSelector(selectWishList);
  const { isLogin } = useSelector(selectCustomers);
  const { allOrders } = useSelector(selectOrders);

  useEffect(() => {
    if (isLogin) {
      dispatch(getCustomer());
      dispatch(fetchWishList());
      dispatch(fetchOrders());
    }
  }, [dispatch, isLogin]);

  const handleMenuItemClick = (menuItem) => {
    setActiveComponent(menuItem.item);
  };

  let componentToRender = null;

  if (activeComponent === "Account Dashboard") {
    componentToRender = (
      <>
        <AccountOrders
          title="Last order"
          arrayOrders={
            allOrders.length > 0 ? [allOrders[allOrders.length - 1]] : []
          }
        />
        <div className={styles.accinfo}>
          <UserInformation activeComponent={activeComponent} />
          <AddressBook
            activeComponent={activeComponent}
            address={
              allOrders.length > 0 || allOrders !== undefined
                ? allOrders[allOrders.length - 1]
                : "You have not set a default billing address."
            }
          />
        </div>
      </>
    );
  } else if (activeComponent === "Account Information") {
    componentToRender = <UserInformation />;
  } else if (activeComponent === "Address Book") {
    componentToRender = (
      <AddressBook
        activeComponent={activeComponent}
        address={
          allOrders.length > 0 || allOrders !== undefined
            ? allOrders[allOrders.length - 1]
            : "You have not set a default billing address."
        }
      />
    );
  } else if (activeComponent === "My Orders") {
    componentToRender = (
      <Routes>
        <Route
          path="/orders"
          element={
            <AccountOrders
              title="Order history"
              arrayOrders={allOrders.length > 0 ? allOrders : []}
            />
          }
        />
        <Route path="/orders/:orderNo" element={<OrderDetailsPage />} />
      </Routes>
    );
  }

  return (
    <>
      <Box
        sx={{
          margin: "10px auto",
          maxWidth: "1400px",
          padding: { xs: "0 15px", sm: "0 15px", xlg: "0" },
        }}
      >
        {" "}
        <BreadcrumbsApp />
        <Typography variant="h2" className={styles.title}>
          My Dashboard
        </Typography>
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
            <CompareProducts
              isFavourite
              data={itemsWishList}
              classname={styles["wrapper-compare"]}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default AccountPage;
