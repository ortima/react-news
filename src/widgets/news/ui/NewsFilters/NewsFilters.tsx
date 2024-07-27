import { useAppDispatch } from "@/app/appStore";
import { CategoriesType } from "@/entities/category";
import { setFilters } from "@/entities/news/model/newsSlice";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";
import { Filters } from "@/shared/interfaces";

interface NewsFiltersProps {
  filters: Filters;
  categories: CategoriesType[];
}

const NewsFilters: React.FC<NewsFiltersProps> = ({ filters, categories }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex w-full flex-col gap-3">
      {categories ? (
        <Categories
          categories={categories}
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
