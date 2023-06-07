import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchCategory = createAsyncThunk(
  "catalog/fetchCategory",
  async (category) => {
    const { res, err } = await request({
      url: `/catalog/${category}`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get category: ${err.data}`);
  },
);

const fetchCategories = createAsyncThunk(
  "catalog/fetchCategories",
  async () => {
    const { res, err } = await request({
      url: `/catalog`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get category: ${err.data}`);
  },
);

export { fetchCategory, fetchCategories };
