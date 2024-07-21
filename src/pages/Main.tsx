import { useCallback } from "react";
import { getNews } from "@api/apiNews.ts";
import LatestNews from "@components/LatestNews/LatestNews";
import NewsByFilters from "@components/NewsByFilters/NewsByFilters";
import { PAGE_SIZE } from "@constants/constants.ts";
import { useDebounce } from "@helpers/hooks/useDebounce.ts";
import { useFetch } from "@helpers/hooks/useFetch.ts";
import { useFilters } from "@helpers/hooks/useFilters.ts";
import { Filters, GetNewsResponse } from "src/@types";
import styles from "./styles.module.css";

const Main: React.FC = () => {
  const { filters, changeFilter } = useFilters<Filters>({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const fetchNews = useCallback(
    () =>
      getNews({
        page_number: filters.page_number,
        page_size: filters.page_size,
        category: filters.category || undefined,
        keywords: debouncedKeywords,
      }),
    [
      filters.page_number,
      filters.page_size,
      filters.category,
      debouncedKeywords,
    ],
  );

  const { data, isLoading } = useFetch<GetNewsResponse>(fetchNews);

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data ? data.news : []} />

      <NewsByFilters
        news={data ? data.news : []}
        isLoading={isLoading}
        filters={filters}
        changeFilter={changeFilter}
      />
    </main>
  );
};

export default Main;
