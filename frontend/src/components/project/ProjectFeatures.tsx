import { motion } from "motion/react";

interface ProjectFeaturesProps {
  features: string[];
}

const ProjectFeatures = ({ features }: ProjectFeaturesProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ y: -3 }}
      className="bg-card rounded-2xl p-8 border border-opacity-50 shadow-sm mb-10 backdrop-blur-sm"
    >
      <h2 className="text-2xl font-bold mb-4">Key Features</h2>
      <div className="w-12 h-0.5 bg-primary mb-8 relative">
        <motion.div
          className="absolute top-0 left-0 w-3 h-0.5 bg-primary"
          animate={{ x: [0, 32, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <ul className="space-y-5">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ x: 3 }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 mt-1">
              <motion.div
                whileHover={{ scale: 1.2, backgroundColor: "var(--primary)" }}
                className="w-3 h-3 bg-primary/40 rounded-full"
              />
            </div>
            <span className="text-muted-foreground">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProjectFeatures;
