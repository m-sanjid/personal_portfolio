import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { AnimatedButton } from "../components/AnimatedButton";
import { Project } from "@/types";
import ProjectHeader from "@/components/project/ProjectHeader";
import { projectList } from "@/lib/Constants";
import ProjectDescription from "@/components/project/ProjectDescription";
import ProjectScreenshots from "@/components/project/ProjectScreenshots";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectSidebar from "@/components/project/ProjectSidebar";
import RelatedProjects from "@/components/project/RelatedProjects";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundProject = projectList.find((p) => p.id === id || p.title === id);
    setProject(foundProject || null);
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <motion.div
          animate={{
            rotate: 360,
            transition: { duration: 1, repeat: Infinity, ease: "linear" },
          }}
          className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/projects">
          <AnimatedButton
            label="Back to Projects"
            className="bg-primary text-white rounded-xl inline-block"
          />
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8">
      <ProjectHeader project={project} />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProjectDescription project={project} />

          <ProjectScreenshots
            screenshots={project.screenshots}
            activeImageIndex={activeImageIndex}
            setActiveImageIndex={setActiveImageIndex}
          />

          <ProjectFeatures features={project.features} />
        </div>

        <div>
          <ProjectSidebar project={project} />
        </div>
      </div>

      <RelatedProjects currentProjectId={project.id} />
    </div>
  );
};

export default ProjectDetails;
