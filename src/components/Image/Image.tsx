/* eslint-disable @typescript-eslint/no-explicit-any */
const Image = ({ image }: any) => {
  return (
    <div className="relative h-auto w-full bg-[#f2f4f5] pt-[80%]">
      {image ? (
        <img
          src={image}
          alt="news"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      ) : null}
    </div>
  );
};

export default Image;
