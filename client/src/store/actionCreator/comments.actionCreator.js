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

export { fetchComments };
