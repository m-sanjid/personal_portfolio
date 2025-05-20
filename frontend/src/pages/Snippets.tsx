import { useState, useEffect } from "react";
import { IconSearch, IconX, IconAdjustments } from "@tabler/icons-react";
import { getAllSnippets } from "@/lib/loadSnippets";
import { motion, AnimatePresence } from "motion/react";
import ComponentCard from "@/components/ComponentCard";
import { Snippet } from "@/types";
import Sidebar from "@/components/Sidebar";
import { AnimatedButton } from "@/components/AnimatedButton";

const Snippets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSnippets = async () => {
      try {
        const loadedSnippets = await getAllSnippets();
        setSnippets(loadedSnippets);
      } catch (error) {
        console.error("Error loading snippets:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadSnippets();
  }, []);

  const filteredSnippets = snippets.filter((snippet) => {
    const matchesSearch =
      snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      snippet.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      snippet.tags?.some((tag) => selectedTags.includes(tag));
    return matchesSearch && matchesTags;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex relative">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full max-w-5xl mx-auto p-4 md:ml-64 md:px-4"
      >
        <div className="mb-8">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2"
          >
            Snippets
          </motion.h1>
          <motion.p
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-600 dark:text-neutral-400"
          >
            Browse, preview, and copy ready-to-use code snippets for your
            projects
          </motion.p>
        </div>

        {/* Search and filter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 flex flex-col md:flex-row gap-3"
        >
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IconSearch className="text-neutral-400" size={18} />
            </div>
            <input
              type="text"
              placeholder="Search snippets..."
              className="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <IconX
                  size={16}
                  className="text-neutral-400 hover:text-neutral-600"
                />
              </motion.button>
            )}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <button
              className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 flex items-center gap-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <IconAdjustments size={18} />
              Filters {selectedTags.length > 0 && `(${selectedTags.length})`}
            </button>

            <AnimatePresence>
              {filterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-20 right-0 mt-2 w-64 p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg"
                >
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(
                        new Set(snippets.flatMap((s) => s.tags || [])),
                      ).map((tag) => (
                        <motion.button
                          key={tag}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-2 py-1 text-xs rounded-full ${
                            selectedTags.includes(tag)
                              ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                              : "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                          }`}
                          onClick={() => {
                            setSelectedTags((prev) =>
                              prev.includes(tag)
                                ? prev.filter((t) => t !== tag)
                                : [...prev, tag],
                            );
                          }}
                        >
                          {tag}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Components grid */}
        <AnimatePresence mode="wait">
          {filteredSnippets.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-32"
            >
              {filteredSnippets.map((snippet) => (
                <ComponentCard
                  key={snippet.slug}
                  component={snippet}
                  id={snippet.slug}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center py-12"
            >
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                No components found matching your search criteria.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-4 py-2 text-neutral-600 hover:text-neutral-800 transition-colors"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTags([]);
                }}
              >
                Clear all filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full flex items-center justify-center mb-4">
          <AnimatedButton label="More components" to="/snippets" className="px-4 py-2 border rounded-md bg-primary text-secondary" />
        </div>
      </motion.div>
    </div>
  );
};

export default Snippets;
