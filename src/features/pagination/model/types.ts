export interface IPagination {
  totalPages: number;
  currentPage: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  handlePageClick: (pageNumber: number) => void;
}
