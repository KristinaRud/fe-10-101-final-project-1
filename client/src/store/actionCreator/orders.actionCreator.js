import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const { res, err } = await request({
    url: `/orders`,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't get orders: ${err.data}`);
});

const createOrder = createAsyncThunk("order/createOrder", async (data) => {
  const { res, err } = await request({
    url: `/orders/order`,
    method: "POST",
    body: data,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't create wishList: ${err.data}`);
});

export { fetchOrders, createOrder };
