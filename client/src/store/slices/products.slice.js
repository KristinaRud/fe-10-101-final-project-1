import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../actionCreator/products.actionCreator";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: {},
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
  },
});

export const selectProducts = (state) => state.products.products;
export const selectProductsView = (state) => state.products.productsView;
export const { setProductsView } = productsSlice.actions;
export default productsSlice.reducer;
