import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPartners,
  addPartners,
  updatePartners,
  deletePartners,
} from "../actionCreator/partners.actionCreator";

const partnersSlice = createSlice({
  name: "partners",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPartners.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addPartners.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(updatePartners.fulfilled, (state, action) => {
      return state.map((item) =>
        item._id === action.payload._id ? action.payload : item,
      );
    });
    builder.addCase(deletePartners.fulfilled, (state, action) => {
      return state.filter((item) => {
        return item.customId !== action.payload;
      });
    });
  },
});
export default partnersSlice.reducer;
