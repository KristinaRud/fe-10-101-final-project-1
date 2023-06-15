import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchFiltersData = createAsyncThunk(
  "filters/fetchFiltersData",
  async (query = "") => {
    const { res, err } = await request({
      url: `/filters${query}`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get filters: ${err.data}`);
  },
);

export { fetchFiltersData };
