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
      body: {
        products: [data],
      },
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't create shopping cart: ${err.data}`);
  },
);

const editProductFromCart = createAsyncThunk(
  "shoppingCart/editProductFromCart",
  async (data) => {
    const { res, err } = await request({
      url: `/cart/${data.id}`,
      method: "PUT",
      body: {
        products: [data],
      },
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't edit shopping cart: ${err.data}`);
  },
);
const updateShoppingCart = createAsyncThunk(
  "shoppingCart/updateShoppingCart",
  async (data) => {
    const { res, err } = await request({
      url: `/cart`,
      method: "PUT",
      body: {
        products: [data],
      },
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

export {
  fetchShoppingCart,
  createShoppingCart,
  editProductFromCart,
  deleteProductFromCart,
  deleteShoppingCart,
  updateShoppingCart,
};
