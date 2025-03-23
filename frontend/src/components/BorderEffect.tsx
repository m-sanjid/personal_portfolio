import { motion } from "motion/react";

const BorderEffect = ({ text }) => {
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center p-4">
      <div className="relative max-w-4xl w-full">
        <motion.div
          initial={{ width: 0, height: 0, opacity: 1 }}
          whileInView={{ width: "100%", height: "100%" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="border-2 border-neutral-200 dark:border-neutral-800 top-0 left-0 absolute p-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 1.2, duration: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            className="text-lg text-center break-words"
          >
            {text}
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute h-2 w-2 bg-neutral-200 dark:bg-neutral-800 -top-1 -left-1"
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="absolute h-2 w-2 bg-neutral-200 dark:bg-neutral-800 -top-1 -right-1"
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="absolute h-2 w-2 bg-neutral-200 dark:bg-neutral-800 -bottom-1 -left-1"
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="absolute h-2 w-2 bg-neutral-200 dark:bg-neutral-800 -bottom-1 -right-1"
        />
      </div>
    </div>
  );
};

export default BorderEffect;
