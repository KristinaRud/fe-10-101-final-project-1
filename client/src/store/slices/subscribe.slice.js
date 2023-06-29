import { createSlice } from "@reduxjs/toolkit";
import {
  addSubscriber,
  updateSubscriber,
} from "../actionCreator/subscribe.actionCreaator";

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState: {
    subscriber: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addSubscriber.fulfilled, (state, action) => {
      state.subscribers = action.payload.subscriber;
    });
    builder.addCase(addSubscriber.rejected, (state) => {
      state.error = "You have already subscribed";
    });
    builder.addCase(updateSubscriber.fulfilled, (state, action) => {
      state.subscribers = action.payload.subscriber;
    });
    builder.addCase(updateSubscriber.rejected, (state, action) => {
      state.error = action.error.massage;
    });
  },
});
export default subscribeSlice.reducer;
