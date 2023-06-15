import { createSlice } from "@reduxjs/toolkit";
import {
  createShoppingCart,
  deleteProductFromCart,
  editProductFromCart,
  fetchShoppingCart,
  deleteShoppingCart,
  updateShoppingCart,
} from "../actionCreator/shoppingCart.actionCreator";

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
        state.itemsCart.push({ ...action.payload, count: 1 });
      } else {
        state.itemsCart[itemIndex].count += 1;
      }
      if (action.payload.isLogin) {
        if (localStorage.getItem("shoppingCart")) {
          createShoppingCart(JSON.parse(localStorage.getItem("shoppingCart")));
          localStorage.removeItem("shoppingCart");
        }

        editProductFromCart(state.itemsCart);
      } else {
        localStorage.setItem("shoppingCart", JSON.stringify(state.itemsCart));
      }
    },

    incrementCartItem: (state, action) => {
      const index = state.itemsCart.findIndex(
        (el) => el.id === action.payload.id,
      );
      if (index !== -1) {
        state.itemsCart[index].count += 1;
      }

      if (action.payload.isLogin) {
        editProductFromCart(state.itemsCart);
      } else {
        localStorage.setItem("shoppingCart", JSON.stringify(state.itemsCart));
      }
    },

    decrementCartItem: (state, action) => {
      const index = state.itemsCart.findIndex(
        (el) => el.id === action.payload.id,
      );
      if (index !== -1 && state.itemsCart[index].count > 1) {
        state.itemsCart[index].count -= 1;
      }
      if (action.payload.isLogin) {
        editProductFromCart(state.itemsCart);
      } else {
        localStorage.setItem("shoppingCart", JSON.stringify(state.itemsCart));
      }
    },
    deleteCartItem: (state, action) => {
      const index = state.itemsCart.findIndex(
        (el) => el.id === action.payload.id,
      );
      if (index !== -1) {
        state.itemsCart.splice(index, 1);
      }
      if (action.payload.isLogin) {
        deleteProductFromCart(state.itemsCart);
      } else {
        localStorage.setItem("shoppingCart", JSON.stringify(state.itemsCart));
      }
    },
    deleteCart: (state, action) => {
      state.itemsCart = [];
      if (action.payload) {
        deleteShoppingCart();
      } else {
        localStorage.removeItem("shoppingCart");
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShoppingCart.fulfilled, (state, action) => {
      state.itemsCart = action.payload.products;
    });
    builder.addCase(createShoppingCart.fulfilled, (state, action) => {
      state.itemsCart = action.payload.products;
    });
    builder.addCase(editProductFromCart.fulfilled, (state, action) => {
      state.itemsCart = action.payload.products;
    });
    builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
      state.itemsCart = action.payload.products;
    });
    builder.addCase(deleteShoppingCart.fulfilled, (state, action) => {
      state.itemsCart = action.payload.products;
    });
    builder.addCase(updateShoppingCart.fulfilled, (state, action) => {
      state.itemsCart = action.payload.products;
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
