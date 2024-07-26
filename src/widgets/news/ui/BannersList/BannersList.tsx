import { NewsBanner } from "@/entities/news";
import { withSkeleton } from "@/shared/hocs/withSkeleton";
import { News } from "@/shared/interfaces";
import styles from "./style.module.css";

interface INewsBanner {
  banners: News[] | undefined;
}

const BannersList: React.FC<INewsBanner> = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;
