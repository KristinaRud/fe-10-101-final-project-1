import { createSlice } from "@reduxjs/toolkit";
import {
  createWishList,
  fetchWishList,
  deleteWishList,
  updateWishList,
  updateProductToWishList,
  deleteProductFromWishList,
} from "../actionCreator/wishList.actionCreator";
import { structureDataWishList } from "../../utils/cart/structureData";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    itemsWishList: JSON.parse(localStorage.getItem("wishList")) || [],
  },
  reducers: {
    addToWishList: (state, action) => {
      const index = state.itemsWishList.findIndex(
        (el) => el.id === action.payload.id,
      );

      if (index === -1) {
        state.itemsWishList.push(action.payload);
      } else {
        state.itemsWishList.splice(index, 1);
      }
      localStorage.setItem(`wishList`, JSON.stringify(state.itemsWishList));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWishList.fulfilled, (state, action) => {
      state.itemsWishList = structureDataWishList(action.payload.products);
    });
    builder.addCase(createWishList.fulfilled, (state, action) => {
      state.itemsWishList = structureDataWishList(action.payload.products);
      localStorage.removeItem("wishList");
    });
    builder.addCase(deleteWishList.fulfilled, (state, action) => {
      state.itemsWishList = structureDataWishList(action.payload.products);
    });
    builder.addCase(updateWishList.fulfilled, (state, action) => {
      state.itemsWishList = structureDataWishList(action.payload.products);
      localStorage.removeItem("wishList");
    });
    builder.addCase(deleteProductFromWishList.fulfilled, (state, action) => {
      state.itemsWishList = structureDataWishList(action.payload.products);
    });
    builder.addCase(updateProductToWishList.fulfilled, (state, action) => {
      state.itemsWishList = structureDataWishList(action.payload.products);
    });
  },
});
export const { addToWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
