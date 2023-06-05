import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPostOfficesNP = createAsyncThunk(
  "postOffice/fetchPostOfficesNP",
  async (city) => {
    try {
      const response = await fetch(`https://api.novaposhta.ua/v2.0/json/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiKey: "11db3360a446054261266a07fe716f33",
          modelName: "Address",
          calledMethod: "getWarehouses",
          methodProperties: {
            CityName: city,
          },
        }),
      });
      const data = await response.json();
      if (data.data) {
        return data.data;
      }
      throw new Error(`Couldn't get post office in this city: ${city}`);
    } catch (error) {
      throw new Error(`Couldn't get post office: ${error.data}`);
    }
  },
);

export const fetchPostOfficesME = createAsyncThunk(
  "postOffice/fetchPostOfficesME",
  async (city) => {
    try {
      const response = await fetch(
        `https://publicapi.meest.com/branches?city=${city}`,
      );
      const data = await response.json();
      if (data.result) {
        return data.result;
      }
      throw new Error(`Couldn't get post office in this city: ${city}`);
    } catch (error) {
      throw new Error(`Couldn't get post office: ${error.data}`);
    }
  },
);
