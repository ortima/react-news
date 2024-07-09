import NewsItem from "@components/NewsItem/NewsItem";
import { News } from "src/@types";

interface INewsList {
  news: News[];
}
const NewsList: React.FC<INewsList> = ({ news }) => {
  return (
    <ul className="flex w-full flex-col gap-6">
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default NewsList;
