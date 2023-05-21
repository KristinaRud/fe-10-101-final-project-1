import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {},
  reducers: {
    actionFirst: () => { },

  },

});

export const { actionFirst } = appSlice.actions;

export default appSlice.reducer;
