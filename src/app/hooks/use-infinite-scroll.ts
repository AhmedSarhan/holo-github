import { useRef, useState, useCallback } from "react";
import { useAppSelector } from "./redux-hooks";

export function useInfiniteScroll(hasMore?: boolean) {
  const [page, setPage] = useState(1);
  const isLoading = useAppSelector(
    (state) => state?.search.status === "loading"
  );

  const observer = useRef<any>();
  const lastElRef = useCallback(
    (node: HTMLLIElement) => {
      console.log("looking forward to it");
      if (isLoading || !hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, isLoading]
  );
  const resetPage = useCallback(() => setPage(1), []);
  return { page, lastElRef, resetPage };
}
