import { useState, useEffect, useRef } from 'react';
import profile from '../assets/profile.jpg';
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { motion, useScroll, useTransform } from 'framer-motion';

const Info = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  
  const titles = ['Web Developer', 'Full Stack Intern', 'CMS Developer', 'Frontend Developer'];
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yProfile = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % titles.length;
      const currentText = titles[currentIndex];
      
      if (isDeleting) {
        setText(currentText.substring(0, text.length - 1));
        setTypingSpeed(50); 
      } else {
        setText(currentText.substring(0, text.length + 1));
        setTypingSpeed(150); 
      }

      if (!isDeleting && text === currentText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); 
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, titles, typingSpeed]);

 const downloadResume = () => {
  try {
    const isGitHubPages = window.location.href.includes('github.io'); 
    let resumeUrl;    
    if (isGitHubPages) {
      resumeUrl = "/my-responsive-portfolio/Fresher%20-%20Frontend%20Developer%20-%20Subash%20M%20R.pdf";
    } else {
      resumeUrl = "/Fresher%20-%20Frontend%20Developer%20-%20Subash%20M%20R.pdf";
    }
    
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Fresher - Frontend Developer - Subash M R.pdf";
    link.target = "_blank"; 
    
    document.body.appendChild(link);
    link.click();
    
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
    
    // Success message
    setMessageType('success');
    setShowDownloadMessage(true);
    setTimeout(() => setShowDownloadMessage(false), 3000);
    
  } catch (error) {
    console.error('Error:', error);
    setMessageType('error');
    setShowDownloadMessage(true);
    setTimeout(() => setShowDownloadMessage(false), 3000);
  }
};

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/M-R-Subash", color: "hover:text-gray-700" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/hatred_world", color: "hover:text-pink-500" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/share/19Ba2YiC3G/", color: "hover:text-blue-600" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/m-r-subash-b676a0291", color: "hover:text-blue-700" },
  ];

  return (
    <>
      <section ref={containerRef} id='about' className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-all duration-300 min-h-[calc(100vh-70px)] lg:min-h-[calc(100vh-80px)] flex items-center py-12 sm:py-16">
        
        <div className="max-w-[1280px] mx-auto px-5 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -60, filter: "blur(12px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              style={{ y: yText, opacity: opacityFade }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <div className="mb-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 mb-4 block">// INITIALIZING_SESSION_1.0</span>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-zinc-900 dark:text-white tracking-tighter mb-4">
                  Hello, I'm <span className="text-zinc-500 dark:text-zinc-400">Subash</span>
                </h1>
                
                <div className="text-lg sm:text-xl lg:text-2xl font-mono text-zinc-600 dark:text-zinc-450 dark:text-zinc-400 mb-4 h-10 tracking-wider">
                  A <span className="text-zinc-900 dark:text-white font-bold">{text}</span>
                  <span className="ml-1 animate-pulse">|</span>
                </div>
                
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                  I am a Full Stack Intern at YS Innovation Startup in Coimbatore, specializing in building responsive and user-friendly websites using React, TypeScript, WordPress, WooCommerce, Shopify, and modern web frameworks. I focus on clean code, smart design, and continuous learning to deliver high-quality solutions.
                  <br /><br />
                  Outside coding, I enjoy anime, gaming, and reading manga, which inspire my creativity.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a 
                  href='mailto:mrsubash1615@gmail.com' 
                  rel='noopener noreferrer' 
                  target='_blank'
                  className="inline-flex items-center justify-center gap-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 px-6 py-3 rounded-none font-mono text-xs tracking-widest uppercase hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-950 transition-all duration-300"
                >
                  <BsSuitcaseLgFill className="text-sm" />
                  Hire Me
                </a>
                
                <button
                  onClick={downloadResume}
                  className="inline-flex items-center justify-center gap-2 border border-zinc-250 dark:border-zinc-800 bg-transparent text-zinc-500 dark:text-zinc-400 px-6 py-3 rounded-none font-mono text-xs tracking-widest uppercase hover:bg-zinc-100 dark:hover:bg-zinc-905 dark:hover:bg-zinc-900 dark:hover:text-zinc-200 transition-all duration-300"
                >
                  <FaDownload className="text-sm" />
                  Download Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-5">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xl text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all duration-300`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right - Profile Image (HUD Rectangular Layout) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 50, damping: 12, delay: 0.3 }}
              style={{ y: yProfile, opacity: opacityFade }}
              className="lg:w-1/2 flex justify-center relative"
            >
              <div 
                className="relative border border-zinc-300 dark:border-zinc-800/80 p-2.5 bg-white dark:bg-zinc-950 rounded-none shadow-2xl transition-all duration-300"
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
              >
                {/* Corner Markers */}
                <span className="absolute -top-[1px] -left-[1px] text-zinc-400 dark:text-zinc-600 font-bold select-none text-[12px] pointer-events-none transition-all duration-300">+</span>
                <span className="absolute -top-[1px] -right-[1px] text-zinc-400 dark:text-zinc-600 font-bold select-none text-[12px] pointer-events-none transition-all duration-300">+</span>
                <span className="absolute -bottom-[1px] -left-[1px] text-zinc-400 dark:text-zinc-600 font-bold select-none text-[12px] pointer-events-none transition-all duration-300">+</span>
                <span className="absolute -bottom-[1px] -right-[1px] text-zinc-400 dark:text-zinc-600 font-bold select-none text-[12px] pointer-events-none transition-all duration-300">+</span>

                <div className="relative overflow-hidden w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border border-zinc-200 dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-900 transition-all duration-300">
                  <img 
                    src={profile} 
                    alt="Subash M R" 
                    className={`
                      w-full h-full object-cover transition-all duration-700 ease-out
                      ${isImageHovered ? 'scale-105 grayscale-0' : 'grayscale'}
                    `}
                  />
                  
                  {/* Subtle dark overlay */}
                  <div className={`
                    absolute inset-0 bg-zinc-950/10 transition-opacity duration-500
                    ${isImageHovered ? 'opacity-0' : 'opacity-100'}
                  `}></div>
                </div>

                {/* Floating Action Button (Download Icon in mono) */}
                <button
                  onClick={downloadResume}
                  className={`
                    absolute bottom-4 right-4 z-20
                    w-10 h-10 rounded-none border border-zinc-350 dark:border-zinc-700
                    bg-white/90 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-300 
                    flex items-center justify-center
                    shadow-xl hover:shadow-2xl hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-950
                    transition-all duration-300
                  `}
                  title="Download Resume"
                >
                  <FaDownload className="text-sm" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Download Success/Error Message (HUD Style Toast) */}
        <div className={`
          fixed bottom-24 left-6 z-50
          transition-all duration-500 ease-out
          ${showDownloadMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <div className={`
            px-4 py-3 rounded-none shadow-2xl font-mono text-[10px] tracking-wider border
            bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800
            ${messageType === 'success' 
              ? 'text-emerald-600 dark:text-emerald-400' 
              : 'text-rose-600 dark:text-rose-500'
            }
          `}>
            {messageType === 'success' 
              ? '>> RESUME_DOWNLOAD_SUCCESSFUL [100%]' 
              : '>> RESUME_DOWNLOAD_FAILED [ERROR]'
            }
          </div>
        </div>
      </section>

      {/* Sleek Horizontal HUD divider */}
      <div className="relative w-full h-[1px] bg-zinc-200 dark:bg-zinc-900/80 transition-all duration-300">
        <span className="absolute left-6 -translate-y-1/2 font-mono text-[10px] text-zinc-400 dark:text-zinc-700 select-none pointer-events-none transition-all duration-300">+</span>
        <span className="absolute right-6 -translate-y-1/2 font-mono text-[10px] text-zinc-400 dark:text-zinc-700 select-none pointer-events-none transition-all duration-300">+</span>
      </div>
    </>
  );
};

export default Info;