import React from "react";
import SearchForm from "./components/form";
import ReposListing from "./components/repos/repos-listing";
import { useSearchForm } from "./resources/context";
import UsersListing from "./components/users/users-listing";
import styled from "styled-components";

const SearchPage = () => {
  const {
    formValues: { queryType },
  } = useSearchForm();
  return (
    <Container>
      <SearchForm />
      {queryType === "repo" ? <ReposListing /> : <UsersListing />}
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  margin-inline: auto;
  padding-inline: 1.75rem;
  margin-top: 30px;
`;
