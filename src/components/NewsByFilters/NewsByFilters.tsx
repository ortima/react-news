import NewsFilters from "@components/NewsFilters/NewsFilters.tsx";
import NewsList from "@components/NewsList/NewsList.tsx";
import Pagination from "@components/Pagination/Pagination.tsx";
import { TOTAL_PAGES } from "@constants/constants.ts";
import { Filters, News } from "src/@types";

interface INewsByFilters {
  filters: Filters;
  isLoading: boolean;
  news: News[];
  changeFilter: (
    filterName: keyof Filters,
    value: string | number | null,
  ) => void;
}

const NewsByFilters: React.FC<INewsByFilters> = ({
  filters,
  changeFilter,
  isLoading,
  news,
}) => {
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

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
    </section>
  );
};

export default NewsByFilters;
