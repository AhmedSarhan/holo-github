import React, { FC } from "react";
import { User } from "../../resources/types";

const UserCard: FC<{ user: User }> = ({ user }) => {
  return (
    <li>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        <img src={user.avatar_url} alt={user.login} width="75" height="75" />
        <h6>{user.login}</h6>
      </a>
      <p>{user.type}</p>
    </li>
  );
};

export default UserCard;
