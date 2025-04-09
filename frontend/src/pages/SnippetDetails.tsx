import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  IconArrowLeft,
  IconCopy,
  IconCode,
  IconEye,
  IconTag,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { getSnippetBySlug, getAllSnippets } from "@/lib/loadSnippets";
import { Snippet } from "@/types";
import Sidebar from "@/components/Sidebar";
import { AnimatedButton } from "@/components/AnimatedButton";

const TABS = ["Preview", "Code", "Usage", "Props", "Examples"];

const SnippetDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Preview");
  const [copied, setCopied] = useState(false);
  const [snippet, setSnippet] = useState<Snippet | undefined>(undefined);
  const [relatedSnippets, setRelatedSnippets] = useState<Snippet[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSnippet() {
      try {
        const loadedSnippet = await getSnippetBySlug(slug || "");
        setSnippet(loadedSnippet);
        const relatedSnippets = await getAllSnippets();
        setRelatedSnippets(
          relatedSnippets
            .filter((snippet) => snippet.slug !== slug)
            .slice(0, 3),
        );
        console.log("Loaded snippet:", loadedSnippet);
      } catch (err) {
        console.error("Failed to load snippet:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadSnippet();
  }, [slug]);

  const copyCode = () => {
    if (snippet?.code) {
      navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-5xl md:ml-64 mx-auto p-4 flex items-center justify-center h-64"
      >
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
      </motion.div>
    );
  }

  if (!snippet) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-5xl md:ml-64 mx-auto p-4"
      >
        <div className="mb-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
            onClick={() => navigate("/snippets")}
          >
            <IconArrowLeft size={18} />
            Back to components
          </motion.button>
        </div>
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold mb-2">Component not found</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            The component you're looking for doesn't exist or has been removed.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => navigate("/snippets")}
          >
            Browse all components
          </motion.button>
        </div>
      </motion.div>
    );
  }

  const Demo = snippet.Demo;

  return (
    <>
      <Sidebar currentSlug={slug} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl md:ml-68 mx-auto p-4"
      >
        {/* Back button and header */}
        <div className="mb-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
            onClick={() => navigate("/snippets")}
          >
            <IconArrowLeft size={18} />
            Back to components
          </motion.button>
        </div>
        {/* Component header info */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex justify-between items-start mr-20">
            <div>
              <div className="flex items-center gap-10">
                <h1 className="text-3xl font-bold mb-2">{snippet.title}</h1>
                <AnimatedButton
                  onClick={copyCode}
                  label="Copy code"
                  className="p-2 rounded-md flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 transition-colors"
                  logo={<IconCopy size={20} />}
                />
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {snippet.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {snippet.tags?.map((tag, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-sm rounded-full flex items-center gap-1"
                  >
                    <IconTag size={12} />
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="text-sm text-neutral-500">
                Added by {snippet.author} · {snippet.createdAt}
              </div>
            </div>
          </div>

          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed top-24 right-6 bg-neutral-800 text-white px-4 py-2 rounded-md shadow-lg z-50"
              >
                Code copied to clipboard!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-b border-neutral-200 dark:border-neutral-800 mb-6"
        >
          <div className="flex overflow-x-auto scrollbar-hide">
            {TABS.map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 flex items-center gap-2 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "Preview" && <IconEye size={16} />}
                {tab === "Code" && <IconCode size={16} />}
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            {activeTab === "Preview" && (
              <div className="py-8 px-4 flex justify-center h-[26rem] items-center border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-900 overflow-auto max-w-4xl mx-auto">
                {Demo && <Demo />}
              </div>
            )}

            {activeTab === "Code" && (
              <div className="relative h-[26rem] bg-neutral-500 w-full max-w-4xl mx-auto overflow-auto p-2 border rounded-2xl">
                <pre className="whitespace-pre-wrap font-mono text-sm text-white">
                  <code>{snippet.code}</code>
                </pre>
              </div>
            )}

            {activeTab === "Usage" && (
              <div className="relative h-[26rem]">
                <pre className="p-4 bg-card rounded-lg overflow-auto max-h-96">
                  <code className="text-sm font-mono">{snippet.usage}</code>
                </pre>
              </div>
            )}

            {activeTab === "Props" && (
              <div className="border border-neutral-200  dark:border-neutral-800 rounded-lg overflow-auto">
                <table className="min-w-full divide-y divide-muted-foreground">
                  <thead className="bg-neutral-50 dark:bg-neutral-900">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Prop
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Default
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800">
                    {snippet.props?.map((prop, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 text-sm font-medium">
                          {prop.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-neutral-500">
                          <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs">
                            {prop.type}
                          </code>
                        </td>
                        <td className="px-6 py-4 text-sm text-neutral-500">
                          {prop.default}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {prop.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "Examples" && (
              <div className="space-y-8 h-[20rem] overflow-auto">
                {snippet.examples?.map((example, idx) => (
                  <div key={idx} className="border rounded-lg overflow-auto">
                    <div className="p-4 bg-neutral-50 dark:bg-neutral-900 border-b">
                      <h3 className="font-medium">{example.title}</h3>
                    </div>
                    <pre className="p-4 bg-card overflow-auto">
                      <code className="text-sm font-mono">{example.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Related components */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Related Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {relatedSnippets.map((relatedSnippet) => (
              <a
                href={`/snippets/${relatedSnippet.slug}`}
                key={relatedSnippet.slug}
                className="border rounded-lg overflow-hidden hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
              >
                <div className="p-4 border-b">
                  <h3 className="font-medium">{relatedSnippet.title}</h3>
                </div>
                <div className="p-4 h-44 flex items-center justify-center bg-card">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="h-full flex items-center justify-center"
                  >
                    {relatedSnippet.Demo && <relatedSnippet.Demo />}
                  </motion.div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SnippetDetails;
