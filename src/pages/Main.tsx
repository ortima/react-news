import { useEffect, useState } from "react";
import { getNews } from "@api/apiNews";
import NewsBanner from "@components/NewsBanner/NewsBanner";
import NewsList from "@components/NewsList/NewsList";
import Skeleton from "@components/Skeleton/Skeleton";
import { News } from "src/@types";

const Main = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        throw new Error("FAILED FETCH");
      }
    };
    fetchNews();
  }, []);

  return (
    <main className="flex w-full flex-col gap-8">
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type="banner" count={1} />
      )}

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type="item" count={10} />
      )}
    </main>
  );
};

export default Main;
