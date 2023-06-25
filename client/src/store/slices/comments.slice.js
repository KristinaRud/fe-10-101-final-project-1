import { createSlice } from "@reduxjs/toolkit";
import {
  fetchComments,
  fetchCommentsByProduct,
} from "../actionCreator/comments.actionCreator";

const commentsSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchCommentsByProduct.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default commentsSlice.reducer;
