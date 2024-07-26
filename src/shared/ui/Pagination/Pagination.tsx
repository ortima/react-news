import { IPagination } from "@/features/pagination/model/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination: React.FC<IPagination> = ({
  totalPages,
  handlePreviousPage,
  handleNextPage,
  handlePageClick,
  currentPage,
}) => {
  return (
    <div className="flex w-full items-center justify-center gap-3">
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className="cursor-pointer border-none bg-white disabled:cursor-default disabled:text-gray-500"
      >
        <ChevronLeft />
      </button>
      <div className="flex items-center justify-center gap-2">
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className="cursor-pointer rounded-full border-2 bg-white p-2 disabled:cursor-default disabled:text-gray-500"
              disabled={index + 1 === currentPage}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className="cursor-pointer border-none bg-white disabled:cursor-default disabled:text-gray-500"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
