import { motion, AnimatePresence } from "motion/react";

const IpadScreen = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden my-10 rounded-[32px] relative shadow-lg p-5 bg-black outline-2 outline-[#313131]">
      {/* Ipad front Cam */}
      <div className="absolute rounded-b-sm flex justify-center items-center top-1.5 left-[50%]">
        <div className="border-[#3486b1] bg-[#322E6F] border-[.2px] w-1 h-1 rounded-full flex flex-col justify-evenly items-center">
          <div className="h-px w-px border-[#3E5A7B] border-[.2px] rounded-full bg-[#3486BB] shadow-md shadow-[#8095dd]" />
          <div className="h-px w-px border-[#3486BB] border-[.2px] rounded-full bg-[#8095DD]" />
        </div>
      </div>
      <div className="overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-black"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IpadScreen;
