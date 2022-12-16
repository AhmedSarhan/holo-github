import React from "react";
import { List } from "../../../app/components/shared-styled";
import { useAppSelector } from "../../../app/hooks/redux-hooks";
import UserCard from "./user-card";

const UsersListing = () => {
  const users = useAppSelector((state) => state.search.users);
  return (
    <List>
      {users.length > 0 &&
        users.map((user) => <UserCard key={user.id} user={user} />)}
    </List>
  );
};

export default UsersListing;
