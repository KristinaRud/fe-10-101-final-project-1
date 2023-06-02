import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchColors = createAsyncThunk(
  "colors/fetchColors",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:4000/api/colors");
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export { fetchColors };
