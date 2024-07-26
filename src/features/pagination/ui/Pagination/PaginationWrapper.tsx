import Pagination from "@/shared/ui/Pagination/Pagination";
import { IPagination } from "../../model/types";

interface PaginationWrapperProps extends IPagination {
  children: React.ReactNode;
}

const PaginationWrapper: React.FC<PaginationWrapperProps> = ({
  children,
  totalPages,
  currentPage,
  handlePreviousPage,
  handleNextPage,
  handlePageClick,
}) => {
  return (
    <>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
      />

      {children}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
      />
    </>
  );
};

export default PaginationWrapper;
