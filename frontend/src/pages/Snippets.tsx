import UiCard from "@/components/UiCard";
import { IconCode } from "@tabler/icons-react";
import { useState } from "react";

const Components = () => {
	const [showCode, setShowCode] = useState(false);

	const toggleShowCode = () => {
		setShowCode((prev) => !prev);
	};
	return (
		<div className="w-[500px] h-[400px] rounded-2xl border-sky-200 hover:border overflow-hidden bg-black/20 dark:bg-white/10 backdrop-blur-md flex flex-col gap-3 items-center">
			<div className="w-full border-neutral-400 border-b text-center p-2 font-semibold text-xl">
				Heading
			</div>
			<div
				className=" absolute right-3 top-2 p-1 rounded-md flex items-center bg-neutral-500 hover:bg-neutral-300"
				onClick={toggleShowCode}
			>
				<IconCode strokeWidth={1} />
			</div>
			<div className="p-4">
				{showCode ? (
					<>
						<div>Desc</div>
						<ComponentPreview />
					</>
				) : (
					<div className="w-[50%] mx-auto">
						<UiCard />
					</div>
				)}
			</div>
		</div>
	);
};

export const ComponentPreview = () => {
	return (
		<div>
			<div className="bg-black/20 w-[450px] h-[280px] p-4 rounded-md">div</div>
		</div>
	);
};

const Snippets = () => {
	return (
		<div className="flex flex-col justify-center w-full max-w-5xl mx-auto ">
			<div className="text-center text-xl font-semibold my-10">Components</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Components />
				<Components />
				<Components />
			</div>
		</div>
	);
};

export default Snippets;
