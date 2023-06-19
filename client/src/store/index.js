import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./slices/orders.slice";
import filtersReducer from "./slices/filters.slice";
import productsReducer from "./slices/products.slice";
import partnersReducer from "./slices/partners.slice";
import colorsReducer from "./slices/colors.slice";
import wishListReducer from "./slices/wishList.slice";
import catalogReducer from "./slices/catalog.slice";
import cityReducer from "./slices/city.slice";
import postOfficeReducer from "./slices/postOffice.slice";
import customersReducer from "./slices/customers.slice";
import shoppingCartReducer from "./slices/shoppingCart.slice";
import commentsReducer from "./slices/comments.slice";
import newsReducer from "./slices/news.slice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    products: productsReducer,
    partners: partnersReducer,
    colors: colorsReducer,
    wishList: wishListReducer,
    catalog: catalogReducer,
    city: cityReducer,
    postOffice: postOfficeReducer,
    customers: customersReducer,
    orders: ordersReducer,
    shoppingCart: shoppingCartReducer,
    comments: commentsReducer,
    news: newsReducer,
  },
});

export default store;
