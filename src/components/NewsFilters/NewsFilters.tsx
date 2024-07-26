import Categories from "@components/Categories/Categories";
import Search from "@components/Search/Search";
import { useAppDispatch } from "@store/index";
import { useGetCategoriesQuery } from "@store/services/newsApi";
import { setFilters } from "@store/slices/newsSlice";
import { Filters } from "src/@types";

interface NewsFiltersProps {
  filters: Filters;
}

const NewsFilters: React.FC<NewsFiltersProps> = ({ filters }) => {
  const { data } = useGetCategoriesQuery(null);

  const dispatch = useAppDispatch();
  return (
    <div className="flex w-full flex-col gap-3">
      {data ? (
        <Categories
          categories={data.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) =>
            dispatch(setFilters({ key: "category", value: category }))
          }
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
