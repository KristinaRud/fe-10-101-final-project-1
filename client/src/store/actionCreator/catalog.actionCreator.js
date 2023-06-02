import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchCategory = createAsyncThunk(
  "catalog/fetchCategory",
  async (category, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/catalog/${category}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const fetchCategories = createAsyncThunk(
  "catalog/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:4000/api/catalog`);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

export { fetchCategory, fetchCategories };
