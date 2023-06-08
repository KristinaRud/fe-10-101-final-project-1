import { createSlice } from "@reduxjs/toolkit";
import {
  getCustomer,
  login,
  logout,
} from "../actionCreator/customers.actionCreator";
import { checkToken } from "../../utils/api/checkToken";

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    data: {},
    isLogin: checkToken(window.localStorage.getItem("token")),
    token: window.localStorage.getItem("token") || null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isLogin = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.token = null;
      state.isLogin = false;
      state.data = {};
    });
    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default customersSlice.reducer;
