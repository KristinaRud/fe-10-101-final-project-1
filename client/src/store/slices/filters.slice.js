import { createSlice } from "@reduxjs/toolkit";
import { urlParser } from "../../utils/queryParams/urlParser";
import { fetchFiltersData } from "../actionCreator/filters.actionCreator";

const searchParams = new URLSearchParams(window.location.search);
const initialState = {
  filters: urlParser() || [],
  category: searchParams.get("categories"),
  filtersData: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      let isFilterUpdated = false;
      if (action.payload.name === "minPrice") {
        state.filters.forEach((obj) => {
          if (obj.name === action.payload.name) {
            obj.value = action.payload.value;
            isFilterUpdated = true;
          }
        });
      } else if (action.payload.name === "maxPrice") {
        state.filters.forEach((obj) => {
          if (obj.name === action.payload.name) {
            obj.value = action.payload.value;
            isFilterUpdated = true;
          }
        });
      } else {
        state.filters.forEach((filter) => {
          if (action.payload.name === filter.name) {
            isFilterUpdated = true;

            if (!filter.value.includes(action.payload.value[0])) {
              filter.value.push(action.payload.value[0]);
            }
          }
        });
      }
      if (!isFilterUpdated) {
        state.filters.push(action.payload);
      }
    },
    deleteFilter: (state, action) => {
      state.filters = state.filters.filter((obj) => {
        if (obj.name === action.payload.name) {
          obj.value = obj.value.filter((value) => {
            return value.toString() !== action.payload.value[0].toString();
          });
          return obj.value.length > 0;
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

export const { setFilters, deleteFilter, deleteAllFilters, setCategory } =
  filtersSlice.actions;
export default filtersSlice.reducer;
