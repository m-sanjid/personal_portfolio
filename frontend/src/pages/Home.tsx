import Hero from "../components/Hero";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "./Contact";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ResumeButton } from "@/components/Resume";

const Home = () => {
	return (
		<div className="relative flex flex-col gap-5 max-w-6xl mx-auto">
			<Hero />
			<ProjectsSection />
			<SkillsSection />
			<Contact />
			<TestimonialsSection />
			<div className="fixed top-165 z-10">
				<ResumeButton className="bg-primary text-secondary" />
			</div>
		</div>
	);
};

export default Home;
