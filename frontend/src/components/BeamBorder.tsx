import { motion } from "motion/react";

export default function MeteorLine() {
  return (
    <div className="relative w-full h-px bg-gray-800 overflow-hidden">
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "100%", opacity: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: 0.2,
        }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white dark:via-yellow-500 to-transparent"
      />
    </div>
  );
}
