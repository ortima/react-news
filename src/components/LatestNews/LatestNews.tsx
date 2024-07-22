import { getLatestNews } from "@api/apiNews";
import BannersList from "@components/BannersList/BannersList.tsx";
import { useFetch } from "@helpers/hooks/useFetch";
import { GetNewsResponse } from "src/@types";

const LatestNews = () => {
  const { data, isLoading } = useFetch<GetNewsResponse>(getLatestNews);

  return (
    <section className="flex w-full flex-col gap-8">
      <BannersList banners={data && data?.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
