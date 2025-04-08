import { AnimatedButton } from "@/components/AnimatedButton";
import { FeaturedProjectCard } from "@/components/ProjectsSection";
import { projectList } from "@/lib/Constants";
import { IconBrandGithub } from "@tabler/icons-react";
import { GitHubProjects } from "@/components/GithubProjects";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Project = ({ titleSize }: { titleSize?: "small" | "large" }) => {
  const githubLink = "https://github.com/m-sanjid";
  const tabs = ["Projects", "Github"];
  const [selectedTab, setSelectedTab] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  return (
    <div className=" w-full h-full">
      <div className="flex flex-col gap-2 mb-10">
        <div className="">
          <div
            className={
              titleSize === "small"
                ? "text-lg mx-4 p-4 font-semibold"
                : "text-3xl mx-4 p-4 font-semibold"
            }
          >
            Projects
          </div>
        </div>
        <div
          onMouseLeave={() => setIsHovered(null)}
          className="flex gap-4 justify-start items-center mx-4 bg-accent w-fit rounded-xl px-6 py-2"
        >
          {tabs.map((tab, idx) => (
            <motion.button
              key={tab}
              onMouseEnter={() => setIsHovered(idx)}
              onClick={() => setSelectedTab(idx)}
              className={`relative z-10 px-4 py-2 rounded-xl transition-colors duration-300 ${selectedTab === idx
                  ? "text-primary font-semibold underline underline-offset-4"
                  : "text-muted-foreground"
                }`}
            >
              {tab}
              {isHovered === idx && (
                <motion.div
                  layoutId="hover"
                  className="absolute inset-0 z-0 bg-black/10 dark:bg-white/10 rounded-xl"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {selectedTab === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
            >
              <div className="text-muted-foreground mx-4 p-4">
                From design to deployment — these projects show how I love to
                build stuff that works and looks great.
              </div>
              <div
                className={`${titleSize === "small" ? "grid grid-cols-1 gap-4 mx-4" : "grid grid-cols-1 gap-4 mx-4"}`}
              >
                {projectList.map((project, index) => (
                  <FeaturedProjectCard
                    key={index}
                    project={project}
                    isPage={titleSize !== "small"}
                  />
                ))}
              </div>
            </motion.div>
          )}
          {selectedTab === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
            >
              <div className="text-muted-foreground mx-4 p-4">
                View Preview Projects From My Github.
              </div>
              <div className="grid grid-cols-1 gap-4 mx-4">
                <GitHubProjects />
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center my-10">
        <AnimatedButton
          to={githubLink}
          label="View Github Profile"
          logo={<IconBrandGithub size={20} />}
          className="bg-accent rounded-md border z-50"
          external
        />
      </div>
    </div>
  );
};

export default Project;
