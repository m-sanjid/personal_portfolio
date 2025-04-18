import { IconPointFilled, IconFileTextFilled } from "@tabler/icons-react";
import {
  SiExpress,
  SiNetlify,
  SiPostgresql,
  SiRedis,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiAwsorganizations,
  SiVercel,
  SiMongodb,
  SiDocker,
  SiGit,
  SiApifox,
  SiTailwindcss,
  SiNextdotjs,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { useState } from "react";
import Project from "@/pages/Project";
import AboutMe from "./AboutMe";
import { AnimatedButton } from "./AnimatedButton";
import SocialLinks from "./SocialLinks";
import { motion } from "motion/react";
import Certificates from "./Certificates";
import { exp } from "@/lib/Constants";

const Experience = () => {
  return (
    <div className="bg-black/10 dark:bg-white/10 backdrop-blur-md w-full p-4 rounded-md">
      <div>
        {exp.map((i, idx) => (
          <div key={idx} className="border-b border-neutral-400 p-6 m-4">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-2xl ml-2">{i.title}</div>
              <div className="py-1 px-4 rounded-md font-medium bg-white/10 backdrop-blur-md">
                {i.period}
              </div>
            </div>
            <div className="mx-2 font-medium flex justify-between items-center my-1">
              <div>{i.company}</div>
              <div>{i.location}</div>
            </div>
            <div className="mx-4 px-4">
              <div>
                {i.points.map((p, idx) => (
                  <div className="flex gap-2 items-baseline" key={idx}>
                    <IconPointFilled size={10} />
                    {p}
                  </div>
                ))}
              </div>
              <div className="items-center gap-2 mt-4 grid grid-cols-3 md:grid-cols-6">
                {i.skill.map((s) => (
                  <div
                    key={s}
                    className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-md flex items-center"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="bg-black/10 dark:bg-white/10 backdrop-blur-md w-full p-4 rounded-md">
      <div className="border-b border-neutral-400 p-6 m-4">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-2xl ml-2">
            Bachelor of Technology
          </div>
          <div className="bg-white/10 backdrop-blur-md py-1 px-3 rounded-md mr-2">
            2019-2023
          </div>
        </div>
        <div className="mx-4">
          <div className="font-medium mb-3">
            APJ Abdul Kalam Technological University
          </div>
          <div className="text-sm"></div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="bg-black/10 dark:bg-white/10 backdrop-blur-md w-full p-4 rounded-md">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        {skills.map((s, idx) => (
          <div key={idx} className="p-4">
            <div className="font-semibold text-2xl mb-2">{s.title}</div>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {s.skill.map((i, Idx) => (
                  <div
                    key={Idx}
                    className="bg-white/10 backdrop-blur-md py-1 px-2 rounded-md text-sm flex gap-2 items-center"
                  >
                    <div>{i.icon}</div>
                    <div>{i.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const handleDownloadResume = () => {
  const driveDownloadLink = `${import.meta.env.VITE_RESUME_URL}`;
  window.open(driveDownloadLink, "_blank");
};

export const ResumeButton = ({ className }: { className?: string }) => {
  return (
    <AnimatedButton
      className={`px-4 py-2 backdrop-blur-lg rounded-md flex gap-2 items-center ${className}`}
      onClick={handleDownloadResume}
      label="Download CV"
      logo={<IconFileTextFilled className="h-5 w-5" />}
    />
  );
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
  return (
    <div className="min-h-screen w-full max-w-5xl mx-auto">
      <div className="flex justify-center items-center flex-col gap-6 my-4 bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-md p-6">
        <div>
          <AboutMe />
        </div>
        <div className="flex gap-4">
          <ResumeButton className="bg-white/10 hover:bg-black/20 dark:bg-black/10 dark:hover:bg-white/20" />
          <div>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="bg-black/10 dark:bg-white/10 backdrop-blur-md p-3 w-full rounded-md flex gap-2"
        >
          {tabs.map((i, id) => (
            <div key={id}>
              <motion.button
                onMouseEnter={() => setHoveredIndex(id)}
                onClick={() => setActiveTab(i.id)}
                className={`relative p-1 text-xs md:text-lg md:p-4 md:mx-3 rounded-md cursor-pointer ${activeTab == i.id ? "dark:bg-white/30 bg-black/30" : "bg-white/10"}`}
              >
                {i.label}
                {hovered && hoveredIndex === id && (
                  <motion.div
                    className="absolute inset-0 bg-black/30  dark:bg-white/30 rounded-md"
                    layoutId="active-tab"
                  />
                )}
              </motion.button>
            </div>
          ))}
        </div>
        <div>
          {activeTab === "experience" && (
            <>
              <div className="mx-4 font-semibold text-lg p-4">Experience</div>
              <Experience />
            </>
          )}
        </div>
        <div>
          {activeTab === "education" && (
            <>
              <div className="mx-4 font-semibold text-lg p-4">Education</div>
              <Education />
            </>
          )}
        </div>
        <div>
          {activeTab === "projects" && (
            <>
              <Project titleSize="small" />
            </>
          )}
        </div>
        <div>
          {activeTab === "skills" && (
            <>
              <div className="mx-4 font-semibold text-lg p-4">Skills</div>
              <Skills />
            </>
          )}
        </div>
        <div>
          {activeTab === "certification" && (
            <>
              <div className="mx-4 font-semibold text-lg p-4">
                Certifications
              </div>
              <Certificates />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;

const skills = [
  {
    id: 1,
    title: "Frontend",
    skill: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Javascript", icon: <SiJavascript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Nextjs", icon: <SiNextdotjs /> },
      { name: "TailwindCss", icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 2,
    title: "Backend",
    skill: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "RESTful APIs", icon: <SiApifox /> },
    ],
  },
  {
    id: 3,
    title: "Databases",
    skill: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Postgress", icon: <SiPostgresql /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    id: 3,
    title: "Devops",
    skill: [
      { name: "Git", icon: <SiGit /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "CI/CD", icon: <SiDocker /> },
      { name: "AWS", icon: <SiAwsorganizations /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
    ],
  },
];

const tabs = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certification", label: "Certification" },
];
