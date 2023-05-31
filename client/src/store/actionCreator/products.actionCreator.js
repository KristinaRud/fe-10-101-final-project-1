import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (queryStr, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/products/filter${queryStr}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export { fetchProducts };
