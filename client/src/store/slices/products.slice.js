import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProductsForSearch,
  fetchProducts,
} from "../actionCreator/products.actionCreator";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: {},
    productsForSearch: [],
    productsView: window.localStorage.getItem("productsView") || "grid",
    isSearchLoading: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    setProductsView: (state, action) => {
      state.productsView = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchProductsForSearch.fulfilled, (state, action) => {
      state.isSearchLoading = false;
      state.productsForSearch = action.payload;
    });
    builder.addCase(fetchProductsForSearch.pending, (state) => {
      state.isSearchLoading = true;
    });
  },
});

export const { setProductsView } = productsSlice.actions;
export default productsSlice.reducer;
