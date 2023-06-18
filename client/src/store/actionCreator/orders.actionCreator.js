import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const { res, err } = await request({
    url: `/orders`,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't get orders: ${err.data}`);
});

const createOrder = createAsyncThunk("order/createOrder", async (data) => {
  const { res, err } = await request({
    url: `/orders`,
    method: "POST",
    body: data,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't create order: ${JSON.stringify(err.data)}`);
});

const getProductsFromCart = createAsyncThunk(
  "order/getProductsFromCart",
  async () => {
    const products = JSON.parse(localStorage.getItem("shoppingCart"));
    const data = [];

    const fetchProductPromises = products.map(async (product) => {
      try {
        const { res } = await request({
          url: `/products/${product.itemNo}`,
        });

        if (res) {
          const productWithQuantity = {
            product: res,
            cartQuantity: product.cartQuantity,
          };
          return productWithQuantity;
        }
      } catch (error) {
        throw new Error(`Couldn't get products: ${error}`);
      }
    });

    const fetchedProducts = await Promise.all(fetchProductPromises);
    data.push(...fetchedProducts);

    return data;
  },
);

export { fetchOrders, createOrder, getProductsFromCart };
