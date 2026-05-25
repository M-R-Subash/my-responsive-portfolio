import { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";
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
    { icon: <FaInstagram />, href: "https://www.instagram.com/hatred_world", label: "Instagram", color: "hover:text-pink-300 hover:shadow-pink-400/20" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/share/19Ba2YiC3G/", label: "Facebook", color: "hover:text-blue-300 hover:shadow-blue-400/20" },
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
            whileHover={{ scale: 1.15, y: -4 }}
            onClick={scrollToTop}
            className="fixed bottom-20 right-8 z-50 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Footer */}
      <footer id='footer' className="bg-gradient-to-b from-blue-500 to-blue-900 opacity-[0.95] text-white pt-10 pb-8 relative overflow-hidden">
        
        {/* Floating background bubble elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5 animate-float"
              style={{
                width: `${Math.random() * 80 + 20}px`,
                height: `${Math.random() * 80 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div>

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
              <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-2xl sm:text-3xl font-extrabold mb-8 text-white tracking-wide uppercase"
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
                    whileHover={{ y: -6, scale: 1.08 }}
                    className={`
                      text-xl sm:text-3xl transition-all duration-300 
                      bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl
                      hover:bg-white/20 hover:shadow-xl ${social.color}
                    `}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Accent Separator Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

            {/* Copyright */}
            <div className="text-center">
              <p className="text-blue-100 text-sm sm:text-base font-medium">
                &copy; {new Date().getFullYear()} Subash M R. All rights reserved.
              </p>
              <p className="text-blue-200/80 text-xs sm:text-sm mt-2 font-light">
                Crafted with ❤️ using React, Tailwind CSS & Framer Motion
              </p>
            </div>
          </motion.div>
        </div>

        {/* Global style variables for floating circles */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          .animate-float {
            animation: float ease-in-out infinite;
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;