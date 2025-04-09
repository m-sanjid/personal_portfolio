"use client";
import { motion } from "motion/react";

const BorderEffect = ({ text }: { text: string }) => {
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center p-4">
      <div className="relative max-w-4xl w-full">
        {/* Border Animation */}
        <motion.div
          initial={{ clipPath: "inset(100% 100% 100% 100%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="border-2 border-neutral-200 dark:border-neutral-800 absolute inset-0 rounded-md p-4"
        >
          {/* Text Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="text-lg text-center break-words"
          >
            {text}
          </motion.h1>
        </motion.div>

        {/* Corner Dots */}
        {[
          "-top-1 -left-1",
          "-top-1 -right-1",
          "-bottom-1 -left-1",
          "-bottom-1 -right-1",
        ].map((position, index) => (
          <motion.div
            key={position}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 1.3 + index * 0.1, duration: 0.4 }}
            className={`absolute h-2 w-2 bg-neutral-200 dark:bg-neutral-800 ${position} rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default BorderEffect;
