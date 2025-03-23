import Hero from "../components/Hero";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "./Contact";
import TestimonialsSection from "@/components/TestimonialsSection";

const Home = () => {
	return (
		<div className="flex flex-col gap-5">
			<Hero />
			<ProjectsSection />
			<SkillsSection />
			<Contact />
			<TestimonialsSection />
		</div>
	);
};

export default Home;
