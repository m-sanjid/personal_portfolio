import { Project } from "@/types";
import { IconCalendar } from "@tabler/icons-react";
import { motion } from "motion/react";

interface ProjectDescriptionProps {
  project: Project;
}

const ProjectDescription = ({ project }: ProjectDescriptionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl p-6 border mb-8"
    >
      <h2 className="text-2xl font-bold mb-4">About This Project</h2>
      <div className="w-16 h-1 bg-primary mb-6"></div>

      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
        {project.longDescription}
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <IconCalendar className="text-primary" size={18} />
          <span>
            Created:{" "}
            {new Date(project.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDescription;
