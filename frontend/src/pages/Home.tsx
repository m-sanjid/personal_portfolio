import Hero from "../components/Hero";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "./Contact";
import { ResumeButton } from "@/components/Resume";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const Home = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <div className="relative flex flex-col gap-5 max-w-6xl mx-auto">
      <Hero />
      <ProjectsSection id="projects" />
      <SkillsSection id="skills" />
      <Contact id="contact" />
      <div
        className="fixed bottom-10 right-10 z-10 hidden md:block"
        style={{
          opacity: isScrolled ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <ResumeButton className="bg-primary text-secondary" />
      </div>
    </div>
  );
};

export default Home;
