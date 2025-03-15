import { IconChevronRight } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "motion/react";
import MeteorLine from "./BeamBorder";
import AnimatedStars from "./AnimatedStars";

interface Props {
  name: string;
  des: string;
  pic: string;
  rating: number;
  id: number;
  social?: string;
  role?: string;
  company?: string;
  companyUrl?: string;
  isActive: boolean;
  setActiveCard: Dispatch<SetStateAction<number>>;
}

export const TestCard = ({
  name,
  des,
  pic,
  rating,
  id,
  social,
  role,
  company,
  companyUrl,
  isActive,
  setActiveCard,
}: Props) => {
  return (
    <div
      onMouseEnter={() => setActiveCard(id)}
      onMouseLeave={() => setActiveCard(id)}
      className={`h-[432px] max-w-4xl mx-auto rounded-lg shadow-xl relative duration-600 ease-in-out bg-gradient-to-tr from-neutral-200 dark:from-black via-neutral-500 transition-all dark:via-white/5 to-blue-100 dark:to-black ${isActive ? "md:w-[432px] md:pl-12 md:pt-12 bg-vignette bg-dot-grid border dark:bg-black " : "w-[100px] p-4 "}`}
    >
      <div
        className={` h-full ${isActive ? "bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-tl-lg rounded-br-lg rounded-lg border-t border-l" : ""}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: isActive ? 0 : 90 }}
          whileHover={{ scale: 1.12, rotate: isActive ? 0 : 90 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
          className={`font-bold p-4 ${isActive ? "text-2xl" : "text-lg"} origin-center`}
        >
          {company}
        </motion.div>
        {isActive ? (
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="mt-2">
              <div className="p-2 md:p-4 text-xs md:text-sm">{des}</div>
              <AnimatedStars rating={rating} />
            </div>
            <MeteorLine />
            <div className=" w-full p-4 absolute bottom-0 rounded-br-2xl">
              <div className="p-4 text-lg font-semibold">{name}</div>
              <div className="absolute bottom-3 right-3 dark:bg-white/20 bg-black/10 backdrop-blur-md rounded-lg md:p-4 perspective-midrange transform-3d">
                <a href={social ?? "https://linkedin.com/"} target="_blank">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{
                      scale: 1.12,
                      translateZ: 40,
                      translateX: -10,
                      translateY: 10,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    src={pic}
                    alt={name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-lg mx-auto"
                  />
                </a>
              </div>
              <div className="md:flex gap-2 items-end px-4 dark:text-muted-foreground">
                <div>{role} | </div>
                <a href={companyUrl ?? "#"} target="_blank" className="text-sm">
                  {company}
                </a>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="absolute bottom-3 left-10">
            <IconChevronRight />
          </div>
        )}
      </div>
    </div>
  );
};

const AnimatedTestimonials = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory justify-center items-center min-h-screen">
      {testimonials.map((t) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: t.id * 0.2 }}
        >
          <TestCard
            key={t.id}
            id={t.id}
            name={t.name}
            des={t.content}
            pic={t.avatar}
            role={t.role}
            company={t.company}
            social={t.social}
            companyUrl={t.companyUrl}
            rating={t.rating || 5}
            isActive={isSmallScreen || activeCard === t.id}
            setActiveCard={setActiveCard}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedTestimonials;

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    social: "https://linkedin.com",
    role: "Product Manager",
    company: "TechCorp",
    companyUrl: "",
    content:
      "Muhammed is an exceptional developer who delivered our project ahead of schedule. His attention to detail and problem-solving skills are impressive. We'll definitely work with him again.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO",
    company: "StartupX",
    content:
      "Working with Muhammed was a great experience. He understood our requirements perfectly and implemented solutions that exceeded our expectations. His technical knowledge is outstanding.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "CreativeStudio",
    content:
      "Muhammed has a rare combination of technical expertise and design sensibility. He transformed our concepts into a beautiful, functional application that our users love.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "CreativeStudio",
    content:
      "Muhammed has a rare combination of technical expertise and design sensibility. He transformed our concepts into a beautiful, functional application that our users love.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "CreativeStudio",
    content:
      "Muhammed has a rare combination of technical expertise and design sensibility. He transformed our concepts into a beautiful, functional application that our users love.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "Sarah Johnson",
    social: "https://linkedin.com",
    role: "Product Manager",
    company: "TechCorp",
    companyUrl: "",
    content:
      "Muhammed is an exceptional developer who delivered our project ahead of schedule. His attention to detail and problem-solving skills are impressive. We'll definitely work with him again.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
  },
  {
    id: 7,
    name: "David Chen",
    role: "CTO",
    company: "StartupX",
    content:
      "Working with Muhammed was a great experience. He understood our requirements perfectly and implemented solutions that exceeded our expectations. His technical knowledge is outstanding.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 4,
  },
];
