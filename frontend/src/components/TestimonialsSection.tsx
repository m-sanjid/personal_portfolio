import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Muhammed is an exceptional developer who delivered our project ahead of schedule. His attention to detail and problem-solving skills are impressive. We'll definitely work with him again.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 2,
      name: "David Chen",
      role: "CTO",
      company: "StartupX",
      content: "Working with Muhammed was a great experience. He understood our requirements perfectly and implemented solutions that exceeded our expectations. His technical knowledge is outstanding.",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "CreativeStudio",
      content: "Muhammed has a rare combination of technical expertise and design sensibility. He transformed our concepts into a beautiful, functional application that our users love.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's what clients and colleagues have to say about working with me.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="overflow-hidden">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-lg p-8 md:p-10"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Quote size={40} className="absolute -top-4 -left-4 text-primary opacity-20" />
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                    />
                  </div>
                </div>

                <blockquote className="text-center mb-6">
                  <p className="text-lg italic mb-4">"{testimonials[activeIndex].content}"</p>
                  <footer>
                    <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                    <div className="text-muted-foreground">
                      {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                    </div>
                  </footer>
                </blockquote>

                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeIndex ? "bg-primary" : "bg-black/20 dark:bg-white/20"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 