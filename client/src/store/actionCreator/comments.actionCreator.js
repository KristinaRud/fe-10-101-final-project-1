import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchComments = createAsyncThunk("comments/fetchComments", async () => {
  const { res, err } = await request({
    url: `/comments`,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't get comments: ${err.data}`);
});

const fetchCommentsByProduct = createAsyncThunk(
  "comments/fetchCommentsByProduct",
  async (productId) => {
    const { res, err } = await request({
      url: `/comments/product/${productId}`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get comments: ${err.data}`);
  },
);

export { fetchComments, fetchCommentsByProduct };
