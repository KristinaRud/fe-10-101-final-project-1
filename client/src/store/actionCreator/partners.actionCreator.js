import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchPartners = createAsyncThunk(
  "partners/fetchPartners",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:4000/api/partners");
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export { fetchPartners };
