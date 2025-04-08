import { forwardRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  placeholder: string;
  label: string;
  type?: "big" | "small";
  inputType?: string;
  error?: string;
  name?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
};

const InputBox = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  ({ placeholder, label, type = "small", inputType = "text", error, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    
    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: any) => {
      setIsFocused(false);
      if (rest.onBlur) rest.onBlur(e);
    };

    const inputVariants = {
      focused: { 
        scale: 1.01, 
        borderRadius: "10px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
        borderColor: "var(--color-primary)",
      },
      unfocused: { 
        scale: 1, 
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        borderColor: "var(--border-color)",
      },
      error: {
        scale: 1,
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(220, 38, 38, 0.1)",
        borderColor: "rgb(220, 38, 38)",
      }
    };

    const labelVariants = {
      focused: { color: "var(--color-primary)", x: 4, transition: { duration: 0.2 } },
      unfocused: { color: "var(--text-color)", x: 0, transition: { duration: 0.2 } },
      error: { color: "rgb(220, 38, 38)", x: 0, transition: { duration: 0.2 } }
    };

    const getVariant = () => {
      if (error) return "error";
      if (isFocused) return "focused";
      return "unfocused";
    };

    return (
      <div className="space-y-1">
        <motion.label 
          variants={labelVariants}
          animate={getVariant()}
          className="block text-sm font-medium ml-1 transition-colors duration-200"
        >
          {label}
        </motion.label>
        
        <motion.div
          variants={inputVariants}
          animate={getVariant()}
          transition={{ duration: 0.2 }}
        >
          {type === "small" ? (
            <input
              ref={ref as React.RefObject<HTMLInputElement>}
              placeholder={placeholder}
              type={inputType}
              className="py-3 px-4 rounded-lg w-full bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-neutral-50/10 dark:border-neutral-800/50 focus:outline-none transition-all duration-200"
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...rest}
            />
          ) : (
            <textarea
              ref={ref as React.RefObject<HTMLTextAreaElement>}
              className="py-3 px-4 rounded-lg w-full bg-white/5 dark:bg-black/20 backdrop-blur-sm dark:border border-neutral-200/50 dark:border-neutral-800/50 focus:outline-none transition-all duration-200 resize-none"
              rows={5}
              placeholder={placeholder}
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...rest}
            />
          )}
        </motion.div>
        
        <AnimatedError error={error} />
      </div>
    );
  }
);

const AnimatedError = ({ error }: { error?: string }) => {
  return (
    <div className="h-5 ml-1">
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          className="text-xs text-red-600 dark:text-red-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default InputBox;