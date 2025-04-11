import { motion } from "motion/react";

type ComingSoonProps = {
  message?: string;
  transitionDelay?: number;
  className?: string;
};

const cornerDelays = [1.5, 1.7, 1.6, 1.8];

const ComingSoon = ({
  message = "Blog coming soon",
  transitionDelay = 1.2,
  className = "",
}: ComingSoonProps) => {
  const cornerPositions = [
    "-top-1 -left-1",
    "-top-1 -right-1",
    "-bottom-1 -left-1",
    "-bottom-1 -right-1",
  ];

  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, width: 0, height: 0 }}
        animate={{ opacity: 1, width: "100%", height: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="border border-neutral-200 dark:border-neutral-800 p-4"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: transitionDelay, duration: 1 }}
          className="text-lg text-center"
        >
          {message}
        </motion.h1>
      </motion.div>

      {cornerPositions.map((pos, index) => (
        <motion.div
          key={pos}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: cornerDelays[index], duration: 0.5 }}
          className={`absolute h-2 w-2 bg-neutral-200 dark:bg-neutral-800 ${pos}`}
        />
      ))}

    </div>
  );
};

export default ComingSoon;
