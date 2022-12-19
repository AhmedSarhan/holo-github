import { useCallback, useEffect, useReducer, useRef } from "react";
import {
  useDebounce,
  useAppDispatch,
  useInfiniteScroll,
  useAppSelector,
} from "../../app/hooks";
import { searchReposAction, searchUsersAction } from "../redux/search-services";
import { clearSearch } from "../redux/search-slice";
import { QueryType } from "./types";
const initialValues = {
  searchQuery: "",
  queryType: "repos" as QueryType,
};
export type FromValues = typeof initialValues;

// utils
const formReducer = (prevValue: FromValues, nextValue: Partial<FromValues>) => {
  return { ...prevValue, ...nextValue };
};

// hooks

export function useForm(): [
  FromValues,
  (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  (node: HTMLLIElement) => void
] {
  const dispatch = useAppDispatch();
  const [values, setValues] = useReducer(formReducer, initialValues);
  const { queryType, searchQuery } = values;
  const firstRender = useRef(true);
  const hasMore = useAppSelector(
    (state) =>
      state.search[values.queryType].length <
      state.search[values.queryType === "repos" ? "totalRepos" : "totalUsers"]
  );
  console.log("HasMore", hasMore);
  const { page, lastElRef, resetPage } = useInfiniteScroll(hasMore);
  const { fetchData, cancelThunk } = useFetchData({
    query: searchQuery,
    queryType,
  });
  const debouncedValue = useDebounce(searchQuery);
  useEffect(() => {
    if (firstRender.current) {
      return;
    }
    dispatch(clearSearch());
    console.log("will fetch 0");
    resetPage();
    fetchData(1);

    return () => cancelThunk();
  }, [debouncedValue, dispatch, fetchData, resetPage, queryType, cancelThunk]);
  useEffect(() => {
    firstRender.current = false;
    console.log("will fetch");
    if (page === 1) return;
    console.log("will fetch 2");

    fetchData(page);

    return () => cancelThunk();
  }, [dispatch, fetchData, cancelThunk, page]);

  const updateValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues({ [e.target.name]: e.target.value });
    },
    []
  );

  return [values, updateValue, lastElRef];
}

function useFetchData({
  query,
  queryType,
}: {
  query: string;
  queryType: QueryType;
}) {
  const dispatch = useAppDispatch();

  let promise = useRef<any>();
  const fetchData = useCallback(
    (page: number) => {
      // let promise;
      if (!query || query.length < 3) return;
      if (queryType === "repos") {
        promise.current = dispatch(searchReposAction({ query: query, page }));
        return;
      }
      promise.current = dispatch(searchUsersAction({ query: query, page }));
    },

    [dispatch, query, queryType]
  );
  const cancelThunk = useCallback(() => {
    console.log("promise", promise.current);
    promise.current?.abort();
  }, []);
  return { fetchData, cancelThunk };
}
