import { useState, useEffect } from "react";
import { FaWhatsapp, FaDownload } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["about", "education", "skills", "projects", "contact"];
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
    { id: "education", label: "EDUCATION" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md
          transition-all duration-300 border-b border-gray-300
          ${scrolled ? "py-3 shadow-lg" : "py-4 shadow-sm"}
        `}
      >
        <div className="container mx-auto px-5 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => handleScroll("about")}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#006eff] bg-opacity-90 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-xl tracking-tighter">MR</span>
                </div>
              </div>
              <div className="ml-3">
                <h1 className="font-bold text-lg text-gray-800">SUBASH M R</h1>
                <p className="text-gray-600 text-xs">Frontend Developer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`
                    relative px-4 py-2 mx-1 font-medium text-gray-700 
                    transition-all duration-300
                    hover:text-[#006eff]
                    ${activeSection === item.id ? "text-[#006eff]" : ""}
                  `}
                >
                  {item.label}
                  <span className={`
                    absolute bottom-0 left-0 right-0 h-0.5 bg-[#006eff] 
                    transition-all duration-300 transform
                    ${activeSection === item.id ? "scale-x-100" : "scale-x-0"}
                  `}></span>
                </button>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="https://api.whatsapp.com/send?phone=7708540879&text=Hi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg hover:bg-[#128C7E] transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
                <span>Connect</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#006eff] transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`
            lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm
            border-t border-gray-200 shadow-lg
            transform transition-all duration-300 ease-out
            ${isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none"
            }
          `}
        >
          <div className="container mx-auto px-5 py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`
                    w-full text-left px-4 py-3 rounded-lg font-medium
                    transition-all duration-300
                    ${activeSection === item.id
                      ? "bg-[#006eff] bg-opacity-10 text-[#006eff]"
                      : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile WhatsApp Button */}
              <a
                href="https://api.whatsapp.com/send?phone=7708540879&text=Hi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium mt-2 shadow-md"
              >
                <FaWhatsapp className="text-lg" />
                <span>WhatsApp Connect</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Floating WhatsApp Button for Mobile */}
      <a
        href="https://api.whatsapp.com/send?phone=7708540879&text=Hi"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden fixed bottom-6 right-8 z-40 w-11 h-11 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl  hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-bounce-slow"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Spacer for fixed navbar */}
      <div className="h-20 lg:h-24"></div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce {
          animation: bounce 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;