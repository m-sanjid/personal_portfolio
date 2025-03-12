import { motion } from "motion/react";

const AboutMe = () => {
	return (
		<section id="about" className="py-2">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					viewport={{ once: true }}
					className="text-center mb-8"
				>
					<h1 className="text-3xl font-semibold p-4">Muhammed Sanjid</h1>
					<p className="max-w-xl text-center font-light">
						Full-stack developer with expertise in modern web technologies and
						passionate for creating elegant, effective solutions
					</p>
				</motion.div>

				<div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<div>
							<h4 className="font-semibold mb-2">My expertise includes:</h4>
							<ul className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 mx-3">
								{expertise.map((i) => (
									<li className="flex items-center gap-2">
										<span className="w-2 h-2 bg-primary rounded-full"></span>
										{i}
									</li>
								))}
							</ul>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;

const expertise = [
	"Frontend Development",
	"Backend Development",
	"Database Design",
	"UI/UX Design",
	"API Development",
	"Performance Optimization",
];
