import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchFiltersData = createAsyncThunk(
  "filters/fetchFiltersData",
  async (query = "") => {
    const { res, err } = await request({
      url: `/filters${query}`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get filters: ${JSON.stringify(err.data)}`);
  },
);

const deleteFilterData = createAsyncThunk(
  "filters/deleteFilter",
  async (id) => {
    const { res, err } = await request({
      url: `/filters/${id}`,
      method: "DELETE",
    });
    if (res) {
      return id;
    }
    throw new Error(`Couldn't delete filter: ${JSON.stringify(err.data)}`);
  },
);

const addFilterData = createAsyncThunk("filters/addFilter", async (filter) => {
  const { res, err } = await request({
    url: "/filters",
    method: "POST",
    body: filter,
  });

  if (res) {
    return res;
  }
  throw new Error(`Couldn't add filter: ${JSON.stringify(err.data)}`);
});

const updateFilterData = createAsyncThunk(
  "filters/updateFilter",
  async ({ filter, id }) => {
    const { res, err } = await request({
      url: `/filters/${id}`,
      method: "PUT",
      body: filter,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't update filter: ${JSON.stringify(err.data)}`);
  },
);
export { fetchFiltersData, deleteFilterData, addFilterData, updateFilterData };
