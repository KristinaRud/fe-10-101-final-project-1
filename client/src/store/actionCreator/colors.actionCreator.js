import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchColors = createAsyncThunk(
  "colors/fetchColors",
  async (query = "") => {
    const { res, err } = await request({
      url: `/colors${query}`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get colors: ${err.data}`);
  },
);

export { fetchColors };
