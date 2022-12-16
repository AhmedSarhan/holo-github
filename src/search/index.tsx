import React from "react";
import SearchForm from "./form";
import ReposListing from "./listing";

const SearchPage = () => {
  return (
    <div id="search-listing">
      <SearchForm />
      <ReposListing />
    </div>
  );
};

export default SearchPage;
