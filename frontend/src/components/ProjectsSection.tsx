import { AnimatePresence, motion } from "motion/react";
import MotionButton from "./MotionButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
	//TODO:change it to real projects
	const featuredProjects = [
		{
			title: "E-Commerce Platform",
			description:
				"A full-featured online store with payment processing and inventory management.",
			tags: ["React", "Node.js", "MongoDB", "Stripe"],
			image:
				"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			link: "https://github.com/example/ecommerce",
		},
		{
			title: "Task Management App",
			description:
				"A collaborative task management tool with real-time updates and team features.",
			tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
			image:
				"https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
			link: "https://github.com/example/task-manager",
		},
		{
			title: "Portfolio Website",
			description:
				"A modern, responsive portfolio website showcasing projects and skills.",
			tags: ["React", "TailwindCSS", "Motion"],
			image:
				"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1055&q=80",
			link: "https://github.com/example/portfolio",
		},
		{
			title: "Task Management App",
			description:
				"A collaborative task management tool with real-time updates and team features.",
			tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
			image:
				"https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
			link: "https://github.com/example/task-manager",
		},
		{
			title: "Portfolio Website",
			description:
				"A modern, responsive portfolio website showcasing projects and skills.",
			tags: ["React", "TailwindCSS", "Motion"],
			image:
				"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1055&q=80",
			link: "https://github.com/example/portfolio",
		},
	];

	return (
		<section
			id="projects"
			className="py-6 bg-black/5 backdrop-blur-md dark:bg-white/5 rounded-md"
		>
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Featured Projects
					</h2>
					<div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Here are some of my recent projects. Each one was built to solve a
						specific problem or explore new technologies.
					</p>
				</motion.div>

				<div className="">
					<ProjectCarousel projects={featuredProjects} />
				</div>
				<MotionButton to="/projects" label="View All Projects" bg="primary" />
			</div>
		</section>
	);
};

export default ProjectsSection;

type projectProps = {
	projects: {
		title: string;
		description: string;
		tags: string[];
		image: string;
		link: string;
	}[];
};

export const ProjectCarousel = ({ projects }: projectProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
	};

	return (
		<div className="w-full max-w-4xl mx-auto p-6">
			<div className="overflow-hidden rounded-[32px] relative shadow-lg p-5 bg-black outline-2 outline-[#313131]">
				{/* Ipad front Cam */}
				<div className="absolute rounded-b-sm flex justify-center items-center top-1.5 left-[50%]">
					<div className="border-[#3486b1] bg-[#322E6F] border-[.2px] w-1 h-1 rounded-full flex flex-col justify-evenly items-center">
						<div className="h-px w-px border-[#3E5A7B] border-[.2px] rounded-full bg-[#3486BB] shadow-md shadow-[#8095dd]" />
						<div className="h-px w-px border-[#3486BB] border-[.2px] rounded-full bg-[#8095DD]" />
					</div>
				</div>
				<div className="overflow-hidden">
					<AnimatePresence initial={false} mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
							className="relative bg-black"
						>
							<img
								src={projects[currentIndex].image}
								alt={projects[currentIndex].title}
								className="w-full h-64 object-cover rounded-t-[20px]"
							/>
							<div className="p-6 bg-neutral-800 rounded-b-[20px]">
								<h3 className="text-2xl font-semibold text-white">
									{projects[currentIndex].title}
								</h3>
								<p className="text-neutral-400 mt-2">
									{projects[currentIndex].description}
								</p>
								<a
									href={projects[currentIndex].link}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-4 inline-block text-neutral-500 dark:text-white hover:underline"
								>
									View Project
								</a>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>

			{/* Navigation Buttons */}
			<button
				onClick={prevSlide}
				className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 p-3 rounded-full hover:bg-black/60 transition"
			>
				<ChevronLeft size={24} />
			</button>

			<button
				onClick={nextSlide}
				className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 p-3 rounded-full hover:bg-black/60 transition"
			>
				<ChevronRight size={24} />
			</button>

			{/* Dots for Navigation */}
			<div className="flex justify-center mt-4 gap-2">
				{projects.map((_, index) => (
					<div
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-primary" : "bg-neutral-500"
							}`}
					></div>
				))}
			</div>
		</div>
	);
};
