import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchAllStates = createAsyncThunk("city/fetchAllStates", async () => {
  const { res, err } = await request({
    url: `/city/states`,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't get states: ${err.data}`);
});

const fetchAllDistrictsInState = createAsyncThunk(
  "city/fetchAllDistrictsInState",
  async (stateId) => {
    const { res, err } = await request({
      url: `/city/districts/${stateId}`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get states: ${err.data}`);
  },
);

const fetchAllCitiesInDistrict = createAsyncThunk(
  "city/fetchAllCitiesInDistrict",
  async (districtId) => {
    const { res, err } = await request({
      url: `/city/cities/${districtId}`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get states: ${err.data}`);
  },
);

export { fetchAllStates, fetchAllCitiesInDistrict, fetchAllDistrictsInState };
