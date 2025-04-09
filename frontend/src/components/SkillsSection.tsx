import { motion } from "motion/react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiDocker,
  SiGit,
  SiRedis,
} from "react-icons/si";
import { ReactNode } from "react";

interface Skill {
  name: string;
  icon: ReactNode;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillsSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="my-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here are the main tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory 
            title="Frontend" 
            skills={[
              { name: "React", icon: <SiReact className="text-[#61DAFB]" size={24} /> },
              { name: "Next.js", icon: <SiNextdotjs size={24} /> },
              { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={24} /> },
              { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" size={24} /> },
              { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={24} /> },
            ]} 
          />
          
          <SkillCategory 
            title="Backend" 
            skills={[
              { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" size={24} /> },
              { name: "Express", icon: <SiExpress size={24} /> },
              { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={24} /> },
              { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" size={24} /> },
              { name: "Redis", icon: <SiRedis className="text-[#DC382D]" size={24} /> },
            ]} 
          />
          
          <SkillCategory 
            title="Tools & Others" 
            skills={[
              { name: "Git", icon: <SiGit className="text-[#F05032]" size={24} /> },
              { name: "Docker", icon: <SiDocker className="text-[#2496ED]" size={24} /> },
              { name: "RESTful APIs", icon: <ApiIcon size={24} /> },
              { name: "CI/CD", icon: <CiCdIcon size={24} /> },
            ]} 
          />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card backdrop-blur-md rounded-lg p-6"
    >
      <h3 className="text-xl font-bold mb-6 pb-2 border-b">{title}</h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05,zIndex: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 py-3 px-6 hover:bg-black/5 hover:rounded-md dark:hover:bg-white/5 transition-colors border-b"
          >
                {skill.icon}
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

interface IconProps {
  size?: number;
}

// Custom icons for skills that don't have react-icons
const ApiIcon = ({ size = 24 }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const CiCdIcon = ({ size = 24 }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 8v4l3 3"></path>
    <path d="M8.5 8.5L7 7"></path>
    <path d="M16 12h-4"></path>
  </svg>
);


export default SkillsSection; 
