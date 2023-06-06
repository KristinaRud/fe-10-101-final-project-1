import { createSlice } from "@reduxjs/toolkit";
import { fetchWishList } from "../actionCreator/wishList.actionCreator";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWishList.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export default wishListSlice.reducer;
