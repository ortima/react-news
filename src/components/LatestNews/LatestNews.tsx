import BannersList from "@components/BannersList/BannersList.tsx";
import { News } from "src/@types";

interface ILatestNews {
  banners: News[];
  isLoading: boolean;
}
const LatestNews: React.FC<ILatestNews> = ({ banners, isLoading }) => {
  return (
    <section className="flex w-full flex-col gap-8">
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
