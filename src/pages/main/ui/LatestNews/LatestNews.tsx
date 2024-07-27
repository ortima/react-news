import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { NewsList } from "@/widgets/news/ui";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className="flex w-full flex-col gap-8">
      <NewsList
        type="banner"
        direction="row"
        news={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
};

export default LatestNews;
