import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllCitiesInDistrict,
  fetchAllDistrictsInState,
  fetchAllStates,
} from "../actionCreator/city.actionCreator";

const citySlice = createSlice({
  name: "city",
  initialState: {
    cities: [],
    states: [],
    districts: [],
    chosenState: "",
    chosenDistrict: "",
    chosenCity: {},
  },
  reducers: {
    setChosenState: (state, action) => {
      state.chosenState = action.payload;
    },
    setChosenDistrict: (state, action) => {
      state.chosenDistrict = action.payload;
    },
    setChosenCity: (state, action) => {
      state.chosenCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStates.fulfilled, (state, action) => {
        state.states = action.payload;
      })
      .addCase(fetchAllDistrictsInState.fulfilled, (state, action) => {
        state.districts = action.payload;
      })
      .addCase(fetchAllCitiesInDistrict.fulfilled, (state, action) => {
        state.cities = action.payload;
      });
  },
});

export const { setChosenState, setChosenDistrict, setChosenCity } =
  citySlice.actions;
export default citySlice.reducer;
