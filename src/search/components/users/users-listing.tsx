import React from "react";
import { useAppSelector } from "../../../app/hooks/redux-hooks";
import UserCard from "./user-card";

const UsersListing = () => {
  const users = useAppSelector((state) => state.search.users);
  return (
    <ul>
      {users.length > 0 &&
        users.map((user) => <UserCard key={user.id} user={user} />)}
    </ul>
  );
};

export default UsersListing;
