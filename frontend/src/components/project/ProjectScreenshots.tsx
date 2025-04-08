import { AnimatePresence, motion } from "motion/react";

interface ProjectScreenshotsProps {
  screenshots: string[];
  activeImageIndex: number;
  setActiveImageIndex: (index: number) => void;
}

const ProjectScreenshots = ({
  screenshots,
  activeImageIndex,
  setActiveImageIndex,
}: ProjectScreenshotsProps) => {
  return (
    <div className="mb-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-4"
      >
        Project Screenshots
      </motion.h2>
      <div className="w-16 h-1 bg-primary mb-6"></div>

      {/* Main screenshot display */}
      <div className="relative overflow-hidden rounded-xl border h-[400px] mb-4">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImageIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            src={screenshots[activeImageIndex]}
            alt={`Screenshot ${activeImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Thumbnail navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer border-2 rounded-lg overflow-hidden ${index === activeImageIndex ? "border-primary" : "border-transparent"}`}
            onClick={() => setActiveImageIndex(index)}
          >
            <img
              src={screenshot}
              alt={`Thumbnail ${index + 1}`}
              className="w-20 h-20 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectScreenshots;
