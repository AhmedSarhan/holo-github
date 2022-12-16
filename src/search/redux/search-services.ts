import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { SearchRequestParams } from "../resources/types";
import { formatRepo, formatUser } from "../resources/utils";
import { searchRepos, searchUsers } from "./search-api";

export const searchReposAction = createAsyncThunk(
  "search/search-repos",
  async (params: SearchRequestParams, thunkApi) => {
    try {
      const response = await searchRepos(params);
      const repos = response.data.items.map((repo: unknown) => {
        return formatRepo(repo);
      });
      return {
        total: response.data.total_count,
        repos: repos,
      };
    } catch (err) {
      const error = (err as unknown) as AxiosError;
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const searchUsersAction = createAsyncThunk(
  "search/search-users",
  async (params: SearchRequestParams, thunkApi) => {
    try {
      const response = await searchUsers(params);
      const users = response.data.items.map((user: unknown) => {
        return formatUser(user);
      });
      return {
        total: response.data.total_count,
        users: users,
      };
    } catch (err) {
      const error = (err as unknown) as AxiosError;
      thunkApi.rejectWithValue(error.message);
    }
  }
);
