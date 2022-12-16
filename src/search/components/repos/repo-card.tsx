import React, { FC } from "react";
import styled from "styled-components";
import { Repo } from "../../resources/types";

const RepoCard: FC<{ repo: Repo }> = ({ repo }) => {
  return (
    <Card>
      <h2>{repo.full_name}</h2>
      <CardHeader>
        <img
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
          width="75"
          height="75"
        />
        <h6>{repo.owner.login}</h6>
      </CardHeader>
      <div>
        <span>forks: {repo.forks} </span>
        <span>stars: {repo.stargazers_count} </span>
        <span>watchers: {repo.watchers} </span>
      </div>
    </Card>
  );
};

export default RepoCard;

const Card = styled.li`
  margin-inline: auto;
  box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin-block: 15px;
  padding: 15px 10px;
  width: 90%;
  border: none;
  overflow-wrap: anywhere;

  h2 {
    color: purple;
    margin-block: 5px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-block: 15px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: none;
    margin-inline-end: 5px;
  }

  h6 {
    text-transform: capitalize;
    font-size: 24px;
    margin: 0;
  }
`;
