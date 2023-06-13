import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "../actionCreator/news.actionCreator";

const newsSlice = createSlice({
  name: "news",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default newsSlice.reducer;
