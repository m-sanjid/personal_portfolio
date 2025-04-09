import { motion } from "motion/react";

const MotionButton = ({
  label,
  to,
  bg,
  className,
}: {
  label: string;
  to: string;
  bg: "primary" | "secondary";
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className={`flex flex-col md:flex-row gap-4 justify-center mb-12 ${className}`}
    >
      <a
        href={to}
        className={`px-6 py-3 backdrop-blur-md rounded-lg text-xs md:text-lg  ${bg === "primary" ? "dark:bg-white dark:text-black bg-neutral-600 text-neutral-200 dark:hover:bg-neutral-600" : "bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20"} transition-colors`}
      >
        {label}
      </a>
    </motion.div>
  );
};

export default MotionButton;
