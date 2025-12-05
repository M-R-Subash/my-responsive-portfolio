import { useState, useEffect } from 'react';
import profile from '../assets/profile.jpg';
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa";
import { BsSuitcaseLgFill } from "react-icons/bs";

const Info = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  
  const titles = ['Web Developer', 'Frontend Developer'];

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
      <section id='about' className="pt-14 sm:pt-10 lg:pt-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>
        
        <div className="container mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
            
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                  Hello, I'm <span className="text-[#006eff]">Subash</span>
                </h1>
                
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 mb-2 h-10">
                  A <span className="text-[#006eff]">{text}</span>
                  <span className="ml-1 animate-pulse text-[#006eff]">|</span>
                </div>
                
                <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I build responsive and user-friendly websites using HTML, CSS, Tailwind CSS, and JavaScript, with beginner-level experience in React. I focus on clean code, smart design, and continuous learning to improve my skills.
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
                  className="inline-flex items-center justify-center gap-2 bg-[#006eff] text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl hover:bg-[#005ce6] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <BsSuitcaseLgFill className="text-lg" />
                  Hire Me
                </a>
                
                <button
                  onClick={downloadResume}
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#006eff] text-[#006eff] px-6 py-3 rounded-lg font-medium hover:bg-[#006eff] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaDownload className="text-lg" />
                  Download Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl text-gray-600 ${social.color} transition-all duration-300 transform hover:-translate-y-1 hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="lg:w-1/2 flex justify-center relative">
              <div 
                className="relative group"
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
              >
                <div className={`
                  relative rounded-full overflow-hidden
                  transition-all duration-500 ease-out
                  ${isImageHovered ? 'scale-105 shadow-2xl' : 'shadow-lg'}
                  ring-4 ring-white
                `}>
                  <img 
                    src={profile} 
                    alt="Subash M R" 
                    className={`
                      w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 
                      object-cover transition-all duration-500 ease-out
                      ${isImageHovered ? 'scale-105 grayscale-0' : 'grayscale-[30%]'}
                    `}
                  />
                  
                  {/* Gradient Overlay on Hover */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-tr from-[#006eff]/20 to-transparent
                    transition-opacity duration-500
                    ${isImageHovered ? 'opacity-100' : 'opacity-0'}
                  `}></div>
                </div>

                {/* Download Button on Image */}
                <button
                  onClick={downloadResume}
                  className={`
                    absolute -bottom-3 -right-3 z-20
                    w-14 h-14 rounded-full 
                    bg-[#006eff] text-white 
                    flex items-center justify-center
                    shadow-xl hover:shadow-2xl
                    transition-all duration-300
                    transform hover:scale-110
                    group-hover:animate-bounce-slow
                  `}
                  title="Download Resume"
                >
                  <FaDownload className="text-xl" />
                </button>

                {/* Hover Tooltip */}
                <div className={`
                  absolute -top-12 left-1/2 transform -translate-x-1/2
                  bg-gray-800 text-white text-sm px-3 py-2 rounded-lg
                  transition-all duration-300 opacity-0
                  ${isImageHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                  pointer-events-none whitespace-nowrap
                `}>
                  Click to download resume
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Success/Error Message */}
        <div className={`
          fixed top-20 left-1/2 transform -translate-x-1/2 z-50
          transition-all duration-500 ease-out
          ${showDownloadMessage ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
        `}>
          <div className={`
            px-6 py-4 rounded-lg shadow-xl font-medium
            ${messageType === 'success' 
              ? 'bg-green-100 border-l-4 border-green-500 text-green-700' 
              : 'bg-red-100 border-l-4 border-red-500 text-red-700'
            }
          `}>
            {messageType === 'success' 
              ? '✅ Resume downloaded successfully!' 
              : '❌ Error downloading resume. Please try again.'
            }
          </div>
        </div>
      </section>

      {/* Wave Divider */}
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="w-full">
            <path 
              fill="#006eff" 
              fillOpacity="0.9"
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            >
              <animate 
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                values="
                  M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,176C672,171,768,181,864,186.7C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                "
              />
            </path>
          </svg>
        </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.05); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Info;