import { SocialLinks } from "./ContactCard";
import MotionButton from "./MotionButton";
import Typewriter from "./Typewriter";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="p-4 flex flex-col gap-2 m-4 h-fit">
        <div className="w-full h-fit p-4 flex items-start justify-between relative">
          <div className="">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-3xl md:text-4xl font-semibold mb-4"
            >
              Muhammed Sanjid
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mb-8"
            >
              <Typewriter text="Software Engineer" speed={100} />
            </motion.div>
          </div>
          <div>
            <div className="p-4 h-20 w-20 bg-black border-4 border-red-600 top-0 right-0 absolute"></div>
          </div>
        </div>
        <div className="mt-4 p-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            A passionate software developer crafting beautiful and functional
            web experiences. I specialize in building modern applications with a
            focus on user experience and clean code.
          </motion.p>{" "}
          <div className="flex gap-4 items-center justify-center">
            <MotionButton bg="primary" label="Get in Touch" to="#contact" />
            <MotionButton bg="secondary" label="View My Work" to="#projects" />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
