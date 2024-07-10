import { useEffect, useState } from "react";
import { getNews } from "@api/apiNews";
import NewsBanner from "@components/NewsBanner/NewsBanner";
import NewsList from "@components/NewsList/NewsList";
import { News } from "src/@types";

const Main = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        throw new Error("FAILED FETCH");
      }
    };
    fetchNews();
  }, []);

  return (
    <main className="flex w-full flex-col gap-8">
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}

      <NewsList news={news} />
    </main>
  );
};

export default Main;
