import { createSlice } from "@reduxjs/toolkit";
import {
  addComparisonProduct,
  fetchComparisonProducts,
  removeComparisonProduct,
} from "../actionCreator/comparison.actionCreator";

const comparisonSlice = createSlice({
  name: "comparison",
  initialState: {
    comparison: {},
    operationSuccess: false,
    loading: false,
    errorComparison: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComparisonProducts.pending, (state) => {
        state.loading = true;
        state.errorComparison = null;
      })
      .addCase(fetchComparisonProducts.fulfilled, (state, action) => {
        state.comparison = action.payload;
        state.loading = false;
        state.errorComparison = null;
      })
      .addCase(fetchComparisonProducts.rejected, (state, action) => {
        state.loading = false;
        state.errorComparison = action.error.message;
      })
      .addCase(addComparisonProduct.fulfilled, (state) => {
        state.operationSuccess = true;
        state.errorComparison = null;
      })
      .addCase(addComparisonProduct.rejected, (state, action) => {
        state.operationSuccess = false;
        state.errorComparison = action.error.message;
      })
      .addCase(removeComparisonProduct.fulfilled, (state) => {
        state.operationSuccess = true;
        state.errorComparison = null;
      })
      .addCase(removeComparisonProduct.rejected, (state, action) => {
        state.operationSuccess = false;
        state.errorComparison = action.error.message;
      });
  },
});

export default comparisonSlice.reducer;
