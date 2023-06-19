import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";
import { setAuthToken } from "../../utils/api/setAuthToken";

const login = createAsyncThunk("customers/login", async (data) => {
  const { res, err } = await request({
    url: "/customers/login",
    method: "POST",
    body: data,
  });

  if (res.success) {
    setAuthToken(res.token);
    window.localStorage.setItem("token", res.token);
    return res;
  }
  setAuthToken(false);

  throw new Error(`Couldn't login: ${err.data}`);
});

const logout = createAsyncThunk("customers/logout", async () => {
  setAuthToken(null);
  window.localStorage.removeItem("token");
});

const getCustomer = createAsyncThunk("customers/getCustomer", async () => {
  const { res, err } = await request({
    url: "/customers/customer",
  });

  if (res) {
    return res;
  }
  throw new Error(`Couldn't get customer: ${err.data}`);
});
const updateCustomer = createAsyncThunk(
  "customers/updateCustomer",
  async (values) => {
    const { res, err } = await request({
      url: "/customers",
      method: "PUT",
      body: values,
    });

    if (res) {
      return res;
    }
    throw new Error(`Couldn't get customer: ${err.data}`);
  },
);

const editPasswordCustomer = createAsyncThunk(
  "customers/editPasswordCustomer",
  async (values) => {
    const { res, err } = await request({
      url: "/customers/password",
      method: "PUT",
      body: values,
    });

    // if (res.success) {
    //   window.localStorage.removeItem("token");
    //   setAuthToken(res.token);
    //   window.localStorage.setItem("token", res.token);
    //   return res;
    // }
    // setAuthToken(false);
    if (res) {
      return res;
    }
    throw new Error(`Couldn't change password: ${err.data}`);
  },
);

export { login, logout, getCustomer, editPasswordCustomer, updateCustomer };
