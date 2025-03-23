import { useState } from "react";
import { motion } from "motion/react";

interface RepoCardProps {
  title: string;
  description: string;
  link: string;
  handleHover: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseLeave: () => void;
}

const RepoCard = ({
  title,
  description,
  link,
  handleHover,
  handleMouseLeave,
}: RepoCardProps) => {
  return (
    <div
      onMouseEnter={(e) => handleHover(e)}
      onMouseLeave={handleMouseLeave}
      className="relative w-80 h-48 p-4 bg-neutral-800 rounded-lg transition-transform z-20"
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-neutral-400 mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary mt-4 inline-block hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
};

const RepoGrid = () => {
  const [hoverPosition, setHoverPosition] = useState({ left: 0, width: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetLeft, offsetWidth } = e.currentTarget;
    setHoverPosition({ left: offsetLeft, width: offsetWidth });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const repos = [
    {
      title: "awesome-tech-blogs",
      description: "A list of Tech Blogs.",
      link: "https://github.com/example/awesome-tech-blogs",
    },
    {
      title: "fireship.io",
      description: "Build and ship your app faster",
      link: "https://fireship.io",
    },
    {
      title: "mapfvisualizer",
      description: "A map visualization tool.",
      link: "https://github.com/example/mapfvisualizer",
    },
    {
      title: "data-structures-algorithms-interviews",
      description: "Solutions to coding interview problems.",
      link: "https://github.com/example/data-structures",
    },
    {
      title: "opensource.razorpay.com",
      description: "Razorpay Open Source showcase website",
      link: "https://opensource.razorpay.com",
    },
  ];

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-8" onMouseLeave={handleMouseLeave}>
      {repos.map((repo, index) => (
        <div key={index} className="relative">
          <RepoCard
            {...repo}
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
          />
        </div>
      ))}
      {/* Hover Effect */}
      {isHovered && (
        <motion.div
          className="absolute p-4 z-10 bg-black/10 rounded-lg pointer-events-none"
          initial={false}
          animate={{
            left: hoverPosition.left,
            width: hoverPosition.width,
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      )}
      <div className="col-span-full flex justify-center mt-8">
        <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          View all on GitHub
        </button>
      </div>
    </div>
  );
};

export default RepoGrid; 