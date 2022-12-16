import React, { FC } from "react";
import { Repo } from "../../resources/types";

const RepoCard: FC<{ repo: Repo }> = ({ repo }) => {
  return (
    <li>
      <h2>{repo.full_name}</h2>
      <div>
        <img
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
          width="75"
          height="75"
        />
        <h6>{repo.owner.login}</h6>
      </div>
      <div>
        <span>forks: {repo.forks} </span>
        <span>stars: {repo.stargazers_count} </span>
        <span>watchers: {repo.watchers} </span>
      </div>
    </li>
  );
};

export default RepoCard;
