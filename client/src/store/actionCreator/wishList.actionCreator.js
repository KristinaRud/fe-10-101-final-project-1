import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";
import { structureWishListLS } from "../../utils/cart/structureData";

const fetchWishList = createAsyncThunk("wishList/fetchWishList", async () => {
  const { res, err } = await request({
    url: `/wishList`,
  });

  if (res) return res;
  throw new Error(`Couldn't get wishList: ${err.data}`);
});

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
    const { res: response } = await request({
      url: `/wishlist`,
    });
    if (response) {
      const productsUpdates = [];
      const wishListLS = JSON.parse(localStorage.getItem("wishList"));
      wishListLS.forEach((item) => {
        const itemIndex = response.products.findIndex(
          (el) => el._id === item.id,
        );
        if (itemIndex === -1) {
          productsUpdates.push(item.id);
        }
      });
      response.products.forEach((el) => productsUpdates.push(el._id));

      const { res, err } = await request({
        url: `/wishlist`,
        method: "PUT",
        body: { products: productsUpdates },
      });
      if (res) {
        return res;
      }
      throw new Error(`Couldn't update Wish List: ${err.data}`);
    } else {
      const { res, err } = await request({
        url: `/wishlist`,
        method: "POST",
        body: structureWishListLS(),
      });
      if (res) {
        return res;
      }
      throw new Error(`Couldn't create Wish List: ${err.data}`);
    }
  },
);

export {
  fetchWishList,
  deleteWishList,
  updateProductToWishList,
  deleteProductFromWishList,
  updateWishListLogin,
};
