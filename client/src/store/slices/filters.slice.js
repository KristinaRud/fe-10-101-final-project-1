import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: [],
  reducers: {
    setFilters: (state, action) => {
      let isFilterUpdated = false;
      if (state.length === 0) {
        state.push(action.payload);
      } else {
        state.forEach((filter) => {
          if (action.payload.name === filter.name) {
            isFilterUpdated = true;

            if (!filter.value.includes(action.payload.value[0])) {
              filter.value.push(action.payload.value[0]);
            }
          }
        });
        if (!isFilterUpdated) {
          state.push(action.payload);
        }
      }
    },
    deleteFilters: (state, action) => {
      return state.filter((filter) => {
        if (
          action.payload.value.length > 1 &&
          action.payload.name === filter.name
        ) {
          return filter.value !== action.payload.value;
        }
        return filter.name !== action.payload.name;
      });
    },
    deleteAllFilters: () => {
      return [];
    },
  },
});

export const selectFilters = (state) => state.filters;
export const { setFilters, deleteFilters, deleteAllFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
