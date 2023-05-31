import { createSlice } from "@reduxjs/toolkit";
import { fetchColors } from "../actionCreator/colors.actionCreator";

const colorsSlice = createSlice({
  name: "colors",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchColors.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectColors = (state) => state.colors;
export default colorsSlice.reducer;
