import { SocialLinks } from "./ContactCard";
import { navItems } from "./Navbar";

const Footer = () => {
  return (
    <div className="border-t mt-10 p-4 max-w-5xl mx-auto flex flex-col items-center gap-3">
      <h1 className="font-semibold text-xl pb-4">Muhammed Sanjid</h1>
      <ul className="flex gap-3 text-sm pb-3">
        {navItems.map((i) => (
          <li
            key={i.label}
            className="hover:bg-black/10 dark:hover:bg-white/10 px-3 py-1 rounded-md cursor-pointer"
          >
            <a href={i.path}>{i.label}</a>
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted-foreground py-4">
        &copy; Personal Portfolio.All rights reserved
      </p>
      <div className="mt-2">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
