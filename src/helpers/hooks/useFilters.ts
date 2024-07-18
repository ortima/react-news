import { useState } from "react";

type Filters<T> = {
  [K in keyof T]: T[K];
};

export const useFilters = <T extends object>(initialFilters: T) => {
  const [filters, setFilters] = useState<Filters<T>>(initialFilters);

  const changeFilter = <K extends keyof T>(key: K, value: T[K]) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};
