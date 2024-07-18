import React, { ImgHTMLAttributes } from "react";

interface IImage extends ImgHTMLAttributes<HTMLImageElement> {
  image: string;
}

const Image: React.FC<IImage> = ({ image, ...props }) => {
  return (
    <div className="relative h-auto w-full bg-[#f2f4f5] pt-[80%]">
      {image ? (
        <img
          src={image}
          alt="news"
          className="absolute left-0 top-0 h-full w-full object-cover"
          {...props}
        />
      ) : null}
    </div>
  );
};

export default Image;
