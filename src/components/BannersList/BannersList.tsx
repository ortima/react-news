import { withSkeleton } from "@helpers/hocs/withSkeleton";
import { News } from "src/@types";
import NewsBanner from "../NewsBanner/NewsBanner";
import styles from "./style.module.css";

interface INewsBanner {
  banners: News[] | null;
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
