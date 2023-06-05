import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchAllStates = createAsyncThunk(
  "city/fetchAllStates",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:4000/api/city/states`);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const fetchAllDistrictsInState = createAsyncThunk(
  "city/fetchAllDistrictsInState",
  async (stateId, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/city/districts/${stateId}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const fetchAllCitiesInDistrict = createAsyncThunk(
  "city/fetchAllCitiesInDistrict",
  async (districtId, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/city/cities/${districtId}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

export { fetchAllStates, fetchAllCitiesInDistrict, fetchAllDistrictsInState };
