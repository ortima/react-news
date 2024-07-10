interface ISkeleton {
  count: number;
  type: "banner" | "item";
}
const Skeleton: React.FC<ISkeleton> = ({ count = 1, type = "banner" }) => {
  return (
    <>
      {count > 1 ? (
        <ul className="flex flex-col gap-3">
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={
                type === "banner"
                  ? "relative w-full animate-pulse bg-slate-300 pt-[100%]"
                  : "h-16 w-full animate-pulse bg-slate-300"
              }
            ></li>
          ))}
        </ul>
      ) : (
        <div
          className={
            type === "banner"
              ? "h-72 w-full animate-pulse bg-slate-300"
              : "h-16 w-full animate-pulse bg-slate-300"
          }
        ></div>
      )}
    </>
  );
};

export default Skeleton;
