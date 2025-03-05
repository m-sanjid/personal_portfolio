import { motion } from "motion/react";
import { useState } from "react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const ProjectCard = ({
  title,
  description,
  demo,
  tags,
  githubUrl,
  liveLink,
}: {
  title: string;
  description: string;
  demo: string;
  tags?: string[];
  githubUrl?: string;
  liveLink?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {/* Image */}
      <motion.div
        className="group relative rounded-xl overflow-hidden h-[400px] border-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 z-10" />
          <img
            src={demo}
            alt="alt"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transition-all duration-300">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags?.map((tag) => (
              <span className="px-2 py-1 bg-white/20 text-secondary-foreground rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div>
            <div className="font-bold text-xl p-1 text-white ">{title}</div>
            <div className="font-light text-sm p-1 text-neutral-300 mb-1">
              {description}
            </div>
          </div>
          <div
            className={`flex gap-4 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href={liveLink}
              className="flex gap-2 hover:bg-neutral-700 px-3 py-1 rounded-lg font-medium text-neutral-200"
            >
              <span>Live Demo</span>
              <IconExternalLink strokeWidth={1.5} />
            </a>
            <a
              href={githubUrl}
              className="flex gap-2 hover:bg-neutral-700 px-3 py-1 rounded-lg font-medium text-neutral-200"
            >
              View Code
              <IconBrandGithub strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
