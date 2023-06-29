import { createSlice } from "@reduxjs/toolkit";
import {
  fetchWishList,
  deleteWishList,
  updateProductToWishList,
  deleteProductFromWishList,
  updateWishListLogin,
} from "../actionCreator/wishList.actionCreator";
import { structureDataWishList } from "../../utils/cart/structureData";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    itemsWishList: JSON.parse(localStorage.getItem("wishList")) || [],
  },
  reducers: {
    setItems: (state, action) => {
      if (action.payload === null) {
        action.payload = [];
      }
      state.itemsWishList = action.payload;
    },
    addToWishList: (state, action) => {
      if (state.itemsWishList === null) {
        state.itemsWishList = [];
      }
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
    deleteWish: (state) => {
      state.itemsWishList = [];
      localStorage.removeItem("wishList");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWishList.fulfilled, (state, action) => {
      state.itemsWishList = structureDataWishList(action.payload.products);
    });
    builder.addCase(deleteWishList.fulfilled, (state) => {
      state.itemsWishList = [];
    });
    builder.addCase(deleteProductFromWishList.fulfilled, (state, action) => {
      state.itemsWishList = structureDataWishList(action.payload.products);
    });
    builder.addCase(updateProductToWishList.fulfilled, (state, action) => {
      state.itemsWishList = structureDataWishList(action.payload.products);
    });
    builder.addCase(updateWishListLogin.fulfilled, (state, action) => {
      state.itemsWishList = structureDataWishList(action.payload.products);
      localStorage.removeItem("wishList");
    });
  },
});
export const { addToWishList, setItems, deleteWish } = wishListSlice.actions;
export default wishListSlice.reducer;
