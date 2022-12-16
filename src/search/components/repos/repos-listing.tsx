import React from "react";
import { List } from "../../../app/components/shared-styled";
import { useAppSelector } from "../../../app/hooks/redux-hooks";
import RepoCard from "./repo-card";

const ReposListing = () => {
  const repos = useAppSelector((state) => state.search.repos);
  return (
    <List>
      {repos.length > 0 &&
        repos.map((repo) => <RepoCard repo={repo} key={repo.id} />)}
    </List>
  );
};

export default ReposListing;
