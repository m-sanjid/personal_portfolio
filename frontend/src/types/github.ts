export interface GitHubRepo {
    id: number
    name: string
    html_url: string
    description: string
    language: string
    stargazers_count: number
    forks_count: number
    updated_at: string
    topics: string[]
    homepage: string
  }
  
  export interface GitHubUser {
    name: string
    login: string
    avatar_url: string
    html_url: string
    bio: string
    public_repos: number
    followers: number
    following: number
  }
  
  export interface GitHubData {
    user: GitHubUser
    repos: GitHubRepo[]
  }
  