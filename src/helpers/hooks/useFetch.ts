import { useEffect, useState } from "react";

export const useFetch = <T, P>(func: (params: P) => Promise<T>, params: P) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const stringParams = JSON.stringify(params);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await func(params);
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Произошла неизвестная ошибка.");
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [func, stringParams]);

  return { data, isLoading, error };
};
