import React from "react";
import { List } from "../../../app/components/shared-styled";
import { useAppSelector } from "../../../app/hooks/redux-hooks";
import UserCard from "./user-card";
import styled from "styled-components";
import { useSearchForm } from "../../resources/context";

const UsersListing = () => {
  const users = useAppSelector((state) => state.search.users);
  const { lastElRef } = useSearchForm();

  return (
    <UserList>
      {users.length > 0 &&
        users.map((user, index) => {
          if (index + 1 === users.length) {
            return <UserCard lastElRef={lastElRef} key={user.id} user={user} />;
          }
          return <UserCard key={user.id} user={user} />;
        })}
    </UserList>
  );
};

export default UsersListing;

const UserList = styled(List)`
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 375px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
