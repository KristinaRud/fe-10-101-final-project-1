import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "../actionCreator/orders.actionCreator";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: {},
    isLoading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default ordersSlice.reducer;
