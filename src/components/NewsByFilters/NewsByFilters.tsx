import { useCallback } from "react";
import { getNews } from "@api/apiNews";
import NewsFilters from "@components/NewsFilters/NewsFilters.tsx";
import NewsList from "@components/NewsList/NewsList.tsx";
import PaginationWrapper from "@components/PaginationWrapper/PaginationWrapper";
import { PAGE_SIZE, TOTAL_PAGES } from "@constants/constants.ts";
import { useDebounce } from "@helpers/hooks/useDebounce";
import { useFetch } from "@helpers/hooks/useFetch";
import { useFilters } from "@helpers/hooks/useFilters";
import { Filters, GetNewsResponse } from "src/@types";

const NewsByFilters = () => {
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

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <section className="box-border flex w-full flex-col gap-8 overflow-hidden">
      <NewsFilters changeFilter={changeFilter} filters={filters} />

      <PaginationWrapper
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={data && data?.news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
