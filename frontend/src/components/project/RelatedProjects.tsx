import { projectList } from "@/lib/Constants";
import { motion } from "motion/react";
import { AnimatedButton } from "../AnimatedButton";

interface RelatedProjectsProps {
  currentProjectId: string;
}

const RelatedProjects = ({ currentProjectId }: RelatedProjectsProps) => {
  const relatedProjects = projectList
    .filter((project) => project.id !== currentProjectId)
    .slice(0, 2);

  return (
    <div className="mt-20 mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-3">Related Projects</h2>
        <div className="w-16 h-0.5 bg-primary mx-auto relative">
          <motion.div
            className="absolute top-0 left-0 w-4 h-0.5 bg-primary"
            animate={{ x: [0, 48, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {relatedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-card rounded-2xl overflow-hidden border border-opacity-50 shadow-sm group backdrop-blur-sm"
          >
            <div className="h-56 overflow-hidden relative">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7 }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-6">
              <motion.h3
                whileHover={{ x: 3 }}
                className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
              >
                {project.title}
              </motion.h3>

              <p className="text-muted-foreground mb-5 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <AnimatedButton
                to={`/projects/${project.id}`}
                label="View Project"
                className="bg-primary text-white rounded-full w-full py-2.5"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;
