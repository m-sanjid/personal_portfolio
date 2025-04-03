import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export const SocialLinks = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="flex gap-2 justify-center">
      {socialLink.map((i, index) => (
        <Link to={i.link} key={i.name}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className="relative p-2 bg-black/10 dark:bg-white/10 hover:dark:bg-white/20 hover:bg-black/40 backdrop-blur-sm rounded-md">
            {i.icon}
            {hoverIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute text-nowrap -top-8 left-0 py-px px-2 text-xs bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-md">
                {i.name}
              </motion.div>
            )}
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

const ContactCard = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div>
      <h3 className="text-2xl font-bold">Contact Information</h3>
      <p className="text-muted-foreground">
        Feel free to reach out through any of the following channels. I'm always
        open to discussing new projects, creative ideas, or opportunities to be
        part of your vision.
      </p>
      <div className="mb-10">
        {contactItems.map((i, index) => (
          <Link to={i.link ?? ""} key={i.name}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="p-5 overflow-hidden bg-black/10 dark:bg-white/10 hover:dark:bg-white/20 hover:bg-black/40 backdrop-blur-sm rounded-md flex gap-4 my-6">
              <div>{i.icon}</div>
              {i.value}
              {hoverIndex === index && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                  className="absolute text-nowrap top-0 bottom-0 right-0 w-[10rem] flex gap-3 items-center justify-center bg-neutral-700 dark:bg-neutral-200 text-white dark:text-black rounded-md">
                  {i.icon}{i.hover}
                </motion.div>
              )}
            </motion.div>
          </Link>
        ))}
      </div>
      <SocialLinks />
    </div>
  );
};

export default ContactCard;

const phone = import.meta.env.VITE_PHONE;
console.log(phone, "phone");

const contactItems = [
  {
    name: "email",
    link: "mailto:contact@sanjid.in",
    icon: <Mail className="w-6 h-6" />,
    value: "contact@sanjid.in",
    hover: "Email me",
  },
  {
    name: "whatsapp",
    link: `https://api.whatsapp.com/send?phone=91${phone}&text=Hi%20how%20are%20you?`,
    icon: <IconBrandWhatsapp className="w-6 h-6" />,
    value: `Chat on Whatsapp`,
    hover: "Chat now",
  },
  { name: "phone", icon: <Phone className="w-6 h-6" />, value: `+91 ${phone ?? ""}`, hover: "Call me" },
];

const socialLink = [
  {
    name: "github",
    icon: <IconBrandGithub />,
    link: "https://github.com/m-sanjid",
  },
  {
    name: "x",
    icon: <IconBrandX />,
    link: "https://x.com/sanjid357",
  },
  {
    name: "linkedin",
    icon: <IconBrandLinkedin />,
    link: "https://www.linkedin.com/in/muhammedsanjid1/",
  },
];
