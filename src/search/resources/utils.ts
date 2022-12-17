import { User, Repo } from "./types";

export const formatRepo = (repo: any): Repo => {
  return {
    id: repo.id,
    forks: repo.forks,
    watchers: repo.watchers,
    stargazers_count: repo.stargazers_count,
    created_at: repo.created_at,
    html_url: repo.html_url,
    description: repo.description,
    full_name: repo.full_name,
    name: repo.name,
    topics: repo.topics,
    owner: formatUser(repo.owner),
  };
};

export const formatUser = (user: any): User => {
  return {
    id: user.id,
    avatar_url: user.avatar_url,
    login: user.login,
    html_url: user.html_url,
    type: user.type,
  };
};

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
    .replaceAll(",", "");
};
