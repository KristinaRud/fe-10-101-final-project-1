import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchColors = createAsyncThunk(
  "colors/fetchColors",
  async (query = "") => {
    const { res, err } = await request({
      url: `/colors${query}`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get colors: ${err.data}`);
  },
);

const deleteColor = createAsyncThunk("colors/deleteColor", async (id) => {
  const { res, err } = await request({
    url: `/colors/${id}`,
    method: "DELETE",
  });
  if (res) {
    return id;
  }
  throw new Error(`Couldn't delete color: ${err.data}`);
});

const addColor = createAsyncThunk("colors/addColor", async (color) => {
  const { res, err } = await request({
    url: "/colors",
    method: "POST",
    body: color,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't add color: ${err.data}`);
});

const updateColor = createAsyncThunk(
  "colors/updateColor",
  async ({ color, id }) => {
    const { res, err } = await request({
      url: `/colors/${id}`,
      method: "PUT",
      body: color,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't update color: ${err.data}`);
  },
);

export { fetchColors, deleteColor, addColor, updateColor };
