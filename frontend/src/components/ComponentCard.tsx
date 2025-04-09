import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { IconCode, IconTag } from "@tabler/icons-react";
import { Snippet } from "@/types";

const ComponentCard = ({
  component,
  id,
}: {
  component: Snippet;
  id: string;
}) => {
  const [showCode, setShowCode] = useState(false);

  const toggleShowCode = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowCode((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Link
        to={`/snippets/${id}`}
        className="group relative w-full h-[400px] overflow-hidden transition-all duration-300 flex flex-col"
      >
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 p-4 overflow-hidden bg-card rounded-2xl border"
        >
          <AnimatePresence mode="wait">
            {showCode ? (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="relative h-full overflow-auto rounded-md bg-neutral-100 dark:bg-neutral-800 p-4"
              >
                <pre className="text-sm font-mono">
                  <code>
                    {component.code || "// Component code would go here"}
                  </code>
                </pre>
              </motion.div>
            ) : (
              <motion.div
                key="preview"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="h-full flex items-center justify-center"
              >
                {component.Demo && <component.Demo />}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <div className="w-full p-3 flex justify-between items-center">
          <h3 className="font-semibold text-lg truncate">{component.title}</h3>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              onClick={toggleShowCode}
              aria-label={showCode ? "Show preview" : "Show code"}
            >
              <IconCode
                size={20}
                strokeWidth={1.5}
                className="text-muted-foreground"
              />
            </motion.button>
          </div>
        </div>
        <div className="p-2 flex justify-between items-center">
          <div className="grid grid-cols-3 gap-2">
            {component.tags?.map((tag, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-2 py-px text-xs bg-accent text-muted-foreground rounded-full flex items-center gap-1"
              >
                <IconTag size={12} />
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ComponentCard;
