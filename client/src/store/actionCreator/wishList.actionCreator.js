import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchWishList = createAsyncThunk("wishList/fetchWishList", async () => {
  const { res, err } = await request({
    url: `/wishList`,
  });
  console.log(res);
  console.log(err);
  if (res) {
    return res;
  }
  throw new Error(`Couldn't get wishList: ${err.data}`);
});

const createWishList = createAsyncThunk(
  "wishList/createWishList",
  async (data) => {
    const { res, err } = await request({
      url: `/wishList`,
      method: "POST",
      body: data,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't create wishList: ${err.data}`);
  },
);

export { fetchWishList, createWishList };
