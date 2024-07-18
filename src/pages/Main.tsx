import { getCategories, getNews as getNewsOriginal } from "@api/apiNews";
import Categories from "@components/Categories/Categories";
import NewsBanner from "@components/NewsBanner/NewsBanner";
import NewsList from "@components/NewsList/NewsList";
import Pagination from "@components/Pagination/Pagination";
import Search from "@components/Search/Search";
import { PAGE_SIZE, TOTAL_PAGES } from "@constants/constants";
import { useDebounce } from "@helpers/hooks/useDebounce";
import { useFetch } from "@helpers/hooks/useFetch";
import { useFilters } from "@helpers/hooks/useFilters";
import { Filters, GetCategoriesResponse, GetNewsResponse } from "src/@types";

const getNews = async (params: Filters) => {
  const { page_number, page_size, category, keywords } = params;
  return getNewsOriginal(page_number, page_size, category ?? "", keywords);
};

const Main = () => {
  const { filters, changeFilter } = useFilters<Filters>({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const {
    data,
    isLoading,
    error: newsError,
  } = useFetch<GetNewsResponse, Filters>(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dataCategories, error: categoriesError } = useFetch<
    GetCategoriesResponse,
    object
  >(getCategories, {});

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
    <main className="flex w-full flex-col gap-8">
      {categoriesError || newsError ? (
        <div className="error-message">{categoriesError || newsError}</div>
      ) : null}

      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />

      <NewsBanner isLoading={isLoading} item={data?.news[0]} />

      <NewsList isLoading={isLoading} news={data?.news ?? []} />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
    </main>
  );
};

export default Main;
