import { createSlice } from "@reduxjs/toolkit";
import {
  addNews,
  deleteNews,
  fetchNews,
  updateNews,
} from "../actionCreator/news.actionCreator";

const newsSlice = createSlice({
  name: "news",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addNews.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(updateNews.fulfilled, (state, action) => {
      return state.map((item) =>
        item._id === action.payload._id ? action.payload : item,
      );
    });
    builder.addCase(deleteNews.fulfilled, (state, action) => {
      return state.filter((item) => {
        return item.customId !== action.payload;
      });
    });
  },
});

export default newsSlice.reducer;
