import { motion } from "motion/react";
import { useState } from "react";

type ZoomImageProps = {
  src: string;
  alt?: string;
};

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt = "Image" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden h-[400px] card-hover border-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
      onMouseEnter={() => setHovered(true)}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10" />
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </motion.div>
  );
};

export default ZoomImage;
