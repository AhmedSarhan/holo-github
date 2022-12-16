import React, { FC } from "react";
import styled from "styled-components";
import { User } from "../../resources/types";

const UserCard: FC<{ user: User }> = ({ user }) => {
  return (
    <Card>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        <img src={user.avatar_url} alt={user.login} width="75" height="75" />
        <h6>{user.login}</h6>
      </a>
      <p>{user.type}</p>
    </Card>
  );
};

export default UserCard;

const Card = styled.li`
  box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.4);
`;
