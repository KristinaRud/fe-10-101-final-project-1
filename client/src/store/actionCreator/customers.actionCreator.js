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

export { login, logout };
