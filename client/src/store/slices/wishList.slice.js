import { createSlice } from "@reduxjs/toolkit";
import {
  createWishList,
  fetchWishList,
} from "../actionCreator/wishList.actionCreator";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWishList.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
    builder.addCase(createWishList.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export default wishListSlice.reducer;
