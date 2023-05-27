import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../actionCreator/products.actionCreator";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled.type]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchProducts.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const selectProducts = (state) => state.products;
export default productsSlice.reducer;
