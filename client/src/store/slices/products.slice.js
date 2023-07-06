import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProductsForSearch,
  fetchProducts,
  addProduct,
  updateProduct,
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
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.products.push(action.payload);
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.products.products = state.products.products.map((product) =>
        product._id === action.payload._id ? action.payload : product,
      );
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(updateProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setProductsView } = productsSlice.actions;
export default productsSlice.reducer;
