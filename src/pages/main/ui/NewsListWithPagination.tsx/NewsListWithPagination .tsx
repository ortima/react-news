import { PaginationWrapper } from "@/features/pagination";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { Filters, News } from "@/shared/interfaces";
import NewsList from "@/widgets/news/ui/NewsList/NewsList";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
  filters: Filters;
  news: News[] | undefined;
  isLoading: boolean;
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePaginationNews(filters);

  return (
    <PaginationWrapper
      handlePreviousPage={handlePreviousPage}
      handleNextPage={handleNextPage}
      handlePageClick={handlePageClick}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
    >
      <NewsList
        direction="column"
        type="item"
        isLoading={isLoading}
        news={news}
      />
    </PaginationWrapper>
  );
};

export default NewsListWithPagination;
