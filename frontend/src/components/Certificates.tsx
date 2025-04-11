import { Certifications } from "@/lib/Constants";
import { motion } from "motion/react";

const Certificates = () => {
  return (
    <div className="w-full h-full bg-black/10 dark:bg-white/10 backdrop-blur-md p-4 rounded-md">
      <div className="grid grid-cols-1 mx-4 gap-2 mb-10">
        {Certifications.map((c, idx) => (
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, delay: idx * 0.3 }}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            key={idx}
            className="mx-4 p-4 bg-card rounded-md border shadow-xl hover:shadow-2xl my-3 h-[12rem] flex flex-col justify-between"
          >
            <motion.div className="flex items-center gap-10">
              <div className="p-2 rounded-md">
                <img
                  src={c.logo}
                  alt={c.title}
                  className="w-16 h-16 object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-semibold md:text-2xl">{c.title}</div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {c.description}
                </div>
                <div className="text-muted-foreground text-sm">
                  {c.longDescription}
                </div>
              </div>
            </motion.div>
            <div className="text-muted-foreground text-sm md:text-base">
              {c.createdAt}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
