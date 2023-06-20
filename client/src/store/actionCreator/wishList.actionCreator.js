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

const deleteWishList = createAsyncThunk("wishList/deleteWishList", async () => {
  const { res, err } = await request({
    url: `/wishList`,
    method: "DELETE",
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't delete wishList: ${err.data}`);
});

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

const updateWishListLogin = createAsyncThunk(
  "wishList/updateWishListLogin",
  async () => {
    const items = JSON.parse(window.localStorage.getItem("wishList"));
    if (items.length > 0) {
      const fetchProductPromises = items.map(async (product) => {
        try {
          const { res } = await request({
            url: `/wishList/${product.id}`,
            method: "PUT",
          });
          if (res) {
            return res;
          }
        } catch (error) {
          throw new Error(`Couldn't get products: ${error}`);
        }
      });
      const fetchedItems = await Promise.all(fetchProductPromises);
      await window.localStorage.removeItem("wishList");
      return fetchedItems;
    }
  },
);

export {
  fetchWishList,
  createWishList,
  deleteWishList,
  updateProductToWishList,
  deleteProductFromWishList,
  updateWishListLogin,
};
