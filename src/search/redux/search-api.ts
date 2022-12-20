import Axios from "../../app/api";
import {
  SearchRequestParams,
  SearchReposResponse,
  SearchUserResponse,
} from "./../resources/types";

export const searchRepos = async ({ query, page = 1 }: SearchRequestParams) => {
  return await Axios.get<SearchReposResponse>("/repositories", {
    params: {
      q: query,
      per_page: 30,
      page,
      order: "asc",
    },
  });
};

export const searchUsers = async ({ query, page = 1 }: SearchRequestParams) => {
  return await Axios.get<SearchUserResponse>("/users", {
    params: {
      q: query,
      per_page: 30,
      page,
      order: "asc",
    },
  });
};
