import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";
import { setAuthToken } from "../../utils/api/setAuthToken";

const login = createAsyncThunk("customers/login", async (data) => {
  const { res, err } = await request({
    url: "/customers/login",
    method: "POST",
    body: data,
  });

  if (res && res.success) {
    setAuthToken(res.token);
    window.localStorage.setItem("token", res.token);
    return res;
  }
  setAuthToken(false);

  throw new Error(`Couldn't login: ${JSON.stringify(err.data)}`);
});

const loginGoogle = createAsyncThunk(
  "customers/loginGoogle",
  async (accessToken) => {
    const { res, err } = await request({
      url: "/customers/login-google",
      method: "POST",
      body: accessToken,
    });
    if (res && res.success) {
      setAuthToken(res.token);
      window.localStorage.setItem("token", res.token);
      return res;
    }
    setAuthToken(false);

    throw new Error(`Couldn't login: ${JSON.stringify(err.data)}`);
  },
);

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

    if (res) {
      return res;
    }
    throw new Error(`Couldn't change password: ${err.data}`);
  },
);

const signUp = createAsyncThunk("customers/signUp", async (values) => {
  const { res, err } = await request({
    url: "/customers",
    method: "POST",
    body: values,
  });

  if (res) {
    return res;
  }

  throw new Error(`Couldn't login: ${JSON.stringify(err.data)}`);
});

const forgotPassword = createAsyncThunk(
  "customers/forgotPassword",
  async (values) => {
    const { res, err } = await request({
      url: "/customers/forgot-password",
      method: "PUT",
      body: values,
    });
    if (res) {
      return res;
    }

    throw new Error(`Couldn't sent password: ${JSON.stringify(err.data)}`);
  },
);

export {
  login,
  logout,
  getCustomer,
  editPasswordCustomer,
  updateCustomer,
  signUp,
  loginGoogle,
  forgotPassword,
};
