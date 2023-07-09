import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchPartners = createAsyncThunk("partners/fetchPartners", async () => {
  const { res, err } = await request({
    url: `/partners`,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't get partners: ${err.data}`);
});

const addPartners = createAsyncThunk("partners/addPartners", async (data) => {
  const { res, err } = await request({
    url: `/partners`,
    method: "POST",
    body: data,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't add partners: ${err.data}`);
});

const updatePartners = createAsyncThunk(
  "partners/updatePartners",
  async ({ id, data }) => {
    const { res, err } = await request({
      url: `/partners/${id}`,
      method: "PUT",
      body: data,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't update partners: ${err.data}`);
  },
);

const deletePartners = createAsyncThunk(
  "partners/deletePartners",
  async (id) => {
    const { res, err } = await request({
      url: `/partners/${id}`,
      method: "DELETE",
    });
    if (res) {
      return id;
    }
    throw new Error(`Couldn't delete partners: ${err.data}`);
  },
);

export { fetchPartners, addPartners, updatePartners, deletePartners };
