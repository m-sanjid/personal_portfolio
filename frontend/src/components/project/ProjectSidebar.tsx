import { githubFetch } from "@/lib/githubFetch";
import { Project } from "@/types";
import { GitHubData } from "@/types/github";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  IconBrandGithub,
  IconCode,
  IconExternalLink,
  IconGitFork,
  IconStar,
} from "@tabler/icons-react";

interface ProjectSidebarProps {
  project: Project;
}

const ProjectSidebar = ({ project }: ProjectSidebarProps) => {
  const [data, setData] = useState<GitHubData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await githubFetch();
        if (!response.error) {
          const responseData = response as GitHubData;
          setData(responseData);

          const repo = responseData.repos.find(
            (r) => r.name.toLowerCase() === project.id.toLowerCase(),
          );

          setStars(repo?.stargazers_count || 0);
          setForks(repo?.forks_count || 0);
        } else {
          setError(response.error);
        }
      } catch (err: unknown) {
        setError(
          `Error loading GitHub projects: ${err instanceof Error ? err.message : "An unknown error occurred"}`,
        );
      }
    };

    fetchGitHubData();
  }, [project.id]);

  return (
    <div className="space-y-8">
      {/* GitHub Stats Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ y: -3 }}
        className="bg-card rounded-2xl p-6 border border-opacity-50 shadow-sm backdrop-blur-sm"
      >
        <h3 className="text-xl font-bold mb-4">GitHub Stats</h3>
        <div className="w-10 h-0.5 bg-primary/50 mb-6"></div>

        {error || !data ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 text-center">
            <motion.div
              whileHover={{ y: -2 }}
              className="flex flex-col items-center p-4 rounded-xl bg-secondary/5"
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-2"
              >
                <IconStar className="text-primary" size={18} />
              </motion.div>
              <motion.span
                className="font-bold text-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
              >
                {stars}
              </motion.span>
              <span className="text-xs text-muted-foreground">Stars</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="flex flex-col items-center p-4 rounded-xl bg-secondary/5"
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-2"
              >
                <IconGitFork className="text-primary" size={18} />
              </motion.div>
              <motion.span
                className="font-bold text-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
              >
                {forks}
              </motion.span>
              <span className="text-xs text-muted-foreground">Forks</span>
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* Technologies Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ y: -3 }}
        className="bg-card rounded-2xl p-6 border border-opacity-50 shadow-sm backdrop-blur-sm"
      >
        <h3 className="text-xl font-bold mb-4">Technologies</h3>
        <div className="w-10 h-0.5 bg-primary/50 mb-6"></div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "var(--primary)",
              }}
              className="px-4 py-1.5 bg-white/10 hover:text-secondary transition-colors duration-150 text-primary text-sm rounded-full cursor-pointer"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Quick Links Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ y: -3 }}
        className="bg-card rounded-2xl p-6 border border-opacity-50 shadow-sm backdrop-blur-sm"
      >
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <div className="w-10 h-0.5 bg-primary/50 mb-6"></div>

        <div className="space-y-4">
          <motion.a
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.98 }}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/5 transition-colors"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10">
              <IconExternalLink className="text-primary" size={16} />
            </div>
            <span>Live Demo</span>
          </motion.a>

          <motion.a
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.98 }}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/5 transition-colors"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10">
              <IconBrandGithub className="text-primary" size={16} />
            </div>
            <span>GitHub Repository</span>
          </motion.a>

          <motion.a
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.98 }}
            href={`${project.githubLink}/issues`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/5 transition-colors"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10">
              <IconCode className="text-primary" size={16} />
            </div>
            <span>Report Issue</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectSidebar;
