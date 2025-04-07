import { AnimatedButton } from "./AnimatedButton";
import { SocialLinks } from "./ContactCard";
import { ResumeButton } from "./Resume";
import Typewriter from "./Typewriter";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="p-4 flex flex-col gap-2 m-4 h-fit">
        <div className="w-full h-fit p-4 grid grid-cols-1 md:grid-cols-2 items-start justify-between relative">
          <div className="">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-3xl md:text-5xl font-semibold mb-4"
            >
              Muhammed Sanjid
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mb-4"
            >
              <Typewriter text="Software Engineer" speed={100} />
            </motion.div>
          </div>
          <div>
            {/* TODO: Replace with pic */}
            <div className="p-4 h-20 w-20 bg-black border-4 border-red-600 top-0 right-0 md:absolute"></div>
          </div>
        </div>
        <div className="mt-4 p-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="md:text-lg text-muted-foreground max-w-2xl mb-6 flex items-start"
          >
            A passionate software developer crafting beautiful and functional
            web experiences. I specialize in building modern applications with a
            focus on user experience and clean code.
          </motion.p>{" "}
          <div className="flex gap-4 items-center justify-center">
            <AnimatedButton className="bg-primary text-secondary rounded-md border" label="Get in Touch" to="/contact" />
            <AnimatedButton className="bg-secondary rounded-md" label="View My Work" to="/projects" />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-12"
          >
            <SocialLinks />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex justify-center items-center mt-4"
          >
            <ResumeButton className="bg-accent rounded-md border" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
