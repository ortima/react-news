import { categoriesApi } from "@/entities/category/api/categoriesApi";
import { newsApi } from "@/entities/news/api/newsApi";
import newsReducer from "@/entities/news/model/newsSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});
