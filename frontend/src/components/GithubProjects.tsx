import { useEffect, useState } from "react";
import {
  IconBrandGithub,
  IconStar,
  IconGitFork,
  IconClock,
  IconExternalLink,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { githubFetch } from "@/lib/githubFetch";
import { GitHubData } from "@/types/github";
import { formatDate } from "@/lib/formatDate";
import CardSeleton from "./CardSeleton";
import { AnimatedButton } from "./AnimatedButton";

export function GitHubProjects() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await githubFetch();
        if (!response.error) {
          setData(response as GitHubData);
        } else {
          setError(response.error);
        }
      } catch (err: any) {
        setError(`Error loading GitHub projects: ${err?.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (isLoading) {
    return <CardSeleton />;
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-destructive">{error}</p>
        <button className="mt-4" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  if (!data || !data.repos || data.repos.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No GitHub repositories found.</p>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {data.repos.map((repo) => (
        <motion.div key={repo.id} variants={item}>
          <div className="overflow-hidden h-full flex flex-col bg-card rounded-2xl border">
            <div className="p-4 flex-grow">
              <h3 className="font-semibold text-xl mb-2 line-clamp-1">
                {repo.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {repo.description || "No description provided"}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.language && (
                  <div className="bg-muted-foreground/10 text-muted-foreground rounded px-2 py-1">
                    {repo.language}
                  </div>
                )}
                {repo.topics.slice(0, 3).map((topic) => (
                  <div
                    key={topic}
                    className="bg-muted-foreground/10 text-muted-foreground rounded px-2 py-1"
                  >
                    {topic}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <IconStar className="h-4 w-4" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <IconGitFork className="h-4 w-4" />
                  <span>{repo.forks_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <IconClock className="h-4 w-4" />
                  <span>{formatDate(repo.updated_at)}</span>
                </div>
              </div>
            </div>
            <div className="p-4 pt-0 flex gap-2">
              <AnimatedButton
                label="Code"
                to={repo.html_url}
                external
                logo={<IconBrandGithub className="h-5 w-5" />}
                className="bg-accent text-primary rounded-md px-2 py-1"
              />
              {repo.homepage && (
                <AnimatedButton
                  label="Demo"
                  to={repo.homepage}
                  external
                  logo={<IconExternalLink className="h-5 w-5" />}
                  className="bg-accent text-primary rounded-md px-2 py-1"
                />
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
