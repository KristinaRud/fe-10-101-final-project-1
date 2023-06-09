import { createSlice } from "@reduxjs/toolkit";
import {
  deleteProductFromCart,
  editProductFromCart,
  fetchShoppingCart,
  deleteShoppingCart,
  decreaseProductFromCart,
  putProductsToCartLogin,
} from "../actionCreator/shoppingCart.actionCreator";
import { structureDataToStore } from "../../utils/cart/structureData";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    itemsCart: JSON.parse(localStorage.getItem("shoppingCart")) || [],
  },
  reducers: {
    setItems: (state, action) => {
      if (action.payload === null) {
        action.payload = [];
      }
      state.itemsCart = action.payload;
    },
    addToCart: (state, action) => {
      if (state.itemsCart === null) {
        state.itemsCart = [];
      }
      const itemIndex = state.itemsCart?.findIndex(
        (el) => el.id === action.payload.id,
      );

      if (itemIndex === -1) {
        state.itemsCart.push({ ...action.payload, cartQuantity: 1 });
      } else {
        state.itemsCart[itemIndex].cartQuantity += 1;
      }
      localStorage.setItem("shoppingCart", JSON.stringify(state.itemsCart));
    },
    addAllToCart: (state, action) => {
      action.payload.forEach((item) => {
        const itemIndex = state.itemsCart?.findIndex((el) => el.id === item.id);

        if (itemIndex === -1) {
          state.itemsCart.push({ ...item, cartQuantity: 1 });
        } else {
          state.itemsCart[itemIndex].cartQuantity += 1;
        }
      });

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
    builder.addCase(editProductFromCart.fulfilled, (state, action) => {
      state.itemsCart = structureDataToStore(action.payload.products);
    });
    builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
      state.itemsCart = structureDataToStore(action.payload.products);
    });
    builder.addCase(deleteShoppingCart.fulfilled, (state) => {
      state.itemsCart = [];
    });
    builder.addCase(decreaseProductFromCart.fulfilled, (state, action) => {
      state.itemsCart = structureDataToStore(action.payload.products);
    });
    builder.addCase(putProductsToCartLogin.fulfilled, (state, action) => {
      window.localStorage.removeItem("shoppingCart");
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
  addAllToCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
