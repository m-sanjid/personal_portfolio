import { motion } from "motion/react";
const ComingSoon = () => {
	return (
		<div className="relative">
			<motion.div
				initial={{ opacity: 0, width: 0, height: 0 }}
				animate={{ opacity: 1, width: "100%", height: "100%" }}
				transition={{ duration: 1, ease: "easeInOut" }}
				className="border-neutral-200 dark:border-neutral-800 border top-0 p-4 inset-0"
			>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2, duration: 1 }}
					className="text-lg text-center"
				>
					Blog coming soon
				</motion.h1>
			</motion.div>
			<div className=" absolute h-2 w-2 bg-neutral-200 dark:bg-neutral-800 -top-1 -left-1" />
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ delay: 1.5, duration: 0.5 }}
				className="absolute h-2 w-2 bg-neutral-200 dark:bg-neutral-800 -top-1 -left-1"
			/>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ delay: 1.7, duration: 0.5 }}
				className="absolute h-2 w-2 bg-neutral-200 dark:bg-neutral-800 -top-1 -right-1"
			/>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ delay: 1.6, duration: 0.5 }}
				className="absolute h-2 w-2 bg-neutral-200 dark:bg-neutral-800 -bottom-1 -left-1"
			/>
			<motion.div
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ delay: 1.8, duration: 0.5 }}
				className="absolute h-2 w-2 bg-red-500 dark:bg-neutral-800 -bottom-1 -right-1"
			/>
			<motion.div className=" absolute h-2 w-2 bg-neutral-200 dark:bg-neutral-800 -bottom-1 -right-1" />
		</div>
	);
};

export default ComingSoon;
