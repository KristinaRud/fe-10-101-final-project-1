import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchProductsByCategory = createAsyncThunk(
  "filters/fetchProductsByCategory",
  async (categories) => {
    const { res, err } = await request({
      url: `/products/filter?categories=${categories}`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get products: ${err.data}`);
  },
);

const fetchFiltersData = createAsyncThunk(
  "filters/fetchFiltersData",
  async () => {
    const { res, err } = await request({
      url: `/filters`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get filters: ${err.data}`);
  },
);

export { fetchProductsByCategory, fetchFiltersData };
