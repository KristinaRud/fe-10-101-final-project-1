import { createSlice } from "@reduxjs/toolkit";
import {
  getCustomer,
  login,
  logout,
  editPasswordCustomer,
  updateCustomer,
  signUp,
  loginGoogle,
  forgotPassword,
} from "../actionCreator/customers.actionCreator";
import { checkToken } from "../../utils/api/checkToken";

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    data: {},
    isLogin: checkToken(window.localStorage.getItem("token")),
    token: window.localStorage.getItem("token") || null,
    error: null,
    isLoading: true,
    successSentForgotPassword: false,
    successSignup: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isLogin = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.token = null;
      state.isLogin = false;
      state.data = {};
    });
    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(editPasswordCustomer.fulfilled, (state, action) => {
      if (action.payload.password === "Password does not match") {
        state.error = "Password does not match";
      } else {
        state.data = action.payload.customer;
        state.error = null;
      }
    });
    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(editPasswordCustomer.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(updateCustomer.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(signUp.fulfilled, (state) => {
      state.successSignup = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.successSignup = false;
      state.error = action.error.message;
    });
    builder.addCase(loginGoogle.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isLogin = true;
    });
    builder.addCase(forgotPassword.fulfilled, (state) => {
      state.successSentForgotPassword = true;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.successSentForgotPassword = false;
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(forgotPassword.pending, (state) => {
      state.successSentForgotPassword = false;
      state.error = null;
      state.isLoading = true;
    });
  },
});

export default customersSlice.reducer;
