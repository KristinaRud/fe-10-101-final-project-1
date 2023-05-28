import { createSlice } from "@reduxjs/toolkit";
import { urlParser } from "../../utils/urlParser";
import { fetchProductsByCategory } from "../actionCreator/filters.actionCreator";

const searchParams = new URLSearchParams(window.location.search);
const initialState = {
  filters: urlParser() || [],
  productsOfCategory: {},
  category: searchParams.get("categories"),
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      let isFilterUpdated = false;
      if (state.filters.length === 0) {
        state.filters.push(action.payload);
      } else {
        state.filters.forEach((filter) => {
          if (action.payload.name === filter.name) {
            isFilterUpdated = true;

            if (!filter.value.includes(action.payload.value[0])) {
              filter.value.push(action.payload.value[0]);
            }
          }
        });
        if (!isFilterUpdated) {
          state.filters.push(action.payload);
        }
      }
    },
    deleteFilters: (state, action) => {
      return state.filters.filter((filter) => {
        if (
          action.payload.value.length > 1 &&
          action.payload.name === filter.name
        ) {
          return filter.value !== action.payload.value;
        }
        return filter.name !== action.payload.name;
      });
    },
    deleteAllFilters: (state) => {
      state.filters = [];
      return state;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.productsOfCategory = action.payload;
    });
  },
});

export const selectFilters = (state) => state.filters;
export const { setFilters, deleteFilters, deleteAllFilters, setCategory } =
  filtersSlice.actions;
export default filtersSlice.reducer;
