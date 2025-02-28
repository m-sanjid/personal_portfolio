import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCard = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold">Contact Information</h3>
      <p className="text-muted-foreground">
        Feel free to reach out through any of the following channels. I'm always
        open to discussing new projects, creative ideas, or opportunities to be
        part of your vision.
      </p>
      <div>
        {contactItems.map((i) => (
          <Link to={i.link ?? ""} key={i.name}>
            <div className="p-5 bg-black/10 dark:bg-white/10 hover:dark:bg-white/20 hover:bg-black/40 backdrop-blur-sm rounded-md flex gap-4 my-6">
              <div>{i.icon}</div>
              {i.value}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex gap-2 justify-center">
        {socialLink.map((i) => (
          <Link to={i.link} key={i.name}>
            <div className="p-2 bg-black/10 dark:bg-white/10 hover:dark:bg-white/20 hover:bg-black/40 backdrop-blur-sm rounded-md">
              {i.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;

const phone = import.meta.env.VITE_MOB_NO;

const contactItems = [
  {
    name: "email",
    link: "mailto:sanjid357@gmail.com",
    icon: <Mail />,
    value: "sanjid357@gmail.com",
  },
  {
    name: "whatsapp",
    link: `https://api.whatsapp.com/send?phone=91${phone}&text=Hi%20how%20are%20you?`,
    icon: <IconBrandWhatsapp />,
    value: `Chat on Whatsapp`,
  },
  { name: "phone", icon: <Phone />, value: `+91 ${phone ?? ""}` },
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
