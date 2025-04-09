import { motion, AnimatePresence } from "motion/react";
import { useState, ReactNode } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import clsx from "clsx";

type AnimatedButtonProps = {
  label: string;
  logo?: ReactNode;
  className?: string;
  to?: string;
  onClick?: () => void;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost";
};

export const AnimatedButton = ({
  label,
  logo,
  className,
  to,
  onClick,
  external = false,
  variant = "primary",
}: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles =
    "my-2 px-3 py-2 rounded-md transition-all duration-300 flex items-center justify-center gap-2";

  const variants: Record<string, string> = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
    secondary:
      "bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
    ghost:
      "bg-transparent text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20",
  };

  return (
    <a
      target={external ? "_blank" : "_self"}
      rel="noopener noreferrer"
      href={to ?? ""}
    >
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className={clsx(baseStyles, variants[variant], className)}
      >
        <span>{label}</span>

        <div className="relative w-5 h-5">
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.div
                key="initial-arrow"
                initial={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute top-0 left-0"
              >
                {logo ? (
                  logo
                ) : (
                  <IconArrowRight className="w-4 h-4 -rotate-45" />
                )}
              </motion.div>
            ) : (
              <motion.div
                key="hover-arrow"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute top-0 left-0"
              >
                {logo ? (
                  logo
                ) : (
                  <IconArrowRight className="w-4 h-4 -rotate-45" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </a>
  );
};

// Example usage
const Demo = () => {
  return (
    <div className="space-y-4">
      <AnimatedButton label="Primary" variant="primary" />
      <AnimatedButton label="Secondary" variant="secondary" />
      <AnimatedButton label="Ghost" variant="ghost" />
    </div>
  );
};

export default Demo;
