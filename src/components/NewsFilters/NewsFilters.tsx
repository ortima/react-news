import { useCallback } from "react";
import { getCategories } from "@api/apiNews.ts";
import { useFetch } from "@helpers/hooks/useFetch.ts";
import { Filters } from "src/@types";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";

interface NewsFiltersProps {
  filters: Filters;
  changeFilter: (filterName: keyof Filters, value: string | null) => void;
}

const NewsFilters: React.FC<NewsFiltersProps> = ({ filters, changeFilter }) => {
  const fetchCategories = useCallback(() => getCategories(), []);

  const { data: dataCategories } = useFetch(fetchCategories);

  return (
    <div className="flex w-full flex-col gap-3">
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
    </div>
  );
};

export default NewsFilters;
