export interface SearchRequestParams {
  query: string;
  page?: number;
}

export type Repo = {
  id: number;
  forks: number;
  watchers: number;
  stargazers_count: number;
  created_at: string;
  html_url: string;
  description: string;
  full_name: string;
  name: string;
  topics: string[];
  owner: User;
};

export type User = {
  id: number;
  avatar_url: string;
  login: string;
  html_url: string;
  type: string;
};

export type QueryType = "users" | "repos";

export type SearchReposResponse = {
  items: Repo[];
  total_count: number;
};
export type SearchUserResponse = {
  items: User[];
  total_count: number;
};
