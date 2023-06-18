import { createSlice } from "@reduxjs/toolkit";
import {
  createShoppingCart,
  deleteProductFromCart,
  editProductFromCart,
  fetchShoppingCart,
  deleteShoppingCart,
  editShoppingCart,
  decreaseProductFromCart,
} from "../actionCreator/shoppingCart.actionCreator";
import { structureDataToStore } from "../../utils/cart/structureData";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    itemsCart: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.itemsCart = action.payload;
    },
    addToCart: (state, action) => {
      const itemIndex = state.itemsCart.findIndex(
        (el) => el.id === action.payload.id,
      );

      if (itemIndex === -1) {
        state.itemsCart.push({ ...action.payload, cartQuantity: 1 });
      } else {
        state.itemsCart[itemIndex].cartQuantity += 1;
      }
      localStorage.setItem("shoppingCart", JSON.stringify(state.itemsCart));
    },

    incrementCartItem: (state, action) => {
      const index = state.itemsCart.findIndex(
        (el) => el.id === action.payload.id,
      );
      if (index !== -1) {
        state.itemsCart[index].cartQuantity += 1;
      }
      localStorage.setItem("shoppingCart", JSON.stringify(state.itemsCart));
    },

    decrementCartItem: (state, action) => {
      const index = state.itemsCart.findIndex(
        (el) => el.id === action.payload.id,
      );
      if (index !== -1 && state.itemsCart[index].cartQuantity > 1) {
        state.itemsCart[index].cartQuantity -= 1;
      }
      localStorage.setItem("shoppingCart", JSON.stringify(state.itemsCart));
    },
    deleteCartItem: (state, action) => {
      const index = state.itemsCart.findIndex((el) => el.id === action.payload);
      if (index !== -1) {
        state.itemsCart.splice(index, 1);
      }
      localStorage.setItem("shoppingCart", JSON.stringify(state.itemsCart));
      if (JSON.parse(localStorage.getItem("shoppingCart")).length === 0) {
        localStorage.removeItem("shoppingCart");
      }
    },
    deleteCart: (state) => {
      state.itemsCart = [];
      localStorage.removeItem("shoppingCart");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShoppingCart.fulfilled, (state, action) => {
      state.itemsCart = structureDataToStore(action.payload.products);
    });
    builder.addCase(createShoppingCart.fulfilled, (state, action) => {
      state.itemsCart = structureDataToStore(action.payload.products);
      localStorage.removeItem("shoppingCart");
    });
    builder.addCase(editProductFromCart.fulfilled, (state, action) => {
      state.itemsCart = structureDataToStore(action.payload.products);
    });
    builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
      state.itemsCart = structureDataToStore(action.payload.products);
    });
    builder.addCase(deleteShoppingCart.fulfilled, (state, action) => {
      state.itemsCart = action.payload.products;
    });
    builder.addCase(editShoppingCart.fulfilled, (state, action) => {
      state.itemsCart = structureDataToStore(action.payload.products);
      localStorage.removeItem("shoppingCart");
    });
    builder.addCase(decreaseProductFromCart.fulfilled, (state, action) => {
      state.itemsCart = structureDataToStore(action.payload.products);
    });
  },
});

export const {
  addToCart,
  setItems,
  incrementCartItem,
  decrementCartItem,
  deleteCartItem,
  deleteCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
