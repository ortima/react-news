import axios from "axios";
import { GetNewsResponse } from "src/@types";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (): Promise<GetNewsResponse> => {
  try {
    const response = await axios.get<GetNewsResponse>(
      `${BASE_URL}latest-news`,
      {
        params: { apiKey: API_KEY },
      },
    );
    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(`Axios error: ${err.message}`);
    } else if (err instanceof Error) {
      throw new Error(`Error: ${err.message}`);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
