import { createAsyncThunk } from "@reduxjs/toolkit";
import { updatedQueryString } from "../../utils/queryParams/updatedQueryString";
import request from "../../utils/api/request";

const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (queryStr) => {
    const parsedParams = updatedQueryString(queryStr);
    const { res, err } = await request({
      url: `/products/filter${parsedParams}`,
    });
    if (res) return res;
    throw new Error(`Couldn't get products: ${err.data}`);
  },
);

const fetchProduct = createAsyncThunk("products/fetchProduct", async (id) => {
  const { res, err } = await request({
    url: `/products/${id}`,
  });
  if (res) return res;
  throw new Error(`Couldn't get product: ${err.data}`);
});

export { fetchProducts, fetchProduct };
