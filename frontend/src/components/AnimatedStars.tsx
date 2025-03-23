import { motion } from "motion/react";
import { IconStarFilled, IconStar } from "@tabler/icons-react";

export default function AnimatedStars({ rating }: { rating: number }) {
  return (
    <div className="flex p-6 gap-1">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: index * 0.3,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.3,
            rotate: 10,
            transition: { duration: 0.2 },
          }}
          className={`${index < rating
              ? "text-yellow-500 drop-shadow-lg"
              : "text-transparent"
            }`}
        >
          {index < rating ? (
            <IconStarFilled size={28} />
          ) : (
            <IconStar size={28} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
