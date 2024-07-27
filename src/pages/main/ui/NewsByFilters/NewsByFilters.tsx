import { useAppSelector } from "@/app/appStore";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { useDebounce } from "@/shared/hooks/useDebounce";
import NewsFilters from "../../../../widgets/news/ui/NewsFilters/NewsFilters";
import NewsListWithPagination from "../NewsListWithPagination.tsx/NewsListWithPagination ";

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading, data: news } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });
  const { data } = useGetCategoriesQuery(null);

  return (
    <section className="box-border flex w-full flex-col gap-8 overflow-hidden">
      <NewsFilters filters={filters} categories={data?.categories || []} />

      <NewsListWithPagination
        isLoading={isLoading}
        news={news?.news}
        filters={filters}
      />
    </section>
  );
};

export default NewsByFilters;
