import BannersList from "@components/BannersList/BannersList.tsx";
import { useGetLatestNewsQuery } from "@store/services/newsApi";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className="flex w-full flex-col gap-8">
      <BannersList banners={data && data?.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
