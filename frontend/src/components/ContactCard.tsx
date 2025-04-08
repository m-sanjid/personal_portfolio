
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IconMail, IconPhone } from "@tabler/icons-react";
import SocialLinks from "./SocialLinks";



const ContactCard = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="p-6 backdrop-blur-sm">
      <motion.h3 
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Information
      </motion.h3>
      
      <motion.p 
        className="text-muted-foreground mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
       Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
      </motion.p>
      
      <div className="mb-10 space-y-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
            className="relative overflow-hidden"
          >
            <motion.a
              href={item.link} target="_blank" rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="group p-4 overflow-hidden bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 backdrop-blur-sm rounded-lg border border-neutral-200/20 dark:border-neutral-800/20 flex items-center gap-4"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="p-3 bg-primary/10 text-primary rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                {item.icon}
              </div>
              
              <div className="flex-grow">
                <h4 className="font-medium opacity-70 text-sm">{item.name}</h4>
                <div className="font-medium">{item.value}</div>
              </div>
              
            </motion.a>
            
            <AnimatePresence>
              {hoverIndex === index && item.hover && item.link && (
                <motion.div
                  initial={{ opacity: 0, x: 20, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: "auto" }}
                  exit={{ opacity: 0, x: 20, width: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute text-nowrap top-0 right-0 h-full flex items-center gap-2 px-4 bg-black text-white rounded-r-lg overflow-hidden"
                >
                  <span>{item.hover}</span>
                  {item.icon}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h4 className="font-medium mb-4 text-center">Connect with me</h4>
        <SocialLinks />
      </motion.div>
    </div>
  );
};

export default ContactCard;

const phone = import.meta.env.VITE_PHONE;

const contactItems = [
  {
    name: "email",
    link: "mailto:contact@sanjid.in",
    icon: <IconMail className="w-6 h-6" />,
    value: "contact@sanjid.in",
    hover: "Email me",
  },
  {
    name: "phone",
    link: `tel:${phone}`,
    icon: <IconPhone className="w-6 h-6" />,
    value: `+91 ${phone ?? ""}`,
    hover: "Call me",
  },
];


