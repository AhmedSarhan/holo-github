import { useRef, useState, useCallback } from "react";
import { useAppSelector } from "./redux-hooks";

export function useInfiniteScroll(hasMore?: boolean) {
  const [page, setPage] = useState(1);
  const status = useAppSelector((state) => state?.search.status);

  const observer = useRef<any>();
  const lastElRef = useCallback(
    (node: HTMLLIElement) => {
      if (status === "failed" || status === "loading" || !hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, status]
  );
  const resetPage = useCallback(() => setPage(1), []);
  return { page, lastElRef, resetPage };
}
