import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProductsByCategory = createAsyncThunk(
  "filters/fetchProductsByCategory",
  async (categories, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/products/filter?categories=${categories}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const fetchFiltersData = createAsyncThunk(
  "filters/fetchFiltersData",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:4000/api/filters`);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export { fetchProductsByCategory, fetchFiltersData };
