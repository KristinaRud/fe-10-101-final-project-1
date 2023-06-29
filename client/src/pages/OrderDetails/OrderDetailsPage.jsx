// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box, CircularProgress } from "@mui/material";
import { getOrderByOrderNo } from "../../store/actionCreator/orders.actionCreator";
import { selectOrders } from "../../store/selectors/orders.selector";
import AddressBook from "../../components/Dashboard/Description/AddressBook";

const OrderDetailsPage = () => {
  const { orderNo } = useParams();
  const dispatch = useDispatch();
  const { order, isLoading } = useSelector(selectOrders);

  useEffect(() => {
    dispatch(getOrderByOrderNo(orderNo));
  }, [dispatch, orderNo]);

  if (isLoading) {
    return (
      <Box sx={{ margin: "40px" }} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Order № {orderNo}
      </Typography>
      <div>
        <p>
          Дата оформлення замовлення:{" "}
          {order?.date !== undefined
            ? order?.date.replace(/T.*/, "")
            : "Date is undefined"}
        </p>
        <p>Статус замовлення: Відправлене</p>
      </div>
      <div>
        <AddressBook
          address={order || "You have not set a default billing address."}
        />
        <div>
          <h3>Payment method</h3>
          <p>{order?.paymentMethod}</p>
        </div>
      </div>
      <div>
        <h3>Ordered products</h3>
      </div>
    </>
  );
};
export default OrderDetailsPage;
