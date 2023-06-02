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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.category = [action.payload];
      return state;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.allCategories = action.payload;
      return state;
    });
  },
});

export const catalogSelector = (state) => state.catalog.category;
export const allCategoriesSelector = (state) => state.catalog.allCategories;
export default catalogSlice.reducer;
