import { createSlice } from "@reduxjs/toolkit";
import {
  addColor,
  deleteColor,
  fetchColors,
  updateColor,
} from "../actionCreator/colors.actionCreator";

const colorsSlice = createSlice({
  name: "colors",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchColors.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteColor.fulfilled, (state, action) => {
      return state.filter((color) => color._id !== action.payload);
    });
    builder.addCase(addColor.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
    builder.addCase(updateColor.fulfilled, (state, action) => {
      return state.map((color) => {
        if (color._id === action.payload._id) {
          return action.payload;
        }
        return color;
      });
    });
  },
});

export default colorsSlice.reducer;
