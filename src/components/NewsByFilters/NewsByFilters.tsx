import NewsFilters from "@components/NewsFilters/NewsFilters.tsx";
import NewsList from "@components/NewsList/NewsList.tsx";
import PaginationWrapper from "@components/PaginationWrapper/PaginationWrapper";
import { TOTAL_PAGES } from "@constants/constants.ts";
import { useDebounce } from "@helpers/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "@store/index";
import { useGetNewsQuery } from "@store/services/newsApi";
import { setFilters } from "@store/slices/newsSlice";

const NewsByFilters = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number + 1 }),
      );
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number - 1 }),
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: "page_number", value: pageNumber }));
  };

  return (
    <section className="box-border flex w-full flex-col gap-8 overflow-hidden">
      <NewsFilters filters={filters} />

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
