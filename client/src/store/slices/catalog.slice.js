import { createSlice } from "@reduxjs/toolkit";
import {
  addCategory,
  deleteCategory,
  fetchCategories,
  fetchCategory,
  updateCategory,
} from "../actionCreator/catalog.actionCreator";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    category: [],
    allCategories: [],
    isLoading: false,
    isSuccessAddCategory: false,
    error: null,
  },
  reducers: {
    clearCategory: (state) => {
      state.isSuccessAddCategory = false;
      state.error = null;
      state.isLoading = false;
    },
  },
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
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.allCategories = [...state.allCategories, action.payload];
      state.isSuccessAddCategory = true;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addCategory.pending, (state) => {
      state.isLoading = true;
      state.isSuccessAddCategory = false;
    });
    builder.addCase(addCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.isSuccessAddCategory = false;
    });
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      state.allCategories = state.allCategories.map((category) => {
        if (category.id === action.payload.id) {
          return action.payload;
        }
        return category;
      });
      state.isSuccessAddCategory = true;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(updateCategory.pending, (state) => {
      state.isLoading = true;
      state.isSuccessAddCategory = false;
    });
    builder.addCase(updateCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.isSuccessAddCategory = false;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.allCategories = state.allCategories.filter(
        (category) => category.id !== action.payload.deletedCategoryInfo.id,
      );
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(deleteCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearCategory } = catalogSlice.actions;
export default catalogSlice.reducer;
