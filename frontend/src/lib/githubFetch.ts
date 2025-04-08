import { GitHubRepo } from "@/types/github";

export async function githubFetch() {
  try {
    const username = import.meta.env.VITE_GITHUB_USERNAME!;
    const token = import.meta.env.VITE_GITHUB_TOKEN!;

    const headers = {
      Authorization: `token ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    };

    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
        { headers },
      ),
    ]);

    if (!userResponse.ok || !reposResponse.ok) {
      throw new Error("GitHub API error");
    }

    const userData = await userResponse.json();
    const reposData = await reposResponse.json();

    const formattedRepos = reposData.map((repo: GitHubRepo) => ({
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
      topics: repo.topics || [],
      homepage: repo.homepage,
    }));

    return {
      user: userData,
      repos: formattedRepos,
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return { error: "Failed to fetch GitHub data" };
  }
}
