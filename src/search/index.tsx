import React from "react";
import SearchForm from "./components/form";
import ReposListing from "./components/repos/repos-listing";
import { useSearchForm } from "./resources/context";
import UsersListing from "./components/users/users-listing";
import styled from "styled-components";
import { useAppSelector } from "../app/hooks/redux-hooks";
import ListingSkeleton from "../app/components/listing-skeleton";

const SearchPage = () => {
  const {
    formValues: { queryType },
  } = useSearchForm();
  const status = useAppSelector((state) => state.search.status);
  return (
    <Container>
      <SearchForm />
      {queryType === "repo" ? <ReposListing /> : <UsersListing />}
      {status === "loading" ? (
        <ListingSkeleton gridCount={queryType === "repo" ? 3 : 5} />
      ) : null}
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  margin-inline: auto;
  padding-inline: 1.75rem;
  margin-top: 30px;
`;
