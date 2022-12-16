import React, { FC } from "react";
import styled from "styled-components";
import { GoEye, GoStar, GoRepoForked } from "react-icons/go";
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
      <StatsContainer>
        <span>
          <GoRepoForked /> {repo.forks}{" "}
        </span>
        <span>
          <GoStar /> {repo.stargazers_count}{" "}
        </span>
        <span>
          <GoEye /> {repo.watchers}{" "}
        </span>
      </StatsContainer>
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

const startCenterFlex = `
   display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const CardHeader = styled.div`
  ${startCenterFlex};
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

const StatsContainer = styled.div`
  ${startCenterFlex};
  flex-wrap: wrap;
  span {
    ${startCenterFlex};
    svg {
      margin-inline-end: 2px;
    }
    &:first-of-type {
      margin-inline-end: 10px;
    }
    &:last-of-type {
      margin-inline-start: 10px;
    }
    &:nth-of-type(2nd) {
      margin-inline: 10px;
    }
  }
`;
