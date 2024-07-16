import { useEffect, useState } from "react";
import { getCategories, getNews } from "@api/apiNews";
import Categories from "@components/Categories/Categories";
import NewsBanner from "@components/NewsBanner/NewsBanner";
import NewsList from "@components/NewsList/NewsList";
import Pagination from "@components/Pagination/Pagination";
import Search from "@components/Search/Search";
import Skeleton from "@components/Skeleton/Skeleton";
import { useDebounce } from "@helpers/hooks/useDebounce";
import { News } from "src/@types";

const Main = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState<string | null>(null);
  const [keywords, setKeywords] = useState("");

  const pageSize = 10;
  const totalPages = 10;

  const debouncedKeywords = useDebounce(keywords, 1500);

  const fetchNews = async (currentPage: number) => {
    try {
      setIsLoading(true);
      const response = await getNews(
        currentPage,
        pageSize,
        selectedCategory === "All" ? "" : selectedCategory,
        debouncedKeywords,
      );
      setNews(response.news);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setIsLoading(false);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Произошла неизвестная ошибка при получении новостей.");
      }
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(["All", ...response.categories]);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Произошла неизвестная ошибка при получении категорий.");
      }
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory, debouncedKeywords]);

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
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {error && <div className="error-message">{error}</div>}

      <Search keywords={keywords} setKeywords={setKeywords} />

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
