import { useState, useEffect } from "react";
import { FaEnvelope, FaDownload } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

const Navbar = ({ theme, setTheme }) => {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [connectHovered, setConnectHovered] = useState(false);
  const [modeHovered, setModeHovered] = useState(false);
  const [mobileModeHovered, setMobileModeHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["about", "journey", "education", "skills", "projects"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "journey", label: "JOURNEY" },
    { id: "education", label: "EDUCATION" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <motion.header 
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        style={{ position: 'fixed' }}
        className={`
          fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-zinc-950/80 backdrop-blur-md
          transition-all duration-300 border-b border-zinc-200 dark:border-zinc-800/80
          ${scrolled ? "py-2.5 shadow-md dark:shadow-xl bg-white/90 dark:bg-zinc-950/90" : "py-4"}
        `}
      >
        <div className="max-w-[1280px] px-5 m-auto">
          <div className="flex items-center justify-between">
            
            {/* Logo - HUD Style */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => handleScroll("about")}
            >
              <div className="relative border border-zinc-200 dark:border-zinc-800 px-3 py-2 bg-zinc-100/40 dark:bg-zinc-900/40 rounded-none flex items-center justify-center transition-all duration-300">
                <span className="absolute -top-[1px] -left-[1px] text-zinc-400 dark:text-zinc-500 font-bold select-none text-[8px] pointer-events-none">+</span>
                <span className="absolute -top-[1px] -right-[1px] text-zinc-400 dark:text-zinc-500 font-bold select-none text-[8px] pointer-events-none">+</span>
                <span className="absolute -bottom-[1px] -left-[1px] text-zinc-400 dark:text-zinc-500 font-bold select-none text-[8px] pointer-events-none">+</span>
                <span className="absolute -bottom-[1px] -right-[1px] text-zinc-400 dark:text-zinc-500 font-bold select-none text-[8px] pointer-events-none">+</span>
                <span className="text-zinc-900 dark:text-white font-mono text-xs tracking-[0.2em]">SUBASH //</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`
                    relative px-4 py-4 mx-1 font-mono text-xs tracking-widest transition-all duration-300 rounded-none
                    ${activeSection === item.id ? "text-zinc-900 dark:text-white font-bold" : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"}
                  `}
                >
                  {item.label}
                  <span className={`
                    absolute bottom-3 left-4 right-4 h-[1px] bg-zinc-900 dark:bg-white transition-all duration-300 transform
                    ${activeSection === item.id ? "scale-x-100" : "scale-x-0"}
                  `}></span>
                </button>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                onMouseEnter={() => setModeHovered(true)}
                onMouseLeave={() => setModeHovered(false)}
                className="cyber-btn border border-zinc-300 dark:border-zinc-600 bg-transparent text-zinc-700 dark:text-zinc-300 px-4 py-2 font-mono text-xs rounded-none"
              >
                <span className="btn-corner btn-corner-tl"></span>
                <span className="btn-corner btn-corner-tr"></span>
                <span className="btn-corner btn-corner-bl"></span>
                <span className="btn-corner btn-corner-br"></span>
                <ScrambleText text={`MODE: ${theme.toUpperCase()}`} trigger={modeHovered} />
              </button>
              <a
                href="mailto:mrsubash1615@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setConnectHovered(true)}
                onMouseLeave={() => setConnectHovered(false)}
                className="cyber-btn flex items-center space-x-2 border border-zinc-300 dark:border-zinc-600 bg-transparent text-zinc-700 dark:text-zinc-200 px-5 py-2 font-mono text-xs rounded-none"
              >
                <span className="btn-corner btn-corner-tl"></span>
                <span className="btn-corner btn-corner-tr"></span>
                <span className="btn-corner btn-corner-bl"></span>
                <span className="btn-corner btn-corner-br"></span>
                <FaEnvelope className="text-sm text-zinc-500 dark:text-zinc-400" />
                <span>
                  <ScrambleText text="CONNECT" trigger={connectHovered} />
                </span>
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                onMouseEnter={() => setMobileModeHovered(true)}
                onMouseLeave={() => setMobileModeHovered(false)}
                className="cyber-btn border border-zinc-200 dark:border-zinc-700 bg-transparent text-zinc-700 dark:text-zinc-350 px-3 py-1.5 font-mono text-[9px] rounded-none"
              >
                <span className="btn-corner btn-corner-tl"></span>
                <span className="btn-corner btn-corner-tr"></span>
                <span className="btn-corner btn-corner-bl"></span>
                <span className="btn-corner btn-corner-br"></span>
                <ScrambleText text={theme.toUpperCase()} trigger={mobileModeHovered} />
              </button>
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <HiX className="text-2xl" />
                ) : (
                  <HiMenu className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`
            lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md
            border-t border-zinc-200 dark:border-zinc-900 shadow-2xl
            transform transition-all duration-300 ease-out
            ${isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none"
            }
          `}
        >
          <div className="max-w-[1280px] mx-auto px-5 py-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`
                    w-full text-left px-4 py-3 font-mono text-xs tracking-widest rounded-none
                    transition-all duration-300
                    ${activeSection === item.id
                      ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold border-l border-zinc-900 dark:border-white"
                      : "text-zinc-650 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Spacer for fixed navbar */}
      <div className="h-20 lg:h-24"></div>
    </>
  );
};

export default Navbar;