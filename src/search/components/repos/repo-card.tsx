import React, { FC } from "react";
import styled from "styled-components";
import { GoEye, GoStar, GoRepoForked } from "react-icons/go";
import {
  AvatarContainer,
  startCenterFlex,
  CardContainer,
} from "../../../app/components/shared-styled";
import { Repo } from "../../resources/types";
import { formatDate } from "../../resources/utils";

const RepoCard: FC<{ repo: Repo }> = ({ repo }) => {
  return (
    <Card>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <h2>{repo.full_name}</h2>
      </a>
      <AvatarContainer
        href={repo.owner.html_url}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
          width="75"
          height="75"
        />
        <h6>{repo.owner.login}</h6>
      </AvatarContainer>
      <CardFooter>
        <span>{formatDate(repo.created_at)}</span>

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
      </CardFooter>
    </Card>
  );
};

export default RepoCard;

const Card = styled.li`
  ${CardContainer}

  a:first-of-type {
    color: purple;
    margin-block: 10px;
    text-decoration: none;
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

const CardFooter = styled.div`
  ${startCenterFlex};
  justify-content: space-between;
`;
