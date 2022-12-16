import { createContext, useContext } from "react";
import { FromValues, useForm } from "./hooks";

type SearchContextValues = {
  formValues: FromValues;
  updateValue: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};
const SearchContext = createContext<SearchContextValues | null>(null);

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [formValues, updateValue] = useForm();
  return (
    <SearchContext.Provider value={{ formValues, updateValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export function useSearchForm() {
  const formContext = useContext(SearchContext);
  if (!formContext) {
    throw new Error(
      "form context can only be used within the SearchProvider, please make sure your component is wrapped correctly"
    );
  }
  return formContext;
}

export default SearchProvider;
