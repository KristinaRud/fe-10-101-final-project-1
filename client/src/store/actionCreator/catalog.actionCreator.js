import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api/request";

const fetchCategory = createAsyncThunk(
  "catalog/fetchCategory",
  async (category) => {
    const { res, err } = await request({
      url: `/catalog/${category}`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get category: ${err.data}`);
  },
);

const fetchCategories = createAsyncThunk(
  "catalog/fetchCategories",
  async () => {
    const { res, err } = await request({
      url: `/catalog`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get category: ${err.data}`);
  },
);

const addCategory = createAsyncThunk(
  "catalog/addCategory",
  async (category) => {
    const { res, err } = await request({
      url: `/catalog`,
      method: "POST",
      body: category,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't add category: ${JSON.stringify(err.data)}`);
  },
);

const updateCategory = createAsyncThunk(
  "catalog/updateCategory",
  async (category) => {
    const { res, err } = await request({
      url: `/catalog/${category.id}`,
      method: "PUT",
      body: category,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't update category: ${JSON.stringify(err.data)}`);
  },
);

const deleteCategory = createAsyncThunk(
  "catalog/deleteCategory",
  async (id) => {
    const { res, err } = await request({
      url: `/catalog/${id}`,
      method: "DELETE",
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't delete category: ${JSON.stringify(err.data)}`);
  },
);
export {
  fetchCategory,
  fetchCategories,
  addCategory,
  updateCategory,
  deleteCategory,
};
