import { createSlice } from "@reduxjs/toolkit";
import { searchReposAction, searchUsersAction } from "./search-services";
interface SearchState {
  repos: any[];
  users: any[];
  totalRepos: number;
  totalUsers: number;
  error: any;
  status: "idle" | "loading" | "failed";
}
const initialState: SearchState = {
  repos: [],
  totalRepos: 0,
  users: [],
  totalUsers: 0,
  error: null,
  status: "idle",
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearState: (state) => {
      state = { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchReposAction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(searchReposAction.fulfilled, (state, action) => {
        const { repos, total } = action.payload!;
        state.repos.push(repos);
        state.totalRepos = total;
      })
      .addCase(searchReposAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    builder
      .addCase(searchUsersAction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(searchUsersAction.fulfilled, (state, action) => {
        const { users, total } = action.payload!;
        state.users.push(users);
        state.totalUsers = total;
      })
      .addCase(searchUsersAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearState } = searchSlice.actions;

export default searchSlice.reducer;
