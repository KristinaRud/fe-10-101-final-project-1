import { createSlice } from "@reduxjs/toolkit";
import {
  createOrder,
  fetchOrders,
  getProductsFromCart,
  getOrderByOrderNo,
} from "../actionCreator/orders.actionCreator";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    allOrders: [],
    order: {},
    orders: {},
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearOrders: (state) => {
      state.orders = {};
      state.allOrders = [];
      state.order = {};
      state.products = [];
      state.isLoading = false;
      state.error = null;
    },
    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allOrders = action.payload;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getOrderByOrderNo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOrderByOrderNo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.order = action.payload;
    });
    builder.addCase(getOrderByOrderNo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getProductsFromCart.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.error = null;
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default ordersSlice.reducer;

export const { clearOrders, addProducts } = ordersSlice.actions;
