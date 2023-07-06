import { useTheme } from "@mui/material/styles";
import { Box, Toolbar, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header/Header";
import DrawerApp from "./Drawer/Drawer";
import { selectCustomers } from "../../../store/selectors/customers.selector";
import {
  getCustomer,
  updateCustomer,
} from "../../../store/actionCreator/customers.actionCreator";
import { getFilteredOrders } from "../../../store/actionCreator/orders.actionCreator";

const AdminLayout = () => {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down("lg"));
  const [open, setOpen] = useState(false);
  const { data } = useSelector(selectCustomers);
  const dispatch = useDispatch();
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(!matchDownLG);
  }, [matchDownLG]);

  useEffect(() => {
    dispatch(getCustomer());
    dispatch(getFilteredOrders(""));
  }, [dispatch]);

  useEffect(() => {
    if (data?.isAdmin) {
      const handleBeforeUnload = () => {
        dispatch(updateCustomer({ lastVisit: Date.now() }));
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [data?.isAdmin, dispatch]);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header handleDrawerToggle={handleDrawerToggle} open={open} />
      <DrawerApp handleDrawerToggle={handleDrawerToggle} open={open} />
      <Box
        component="main"
        sx={{ width: "100%", flexGrow: 1, p: { xs: 2, sm: 3 } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
