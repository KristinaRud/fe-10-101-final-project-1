import { createSlice } from "@reduxjs/toolkit";
import { fetchCategory } from "../actionCreator/catalog.actionCreator";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state = [action.payload];
      return state;
    });
  },
});

export const catalogSelector = (state) => state.catalog;
export default catalogSlice.reducer;
