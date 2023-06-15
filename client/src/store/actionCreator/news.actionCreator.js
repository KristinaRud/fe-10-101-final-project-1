import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const { res, err } = await request({
    url: `/slides`,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't get news: ${err.data}`);
});

export { fetchNews };
