import { Octokit } from "octokit";

const octokit = new Octokit({
  userAgentgent: "quinns-portfolio-app",
  auth: process.env.GITHUB_GET_ALL_REPOS_KEY,
});

// let git_repo_array = [];

// attempts to fetch all git repos
export const repos = await octokit.request("GET /repositories", {
  owner: "quinnypb",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});
console.log("all repositories: ", repos.data);

// get certain repos
export const repo = await octokit.request("GET /repos/quinnypb/canvas", {
  owner: "quinnypb",
  repo: "canvas",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});
console.log("a repo: ", repo);

// octokit.rest.repos;
