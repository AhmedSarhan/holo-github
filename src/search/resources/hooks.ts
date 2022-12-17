import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { useAppDispatch } from "../../app/hooks/redux-hooks";
import { searchReposAction, searchUsersAction } from "../redux/search-services";
import { clearSearch } from "../redux/search-slice";
const initialValues = {
  searchQuery: "",
  queryType: "repo" as "user" | "repo",
};
export type FromValues = typeof initialValues;

// utils
const formReducer = (prevValue: FromValues, nextValue: Partial<FromValues>) => {
  return { ...prevValue, ...nextValue };
};

// hooks
export function useDebounce<T>(value: T, delay?: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);
  return debouncedValue;
}
export function useForm(): [
  FromValues,
  (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
] {
  const dispatch = useAppDispatch();
  const firstRender = useRef(true);
  const [values, setValues] = useReducer(formReducer, initialValues);
  const { queryType, searchQuery } = values;
  const debouncedValue = useDebounce(searchQuery);

  useEffect(() => {
    if (!firstRender.current) {
      dispatch(clearSearch());
    }
    firstRender.current = false;
    if (!debouncedValue || debouncedValue.length < 3) return;

    if (queryType === "repo") {
      dispatch(searchReposAction({ query: debouncedValue }));
      return;
    }
    dispatch(searchUsersAction({ query: debouncedValue }));
  }, [debouncedValue, queryType, dispatch]);

  const updateValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues({ [e.target.name]: e.target.value });
    },
    []
  );

  return [values, updateValue];
}
