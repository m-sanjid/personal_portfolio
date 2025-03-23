import ProjectCard from "@/components/ProjectCard";

const Project = ({ titleSize = "big" }: { titleSize?: "big" | "small" }) => {
  return (
    <div className=" w-full h-full">
      <div
        className={`${titleSize === "big" ? "text-3xl" : "text-lg"} mx-4 p-4 font-semibold`}
      >
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-md">
        {projectList.map((p) => (
          <ProjectCard
            title={p.title}
            description={p.desc}
            demo={p.demo}
            tags={p.tag}
            liveLink={p.link}
            githubUrl={p.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;

const projectList = [
  {
    title: "Dev Stats",
    desc: "A collaboration tool for developer",
    demo: "devstats.png",
    tag: ["Nextjs", "tailwindcss", "typescript"],
    link: "https://dev-stats-nine.vercel.app/",
    github: "https://github.com/m-sanjid/dev_stats",
  },
  {
    title: "BefitAI",
    desc: "AI powered meal planner for fitness enthusiats",
    demo: "befit.png",
    tag: ["Nextjs", "tailwindcss", "typescript"],
    link: "https://ai-meal-planner-nine.vercel.app/",
    github: "https://github.com/m-sanjid/ai-meal-planner",
  },
];
