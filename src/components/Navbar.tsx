import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [hoverPosition, setHoverPositon] = useState({ left: 0, width: 0 });
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleHover = (e: any) => {
    const { offsetLeft, offsetWidth } = e.target;
    setHoverPositon({ left: offsetLeft, width: offsetWidth });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative flex justify-center">
      <nav
        className={`fixed top-4 w-full z-50 ${isScrolled ? "rounded-lg bg-white/80 dark:bg-black/80 backdrop-blur-xl mx-10 max-w-4xl duration-300 ease-in-out px-10" : "max-w-7xl"}`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-semibold">
              MS
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onMouseEnter={handleHover}
                  className={`transition-colors z-20 hover:text-primary relative py-1 px-2 rounded-lg ${location.pathname === item.path
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              {/* Hover Effect */}
              {isHovered && (
                <motion.div
                  className="absolute p-4 z-10 bg-black/10 dark:bg-white/20 rounded-lg"
                  initial={false}
                  animate={{
                    left: hoverPosition.left,
                    width: hoverPosition.width,
                    opacity: 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent transition-colors mr-2"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full animate-fade-in">
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block py-2 transition-colors ${location.pathname === item.path
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

export const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];
