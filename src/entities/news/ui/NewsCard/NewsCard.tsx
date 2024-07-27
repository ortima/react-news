import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { News } from "@/shared/interfaces";
import Image from "@/shared/ui/Image/Image";
import clsx from "clsx";

interface Props {
  item: News;
  type: "banner" | "item";
}

const NewsCard: React.FC<Props> = ({ item, type = "item" }) => {
  return (
    <li
      className={clsx("flex w-full gap-3", { "flex-col": type === "banner" })}
    >
      {type === "banner" ? (
        <Image image={item.image} />
      ) : (
        <div
          className="size-16 shrink-0 bg-[#f2f4f5] bg-cover bg-center"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      )}

      <div className="flex flex-col gap-2">
        <h3 className="text-sm">{item.title}</h3>
        <p className="text-[12px] text-[#6c7072]">
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsCard;
