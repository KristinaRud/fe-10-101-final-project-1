import { createSlice } from "@reduxjs/toolkit";
import { fetchPartners } from "../actionCreator/partners.actionCreator";

const partnersSlice = createSlice({
  name: "partners",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPartners.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default partnersSlice.reducer;
