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

export { fetchPartners };
