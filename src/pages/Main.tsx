import { useEffect, useState } from "react";
import { getNews } from "@api/apiNews";
import NewsBanner from "@components/NewsBanner/NewsBanner";
import NewsList from "@components/NewsList/NewsList";
import Pagination from "@components/Pagination/Pagination";
import Skeleton from "@components/Skeleton/Skeleton";
import { News } from "src/@types";

const Main = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;
  const totalPages = 10;

  const fetchNews = async (currentPage: number) => {
    try {
      setIsLoading(true);
      const response = await getNews(currentPage, pageSize);
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      throw new Error("FAILED FETCH");
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="flex w-full flex-col gap-8">
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type="banner" count={1} />
      )}

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type="item" count={10} />
      )}

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Main;
