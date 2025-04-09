import { motion } from "motion/react";
import { AnimatedButton } from "./AnimatedButton";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "@/lib/Constants";
import { Project } from "@/types";

const ProjectsSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-6 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-card mx-auto mb-6"></div>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a
            specific problem or explore new technologies.
          </p>
        </motion.div>

        <div className="relative">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <AnimatedButton
            to="/projects"
            label="View All Projects"
            className="bg-accent rounded-md border z-50"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

export const FeaturedProjectCard = ({
  project,
  isPage,
}: {
  project: Project;
  isPage?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`${isPage ? "md:h-[54rem] justify-between md:grid-rows-5 gap-8" : "md:h-[24rem] md:grid-cols-3 gap-4"} rounded-[48px] bg-card  p-4 mb-6 border grid grid-cols-1 `}
    >
      <div className={`${isPage ? "md:row-span-2" : ""}`}>
        <div className="flex flex-col p-6 mt-2 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="text-lg font-semibold">{project.title}</div>
            <div className="text-muted-foreground">
              {isPage
                ? project.longDescription
                : project.description.slice(0, 100) + "..."}
            </div>
          </motion.div>
          <div
            className={`${isPage ? "md:grid-cols-4" : "grid-cols-2"} grid gap-2 mt-4`}
          >
            {project.tags.map((tag, index) => (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="px-2 text-xs py-1 text-center bg-primary/10 text-primary rounded-full"
                key={index}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <div
            className={`flex ${isPage ? "justify-between" : "flex-col"} gap-1 mt-2`}
          >
            <AnimatedButton
              to={project.liveLink}
              label="Live Demo"
              logo={<IconExternalLink className="w-5 h-5" />}
              className="bg-accent border rounded-xl"
            />
            <AnimatedButton
              to={project.githubLink}
              label="View Code"
              logo={<IconBrandGithub className="w-5 h-5" />}
              className="bg-accent border rounded-xl"
            />
          </div>
        </div>
      </div>
      <Link
        to={`/projects/${project.title}`}
        className={`${isPage ? "md:row-span-3 h-[30rem]" : "md:col-span-2 h-[20rem]"} relative w-full  flex flex-col p-4 rounded-4xl items-center justify-center border overflow-hidden backdrop-blur-2xl`}
      >
        {/* Background effect */}
        <div className="absolute top-0 shadow-2xl shadow-white border-r-2 border-white right-1/3 w-full h-full opacity-50 bg-gradient-to-l blur-2xl from-primary via-secondary to-transparent" />
        <div className="absolute top-0 md:-top-14 blur-xs font-black bg-clip-text bg-transparent bg-gradient-to-b from-primary via-primary/50 text-[40px] md:text-[120px] to-transparent text-transparent">
          PROJECTS
        </div>
        <div className="z-10 w-16 h-16 overflow-hidden p-2 mb-2 bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-md">
          <img
            src={project.logo}
            alt={project.title}
            className="w-full h-full rounded-sm"
          />
        </div>
        <div
          className="z-10 w-full h-full border rounded-3xl overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full h-full object-cover"
            src={project.image}
            alt={project.title}
          />
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="absolute top-0 w-full flex items-center justify-center h-full bg-black/50 dark:bg-white/50"
            >
              <AnimatedButton
                label="View Project Details"
                className="bg-accent rounded-md"
                to={`/project/${project.title}`}
              />
            </motion.div>
          )}
        </div>
      </Link>
    </div>
  );
};
