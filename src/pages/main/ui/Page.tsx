import LatestNews from "./LatestNews/LatestNews";
import NewsByFilters from "./NewsByFilters/NewsByFilters";
import styles from "./styles.module.css";

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default Main;
