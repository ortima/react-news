import NewsCard from "@/entities/news/ui/NewsCard/NewsCard";
import { withSkeleton } from "@/shared/hocs/withSkeleton";
import { News } from "@/shared/interfaces";
import clsx from "clsx";

interface INewsList {
  news: News[] | undefined;
  type?: "banner" | "item";
  direction?: "row" | "column";
}

const NewsList: React.FC<INewsList> = ({ news, type = "item" }) => {
  return (
    <ul
      className={clsx({
        "flex w-full flex-col gap-6": type === "item",
        "box-border grid w-full grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3":
          type === "banner",
        "md:max-h-[1200px] md:overflow-y-auto": type === "banner",
      })}
    >
      {news?.map((item) => <NewsCard key={item.id} item={item} type={type} />)}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, 10);

export default NewsListWithSkeleton;

/*import React from "react";
import NewsCard from "@/entities/news/ui/NewsCard/NewsCard";
import { withSkeleton, SkeletonProps } from "@/shared/hocs/withSkeleton";
import { News } from "@/shared/interfaces";
import clsx from "clsx";

interface INewsList extends SkeletonProps {
  news: News[] | undefined;
  type?: "banner" | "item";
  direction?: "row" | "column";
}

const NewsList: React.FC<INewsList> = ({ news, type = "item" }) => {
  return (
    <ul
      className={clsx({
        "flex w-full flex-col gap-6": type === "item",
        "box-border grid w-full grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3":
          type === "banner",
        "md:max-h-[1200px] md:overflow-y-auto": type === "banner",
      })}
    >
      {news?.map((item) => (
        <NewsCard key={item.id} item={item} type={type} />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, 10);

export default NewsListWithSkeleton;
 */
