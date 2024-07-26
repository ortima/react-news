import { PAGE_SIZE } from "@/shared/constants/constants";
import { Filters, News } from "@/shared/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface State {
  news: News[];
  filters: Filters;
}

const initialState: State = {
  news: [],
  filters: {
    category: null,
    keywords: "",
    page_number: 1,
    page_size: PAGE_SIZE,
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<News[]>) => {
      state.news = action.payload;
    },

    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>,
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setNews, setFilters } = newsSlice.actions;

export default newsSlice.reducer;
