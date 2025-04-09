import { navItems } from "./Navbar";
import SocialLinks from "./SocialLinks";
import { motion } from "motion/react";
import { useState } from "react";
import { IconArrowRight } from "@tabler/icons-react";

const Footer = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="border-t mt-10 p-4 max-w-5xl mx-auto flex flex-col items-center gap-3">
      <h1 className="font-semibold text-xl pb-4">Muhammed Sanjid</h1>
      <motion.ul
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setHoveredIndex(null);
        }}
        className="flex flex-col md:flex-row gap-3 text-sm pb-3"
      >
        {navItems.map((i, index) => (
          <motion.li
            key={i.label}
            className="hover:bg-black/10 relative dark:hover:bg-white/10 px-3 py-1 rounded-md cursor-pointer"
            onMouseEnter={() => {
              setHoveredIndex(index);
            }}
          >
            <a href={i.path}>{i.label}</a>
            {hovered && hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute -right-4 top-1/2 -translate-y-1/2"
              >
                <IconArrowRight size={16} />
              </motion.div>
            )}
          </motion.li>
        ))}
      </motion.ul>
      <a
        href="mailto:contact@sanjid.in"
        className="text-sm text-muted-foreground py-4"
      >
        &copy; Muhammed Sanjid.
      </a>
      <div className="mt-2">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
