import Image from "@components/Image/Image";
import { formatTimeAgo } from "@helpers/formatTimeAgo";
import { News } from "src/@types";

interface INewsBanner {
  item?: News;
}

const NewsBanner = ({ item }: INewsBanner) => {
  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <Image image={item.image} />
      <h3 className="text-base">{item.title}</h3>
      <p className="color-[#6c7072] text-sm">
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;
