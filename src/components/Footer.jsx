import { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";

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
    { icon: <FaGithub />, href: "https://github.com/M-R-Subash", label: "GitHub", color: "hover:text-gray-300" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/hatred_world", label: "Instagram", color: "hover:text-pink-300" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/share/19Ba2YiC3G/", label: "Facebook", color: "hover:text-blue-300" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/m-r-subash-b676a0291", label: "LinkedIn", color: "hover:text-blue-400" },
  ];

  return (
    <>
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-8 z-50 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-bounce-slow"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}


      {/* Main Footer */}
      <footer id='footer' className="bg-gradient-to-b from-[#006eff] to-blue-900 opacity-[0.9] text-white pt-2 pb-8 relative overflow-hidden">
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            </div>

            {/* Social Links */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Follow My Journey
              </h2>
              <div className="flex justify-center space-x-6 sm:space-x-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      text-xl sm:text-4xl transform transition-all duration-300 
                      hover:-translate-y-2 hover:scale-110 ${social.color}
                      bg-white/10 backdrop-blur-sm p-4 rounded-2xl
                      hover:bg-white/20 hover:shadow-2xl
                    `}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"></div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-blue-100 text-sm sm:text-base">
                &copy; {new Date().getFullYear()} Subash M R. All rights reserved.
              </p>
              <p className="text-blue-200 text-xs sm:text-sm mt-2">
                Crafted with ❤️ using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>

        {/* Floating elements animation */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float ease-in-out infinite;
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;