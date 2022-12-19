import React, { FC } from "react";
import styled from "styled-components";
import { User } from "../../resources/types";
import {
  AvatarContainer,
  CardContainer,
} from "../../../app/components/shared-styled";

const UserCard: FC<{
  user: User;
  lastElRef?: (node: HTMLLIElement) => void;
}> = ({ user, lastElRef }) => {
  return (
    <Card ref={lastElRef ?? null}>
      <AvatarContainer href={user.html_url} target="_blank" rel="noreferrer">
        <img src={user.avatar_url} alt={user.login} width="75" height="75" />
        <h6>{user.login}</h6>
      </AvatarContainer>
      <UserType>{user.type}</UserType>
    </Card>
  );
};

export default UserCard;

const Card = styled.li`
  ${CardContainer}
`;
const UserType = styled.p`
  color: #ccc;
  font-size: 12px;
`;
