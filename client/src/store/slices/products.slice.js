import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProduct,
  fetchProducts,
} from "../actionCreator/products.actionCreator";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: {},
    currentProduct: {},
    productsView: window.localStorage.getItem("productsView") || "grid",
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
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentProduct = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { setProductsView } = productsSlice.actions;
export default productsSlice.reducer;
