import React from "react";
import Pagination, { IPagination } from "@components/Pagination/Pagination";

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
