import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchWishList = createAsyncThunk("wishList/fetchWishList", async () => {
  const { res, err } = await request({
    url: `/wishList`,
  });

  if (res) return res;
  throw new Error(`Couldn't get wishList: ${err.data}`);
});

const createWishList = createAsyncThunk(
  "wishList/createWishList",
  async (data) => {
    const { res, err } = await request({
      url: `/wishList`,
      method: "POST",
      body: data,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't create wishList: ${err.data}`);
  },
);

const updateWishList = createAsyncThunk(
  "wishList/updateWishList",
  async (data) => {
    const { res, err } = await request({
      url: `/wishList`,
      method: "PUT",
      body: data,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't update wishList: ${err.data}`);
  },
);

const deleteWishList = createAsyncThunk(
  "wishList/deleteWishList",
  async (data) => {
    const { res, err } = await request({
      url: `/wishList`,
      method: "DELETE",
      body: data,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't delete wishList: ${err.data}`);
  },
);

const updateProductToWishList = createAsyncThunk(
  "wishList/updateProductToWishList",
  async (id) => {
    const { res, err } = await request({
      url: `/wishList/${id}`,
      method: "PUT",
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't add product to wishList: ${err.data}`);
  },
);
const deleteProductFromWishList = createAsyncThunk(
  "wishList/deleteProductFromWishList",
  async (id) => {
    const { res, err } = await request({
      url: `/wishList/${id}`,
      method: "DELETE",
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't delete product from wishList: ${err.data}`);
  },
);

export {
  fetchWishList,
  createWishList,
  updateWishList,
  deleteWishList,
  updateProductToWishList,
  deleteProductFromWishList,
};
