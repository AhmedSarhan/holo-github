import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { searchRequestParams } from "../resources/types";
import { searchRepos, searchUsers } from "./search-api";

export const searchReposAction = createAsyncThunk(
  "search/search-repos",
  async (params: searchRequestParams, thunkApi) => {
    try {
      const response = await searchRepos(params);
      return {
        total: response.data.total_count,
        repos: response.data.items,
      };
    } catch (err) {
      const error = (err as unknown) as AxiosError;
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const searchUsersAction = createAsyncThunk(
  "search/search-users",
  async (params: searchRequestParams, thunkApi) => {
    try {
      const response = await searchUsers(params);
      return {
        total: response.data.total_count,
        users: response.data.items,
      };
    } catch (err) {
      const error = (err as unknown) as AxiosError;
      thunkApi.rejectWithValue(error.message);
    }
  }
);
