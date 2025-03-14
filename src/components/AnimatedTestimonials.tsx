import {
  IconChevronRight,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "motion/react";

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
      onMouseLeave={() => setActiveCard(1)}
      className={`h-[432px] rounded-lg shadow-xl relative duration-300 ease-in-out bg-gradient-to-br from-neutral-200 dark:from-neutral-800 via-neutral-500 dark:via-gray-900 to-blue-100 dark:to-black ${isActive ? "w-[432px] pl-12 pt-12 " : "w-[100px] p-4 "}`}
    >
      <div
        className={` h-full ${isActive ? "bg-black/10 backdrop-blur-3xl rounded-tl-2xl rounded-br-2xl border-t border-l" : ""}`}
      >
        <div
          className={`font-bold p-4 ${isActive ? "rotate-0 text-2xl" : "rotate-90 text-lg"}`}
        >
          <div>{company}</div>
        </div>
        {isActive ? (
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
          >
            <div className="mt-2">
              <div className="p-6 text-sm">{des}</div>
              <div className="flex p-6">
                {[...Array(rating)].map((_, index) =>
                  index < rating ? (
                    <IconStarFilled key={index} className="text-yellow-600" />
                  ) : (
                    <IconStar key={index} className="text-gray-300" />
                  ),
                )}
              </div>
            </div>
            <div className=" w-full border-t p-4 absolute bottom-0 rounded-br-2xl">
              <div className="p-4 text-lg font-semibold">{name}</div>
              <div className="absolute bottom-3 right-3 dark:bg-white/20 bg-black/10 backdrop-blur-md rounded-lg p-4 perspective-midrange transform-3d">
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
                    className="w-16 h-16 rounded-lg mx-auto"
                  />
                </a>
              </div>
              <div className="flex gap-2 items-end px-4 dark:text-muted-foreground">
                <div>{role}</div>
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

  return (
    <div className="flex gap-3 justify-center items-center min-h-screen">
      {testimonials.map((t) => (
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
          isActive={activeCard === t.id}
          setActiveCard={setActiveCard}
        />
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
];
