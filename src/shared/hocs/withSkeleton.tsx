import React from "react";
import { DirectionType, SkeletonType } from "../interfaces";
import Skeleton from "../ui/Skeleton/Skeleton";

export interface SkeletonProps {
  isLoading: boolean;
  direction?: DirectionType;
  type: SkeletonType;
}

export function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  count: number,
) {
  return function WithSkeleton(props: SkeletonProps & P) {
    const { isLoading, type, direction = "column", ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
}
