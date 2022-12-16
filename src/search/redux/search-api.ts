import Axios from "../../app/api";
import { searchRequestParams } from "./../resources/types";

export const searchRepos = async ({ query, page = 1 }: searchRequestParams) => {
  return await Axios.get("/repositories", {
    params: {
      q: query,
      per_page: 30,
      page,
      order: "asc",
    },
  });
};

export const searchUsers = async ({ query, page = 1 }: searchRequestParams) => {
  return await Axios.get("/users", {
    params: {
      q: query,
      per_page: 30,
      page,
      order: "asc",
    },
  });
};
