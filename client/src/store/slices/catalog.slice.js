import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategories,
  fetchCategory,
} from "../actionCreator/catalog.actionCreator";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    category: [],
    allCategories: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.category = [action.payload];
      state.isLoading = false;
      return state;
    });
    builder.addCase(fetchCategory.pending, (state) => {
      state.isLoading = true;
      return state;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.allCategories = action.payload;
      state.isLoading = false;
      return state;
    });
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
      return state;
    });
  },
});

export default catalogSlice.reducer;
