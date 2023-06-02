import { createAsyncThunk } from "@reduxjs/toolkit";
import { updatedQueryString } from "../../utils/updatedQueryString";

const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (queryStr, thunkAPI) => {
    try {
      const parsedParams = updatedQueryString(queryStr);
      const response = await fetch(
        `http://localhost:4000/api/products/filter${parsedParams}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export { fetchProducts };
