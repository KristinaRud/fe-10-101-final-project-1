import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/app.slice";
import filtersReducer from "./slices/filters.slice";
import productsReducer from "./slices/products.slice";

const store = configureStore({
  reducer: {
    app: appReducer,
    filters: filtersReducer,
    products: productsReducer,
  },
});

export default store;
