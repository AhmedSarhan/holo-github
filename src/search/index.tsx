import React from "react";
import SearchForm from "./components/form";
import ReposListing from "./components/repos/repos-listing";
import { useSearchForm } from "./resources/context";
import UsersListing from "./components/users/users-listing";

const SearchPage = () => {
  const {
    formValues: { queryType },
  } = useSearchForm();
  return (
    <div id="search-listing">
      <SearchForm />
      {queryType === "repo" ? <ReposListing /> : <UsersListing />}
    </div>
  );
};

export default SearchPage;
