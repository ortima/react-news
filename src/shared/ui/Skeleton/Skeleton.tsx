import React from "react";
import styles from "./styles.module.css";

interface ISkeleton {
  count: number;
  type: "banner" | "item";
  direction: "column" | "row";
}
const Skeleton: React.FC<ISkeleton> = ({
  count = 1,
  type = "banner",
  direction = "column",
}) => {
  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === "column" ? styles.columnList : styles.rowList
          }
        >
          {" "}
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
