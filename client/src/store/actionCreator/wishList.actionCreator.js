import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchWishList = createAsyncThunk(
  "wishList/fetchWishList",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:4000/api/wishList");
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export { fetchWishList };
