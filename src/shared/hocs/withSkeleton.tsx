import { ComponentType } from "react";
import Skeleton from "../ui/Skeleton/Skeleton";

export type WithSkeletonProps = {
  isLoading: boolean;
};

export const withSkeleton = <P extends object>(
  Component: ComponentType<P>,
  type: "banner" | "item",
  count: number,
  direction: "row" | "column",
) => {
  return function WithSkeleton(props: P & WithSkeletonProps) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
};
