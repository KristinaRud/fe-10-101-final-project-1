import { createAsyncThunk } from "@reduxjs/toolkit";
import { debounce } from "lodash";
import { updatedQueryString } from "../../utils/queryParams/updatedQueryString";
import request from "../../utils/api/request";

const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (queryStr) => {
    const parsedParams = updatedQueryString(queryStr);
    const { res, err } = await request({
      url: `/products/filter${parsedParams}`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get products: ${err.data}`);
  },
);

const fetchProductsForSearch = createAsyncThunk(
  "products/fetchProductsForSearch",
  async (data) => {
    const { res, err } = await request({
      url: "/products/search",
      method: "POST",
      body: { query: data },
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get products: ${err.data}`);
  },
);

const debouncedFetchProductsForSearch = debounce((data, dispatch) => {
  dispatch(fetchProductsForSearch(data));
}, 800);

const debouncedSearch = (arg) => (dispatch) =>
  debouncedFetchProductsForSearch(arg, dispatch);

const addProduct = createAsyncThunk("products/addProduct", async (data) => {
  const { res, err } = await request({
    url: "/products",
    method: "POST",
    body: data,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't add product: ${JSON.stringify(err.data)}`);
});

const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, data }) => {
    const { res, err } = await request({
      url: `/products/${id}`,
      method: "PUT",
      body: data,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't update product: ${JSON.stringify(err.data)}`);
  },
);

export {
  fetchProducts,
  fetchProductsForSearch,
  debouncedSearch,
  addProduct,
  updateProduct,
};
