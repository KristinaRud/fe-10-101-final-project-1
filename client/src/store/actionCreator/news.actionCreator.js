import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const { res, err } = await request({
    url: `/slides`,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't get news: ${err.data}`);
});

const addNews = createAsyncThunk("news/addNews", async (data) => {
  const { res, err } = await request({
    url: `/slides`,
    method: "POST",
    body: data,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't add news: ${err.data}`);
});

const updateNews = createAsyncThunk("news/updateNews", async ({ id, data }) => {
  const { res, err } = await request({
    url: `/slides/${id}`,
    method: "PUT",
    body: data,
  });
  if (res) {
    return res;
  }
  throw new Error(`Couldn't update news: ${err.data}`);
});

const deleteNews = createAsyncThunk("news/deleteNews", async (id) => {
  const { res, err } = await request({
    url: `/slides/${id}`,
    method: "DELETE",
  });
  if (res) {
    return id;
  }
  throw new Error(`Couldn't delete news: ${err.data}`);
});

export { fetchNews, addNews, updateNews, deleteNews };
