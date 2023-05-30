import { createSlice } from "@reduxjs/toolkit";
import { urlParser } from "../../utils/urlParser";
import {
  fetchFiltersData,
  fetchProductsByCategory,
} from "../actionCreator/filters.actionCreator";

const searchParams = new URLSearchParams(window.location.search);
const initialState = {
  filters: urlParser() || [],
  productsOfCategory: {},
  category: searchParams.get("categories"),
  filtersData: [],
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
    deleteFilter: (state, action) => {
      state.filters = state.filters.filter((filter) => {
        if (filter.name === action.payload.name) {
          filter.value = filter.value.filter(
            (value) => value !== action.payload.value,
          );

          return filter.value.length > 0;
        }
        return true;
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
    builder.addCase(fetchFiltersData.fulfilled, (state, action) => {
      const objByType = {};
      action.payload.forEach((obj) => {
        const { type } = obj;
        if (type in objByType) {
          objByType[type].push(obj);
        } else {
          objByType[type] = [obj];
        }
      });
      state.filtersData = Object.values(objByType);
    });
  },
});

export const selectFilters = (state) => state.filters;
export const { setFilters, deleteFilter, deleteAllFilters, setCategory } =
  filtersSlice.actions;
export default filtersSlice.reducer;
