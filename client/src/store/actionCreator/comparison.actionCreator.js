import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchComparisonProducts = createAsyncThunk(
  "comparison/fetchComparisonProducts",
  async () => {
    const { res, err } = await request({
      url: `/comparison-products`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get comparison: ${err.data}`);
  },
);

const addComparisonProduct = createAsyncThunk(
  "comparison/addComparisonProduct",
  async (id) => {
    const { res, err } = await request({
      url: `/comparison-products/${id}`,
      method: "PUT",
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't add comparison: ${err.data}`);
  },
);

const removeComparisonProduct = createAsyncThunk(
  "comparison/removeComparisonProduct",
  async (id) => {
    const { res, err } = await request({
      url: `/comparison-products/${id}`,
      method: "DELETE",
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't remove comparison: ${err.data}`);
  },
);

export {
  fetchComparisonProducts,
  addComparisonProduct,
  removeComparisonProduct,
};
