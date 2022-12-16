import React from "react";
import { useAppSelector } from "../../../app/hooks/redux-hooks";
import RepoCard from "./repo-card";

const ReposListing = () => {
  const repos = useAppSelector((state) => state.search.repos);
  return (
    <ul>
      {repos.length > 0 &&
        repos.map((repo) => <RepoCard repo={repo} key={repo.id} />)}
    </ul>
  );
};

export default ReposListing;
