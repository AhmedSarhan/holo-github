import React from "react";
import { List } from "../../../app/components/shared-styled";
import { useAppSelector } from "../../../app/hooks/redux-hooks";
import { useSearchForm } from "./../../resources/context";
import RepoCard from "./repo-card";

const ReposListing = () => {
  const repos = useAppSelector((state) => state.search.repos);
  const { lastElRef } = useSearchForm();

  return (
    <List>
      {repos.length > 0 &&
        repos.map((repo, index) => {
          if (index + 1 === repos.length) {
            return <RepoCard lastElRef={lastElRef} repo={repo} key={repo.id} />;
          }
          return <RepoCard repo={repo} key={repo.id} />;
        })}
    </List>
  );
};

export default ReposListing;
