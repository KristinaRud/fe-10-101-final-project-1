import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchWishList = createAsyncThunk("wishList/fetchWishList", async () => {
  const { res, err } = await request({
    url: `/wishList`,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't get wishList: ${err.data}`);
});

export { fetchWishList };
