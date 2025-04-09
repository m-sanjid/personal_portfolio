import { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "motion/react";
import { User, Quote } from "lucide-react";
import { testimonials } from "@/lib/Constants";


const TestimonialsSection = () => {
  
  // Double the testimonials array to create seamless infinite scroll effect
  const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  
  // Animation speed based on hover state
  const animationDuration = isHovering ? 30 : 15; 

  useEffect(() => {
    controls.start({
      x: ["0%", "-33.333%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: animationDuration,
          ease: "linear",
        }
      }
    });
  }, [controls, isHovering, animationDuration]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl font-bold mb-3">What Clients Say</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explore feedback from satisfied clients who have trusted me with their projects
          </p>
        </div>

        {/* Flowing Testimonials Container */}
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-xl">
          {/* vignette */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-secondary via-secondary/20 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 left-0 bottom-0 h-24 z-10 bg-gradient-to-t from-secondary via-secondary/20 to-transparent pointer-events-none"></div>
          <div className="absolute left-0 top-0 right-0 h-24 z-10 bg-gradient-to-b from-secondary via-secondary/20 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-secondary via-secondary/20 to-transparent pointer-events-none"></div>
          
          {/* Testimonials Container */}
          <div 
            ref={containerRef}
            className="py-6 overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div 
              className="flex"
              animate={controls}
            >
              {repeatedTestimonials.map((testimonial, index) => (
                <motion.div 
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-80 px-4"
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 } 
                  }}
                >
                  <motion.div 
                    className="bg-primary/10 h-[18rem] flex flex-col justify-between backdrop-blur-md rounded-xl p-6 shadow-lg relative overflow-hidden border border-slate-200 dark:border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Background Effects */}
                    <div className="absolute inset-0 blur-xs">
                    <div className="absolute top-30 left-0 w-[40rem] h-2 bg-gradient-to-t z-10 from-transparent via-primary/70 to-transparent" />
                    <div className="absolute -top-6 -left-8 bg-secondary rounded-full w-32 h-32"/>
                    <div className="absolute -top-6 -left-8 bg-secondary rounded-full w-32 h-32"/>
                    <div className="absolute -bottom-12 -left-2 bg-secondary rounded-full w-32 h-32"/>
                    <div className="absolute -bottom-6 -right-8 bg-secondary rounded-full w-32 h-32"/>
                    </div>
                    {/* Quote icon */}
                    <div className="absolute -top-2 -right-2 text-primary">
                      <Quote size={60} />
                    </div>

                       {/* Testimonial content */}
                       <p className="text-primary/80 text-sm relative z-10 mt-6">
                      &quot;{testimonial.content}&quot;
                      </p>

                    {/* Avatar and info */}
                    <div className="relative">

                    <div className="flex items-center mt-4 relative z-10">
                      <div className="mr-3">
                        {/* {testimonial.image ? (
                          <div className="relative">
                          <div className="absolute inset-0 bg-primary/30 rounded-full blur-md"></div>
                          <img 
                          // src={testimonial.image} 
                          // alt={testimonial.name} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-slate-700 relative"
                          />
                          </div>
                          ) : ( */}
                          <div className="relative">
                            <div className="absolute inset-0 bg-primary/30 rounded-full blur-md"></div>
                            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center border-2 border-white dark:border-slate-700 relative">
                              <User size={20} className="text-primary" />
                            </div>
                          </div>
                        {/* )} */}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg leading-tight">{testimonial.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role} at <span className="font-medium">{testimonial.company}</span>
                        </p>
                 
                      </div>
                    </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;