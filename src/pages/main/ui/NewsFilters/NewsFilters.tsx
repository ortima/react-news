import { useAppDispatch } from "@/app/appStore";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";
import { Filters } from "@/shared/interfaces";

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
