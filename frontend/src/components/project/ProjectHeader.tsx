import { Project } from "@/types";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

import { motion } from "motion/react";
import { AnimatedButton } from "../AnimatedButton";

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-10"></div>

      {/* Hero image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[40vh] md:h-[50vh] relative"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Project title and info overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatedButton
                label="Live Demo"
                className="bg-black/50 backdrop-blur-sm text-white rounded-xl"
                logo={<IconExternalLink size={18} />}
              />
            </motion.a>

            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatedButton
                label="View Code"
                className="bg-black/50 backdrop-blur-sm text-white rounded-xl"
                logo={<IconBrandGithub size={18} />}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectHeader;
