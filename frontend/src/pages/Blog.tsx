import LoadingBounce from "@/components/LoadingBounce";
import ComingSoon from "@/components/ui/ComingSoon";
import { motion } from "motion/react";

const Blog = () => {
	return (
		<div className=" relative h-screen w-full flex flex-col gap-4 justify-center items-center">
			<ComingSoon />
			<LoadingBounce />
		</div>
	);
};
export default Blog;
