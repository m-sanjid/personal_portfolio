import { Link } from "react-router-dom";
import { IconArrowRight, IconHelp, IconLoader2 } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { Snippet } from "@/types";
import { getAllSnippets } from "@/lib/loadSnippets";
import { motion } from "motion/react";

interface SidebarProps {
  className?: string;
  currentSlug?: string;
}

const Sidebar = ({ className, currentSlug }: SidebarProps) => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    async function loadSnippets() {
      try {
        const loadedSnippets = await getAllSnippets();
        setSnippets(loadedSnippets);
      } catch (err) {
        console.error("Failed to load snippets:", err);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    }

    loadSnippets();
  }, []);

  return (
    <motion.aside
      className={`fixed top-0 bottom-0 w-64 pt-20 z-20 hidden md:block ${className}`}
    >
      <div className="h-full border-r border-neutral-200 dark:border-neutral-800 bg-inherit flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
          <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            Snippets
          </h2>
        </div>

        <nav className="flex-grow overflow-y-auto py-2">
          {isLoading ? (
            <div className="flex items-center justify-center h-20 text-neutral-500">
              <IconLoader2 className="animate-spin mr-2" size={18} />
              <span>Loading snippets...</span>
            </div>
          ) : error ? (
            <div className="p-4 text-red-500 text-sm">
              Failed to load snippets. Please try again.
            </div>
          ) : snippets.length === 0 ? (
            <div className="p-4 text-neutral-500 text-sm">
              No snippets found.
            </div>
          ) : (
            <motion.ul className="space-y-1 px-3">
              {snippets.map((snippet, index) => {
                const isActive = snippet.slug === currentSlug;

                return (
                  <motion.li
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    exit={{ x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setHoveredIndex(index);
                    }}
                    onMouseLeave={() => {
                      setIsHovered(false);
                      setHoveredIndex(null);
                    }}
                    key={snippet.slug}
                  >
                    <Link
                      to={`/snippets/${snippet.slug}`}
                      className={`flex px-3 py-2 rounded-md text-sm transition-colors transition-duration-300 ${
                        isActive ? "font-bold" : ""
                      } ${isHovered && hoveredIndex === index ? "text-primary" : "text-muted-foreground"}`}
                    >
                      <span className="truncate">{snippet.title}</span>
                      {isHovered && hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-3"
                        >
                          <IconArrowRight size={16} />
                        </motion.div>
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </nav>

        <div className="border-t border-neutral-200 dark:border-neutral-800 p-4">
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            <p className="mb-2">Need help with snippets?</p>
            <Link
              to="/documentation"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm"
            >
              <IconHelp size={16} className="mr-1 flex-shrink-0" />
              <span className="truncate">View documentation</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
