import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { BannersList } from "@/widgets/news/ui";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className="flex w-full flex-col gap-8">
      <BannersList banners={data && data?.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
