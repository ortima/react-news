import { NewsItem } from "@/entities/news";
import { withSkeleton } from "@/shared/hocs/withSkeleton";
import { News } from "@/shared/interfaces";

interface INewsList {
  news: News[] | undefined;
}
const NewsList: React.FC<INewsList> = ({ news }) => {
  return (
    <ul className="flex w-full flex-col gap-6">
      {news?.map((item) => <NewsItem key={item.id} item={item} />)}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10, "column");

export default NewsListWithSkeleton;
