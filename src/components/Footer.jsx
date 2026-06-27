import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/M-R-Subash", label: "GitHub", color: "hover:text-gray-300 hover:shadow-gray-400/20" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/m-r-subash-b676a0291", label: "LinkedIn", color: "hover:text-blue-400 hover:shadow-blue-400/20" },
  ];

  return (
    <>
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ y: -3 }}
            onClick={scrollToTop}
            className="cyber-btn fixed bottom-24 right-8 z-50 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white p-3 rounded-none shadow-2xl"
            aria-label="Scroll to top"
          >
            <span className="btn-corner btn-corner-tl"></span>
            <span className="btn-corner btn-corner-tr"></span>
            <span className="btn-corner btn-corner-bl"></span>
            <span className="btn-corner btn-corner-br"></span>
            <FaArrowUp className="text-sm" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Footer */}
      <footer id='footer' className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white pt-10 pb-8 relative overflow-hidden transition-all duration-300">
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Animated Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Social Links */}
            <div className="text-center mb-10">
              <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 mb-4 block">// TERMINATION_LOGS</span>
              <motion.h2 
                initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 text-zinc-900 dark:text-white tracking-tighter uppercase"
              >
                Follow My Journey
              </motion.h2>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.12 }
                  }
                }}
                className="flex justify-center space-x-6 sm:space-x-8"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={{
                      hidden: { opacity: 0, y: 15, scale: 0.8 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    whileHover={{ y: -4 }}
                    className="cyber-btn text-lg sm:text-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-900 p-3 sm:p-4 rounded-none text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    aria-label={social.label}
                  >
                    <span className="btn-corner btn-corner-tl"></span>
                    <span className="btn-corner btn-corner-tr"></span>
                    <span className="btn-corner btn-corner-bl"></span>
                    <span className="btn-corner btn-corner-br"></span>
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Accent Separator Line */}
            <div className="h-[1px] bg-zinc-200 dark:bg-zinc-900 mb-8" />

            {/* Copyright */}
            <div className="text-center">
              <p className="text-zinc-550 dark:text-zinc-400 text-xs sm:text-sm font-mono tracking-wider">
                &copy; {new Date().getFullYear()} Subash M R. All rights reserved.
              </p>
              <p className="text-zinc-650 text-zinc-650 text-[10px] mt-2 font-mono">
                System: React / Tailwind CSS / Framer Motion / Lenis Scroll
              </p>
            </div>
          </motion.div>
        </div>

      </footer>
    </>
  );
};

export default Footer;