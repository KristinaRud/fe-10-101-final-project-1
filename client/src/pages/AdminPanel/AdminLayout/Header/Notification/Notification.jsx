import { Badge, Box, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCustomers } from "../../../../../store/selectors/customers.selector";
import { updateCustomer } from "../../../../../store/actionCreator/customers.actionCreator";

const Notification = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [countOrder, setCountOrder] = useState(0);
  const [newOrder, setNewOrder] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector(selectCustomers);
  const { orders } = useSelector((state) => state.orders);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsShow(true);
  };

  useEffect(() => {
    if (Object.keys(orders).length > 0) {
      const lastVisit = new Date(data?.lastVisit);
      const newOrdersData = [];
      orders.orders.forEach((order) => {
        const orderDate = new Date(order.date);
        if (orderDate > lastVisit) {
          newOrdersData.push(order);
        }
      });
      setCountOrder(newOrder.length);
      setNewOrder(newOrdersData);
    }
  }, [data?.lastVisit, newOrder.length, orders]);

  useEffect(() => {
    if (isShow) {
      dispatch(
        updateCustomer({
          lastVisit: Date.now(),
        }),
      );
      setIsShow(false);
    }
  }, [dispatch, isShow]);
  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Badge badgeContent={countOrder} color="secondary">
          <NotificationsNoneOutlinedIcon />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {newOrder.length > 0 && (
          <MenuItem>
            {newOrder.length} new {newOrder.length === 1 ? "order" : "orders"}
          </MenuItem>
        )}
        {newOrder.length > 0 && <Divider />}
        {newOrder.length > 0 ? (
          newOrder.map((order) => (
            <MenuItem key={order._id}>
              No {order.orderNo}. Total sum:{" "}
              {order.totalSum.toLocaleString("ua")} ₴.
            </MenuItem>
          ))
        ) : (
          <MenuItem>No new order</MenuItem>
        )}
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link to="/admin/orders?perPage=10&startPage=1&sort=-date">
            See all orders
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Notification;
