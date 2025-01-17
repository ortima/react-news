import { API_KEY, BASE_URL } from "@/shared/constants/constants";
import { Filters, GetNewsResponse } from "@/shared/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<GetNewsResponse, Filters>({
      query: (params) => {
        const {
          page_number = 1,
          page_size = 10,
          category = "",
          keywords = "",
        } = params || {};
        return {
          url: "search",
          params: {
            apiKey: API_KEY,
            page_number,
            page_size,
            category,
            keywords,
          },
        };
      },
    }),

    getLatestNews: builder.query<GetNewsResponse, null>({
      query: () => {
        return {
          url: "latest-news",
          params: {
            apiKey: API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetNewsQuery, useGetLatestNewsQuery } = newsApi;
