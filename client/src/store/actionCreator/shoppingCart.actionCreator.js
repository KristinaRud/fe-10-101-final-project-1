import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchShoppingCart = createAsyncThunk(
  "shoppingCart/fetchShoppingCart",
  async () => {
    const { res, err } = await request({
      url: `/cart`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get shopping cart: ${err.data}`);
  },
);

const createShoppingCart = createAsyncThunk(
  "shoppingCart/createShoppingCart",
  async (data) => {
    const { res, err } = await request({
      url: `/cart`,
      method: "POST",
      body: data,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't create shopping cart: ${err.data}`);
  },
);

const editProductFromCart = createAsyncThunk(
  "shoppingCart/editProductFromCart",
  async (id) => {
    const { res, err } = await request({
      url: `/cart/${id}`,
      method: "PUT",
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't edit shopping cart: ${err.data}`);
  },
);
const decreaseProductFromCart = createAsyncThunk(
  "shoppingCart/decreaseProductFromCart",
  async (id) => {
    const { res, err } = await request({
      url: `/cart/product/${id}`,
      method: "DELETE",
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't edit shopping cart: ${err.data}`);
  },
);
const editShoppingCart = createAsyncThunk(
  "shoppingCart/editShoppingCart",
  async (data) => {
    const { res, err } = await request({
      url: `/cart`,
      method: "PUT",
      body: data,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't update shopping cart: ${err.data}`);
  },
);

const deleteProductFromCart = createAsyncThunk(
  "shoppingCart/deleteProductFromCart",
  async (id) => {
    const { res, err } = await request({
      url: `/cart/${id}`,
      method: "DELETE",
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't delete shopping cart: ${err.data}`);
  },
);

const deleteShoppingCart = createAsyncThunk(
  "shoppingCart/deleteShoppingCart",
  async () => {
    const { res, err } = await request({
      url: `/cart`,
      method: "DELETE",
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't delete shopping cart: ${err.data}`);
  },
);

const putProductsToCartLogin = createAsyncThunk(
  "shoppingCart/putProductsToCartLogin",
  async () => {
    const products = JSON.parse(window.localStorage.getItem("shoppingCart"));
    if (products.length > 0) {
      const fetchProductPromises = products.map(async (product) => {
        try {
          const { res } = await request({
            url: `/cart/${product.id}`,
            method: "PUT",
          });
          if (res) {
            return res;
          }
        } catch (error) {
          throw new Error(`Couldn't get products: ${error}`);
        }
      });
      const fetchedProducts = await Promise.all(fetchProductPromises);
      await window.localStorage.removeItem("shoppingCart");
      return fetchedProducts;
    }
  },
);

export {
  fetchShoppingCart,
  createShoppingCart,
  editProductFromCart,
  deleteProductFromCart,
  deleteShoppingCart,
  editShoppingCart,
  decreaseProductFromCart,
  putProductsToCartLogin,
};
