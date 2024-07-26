import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { News } from "@/shared/interfaces";

interface INewsItem {
  item: News;
}

const NewsItem: React.FC<INewsItem> = ({ item }) => {
  return (
    <li className="flex w-full gap-3">
      <div
        className="size-16 shrink-0 bg-[#f2f4f5] bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm">{item.title}</h3>
        <p className="text-[12px] text-[#6c7072]">
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
