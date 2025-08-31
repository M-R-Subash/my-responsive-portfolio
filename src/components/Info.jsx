import profile from '../assets/profile.jpg'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsSuitcaseLgFill } from "react-icons/bs";
import React, { useEffect, useState } from 'react';

const Info = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
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

  return (
    <section id='about' className="pt-32 sm:pt-52 ">
        <div className='flex justify-between items-center max-sm:flex-col-reverse sm:px-10 lg:px-20 gap-10 max-sm:px-5'>
            <div className='text-center w-full sm:w-1/2'>
                <h1 className='text-4xl max-sm:text-2xl font-bold'>Hello, I'm Subash</h1>
                <p className='text-xl max-sm:text-base font-semibold mt-3'>
                  A <span className="text-blue-500">{text}</span><span className="animate-pulse">|</span>
                </p>
                <p className='mt-5 text-[14px] text-justify'>I build responsive and user-friendly websites using HTML, CSS, Tailwind CSS, and JavaScript, with beginner-level experience in React. I focus on clean code, smart design, and continuous learning to improve my skills.<br></br> Outside coding, I enjoy anime, gaming, and reading manga, which inspire my creativity.</p>
                <a className="inline-block mt-5 border-blue-500 border tracking-wider px-5 py-2 rounded-[25px] cursor-pointer text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300  shadow-xl hover:shadow-xl hover:shadow-blue-300" href='mailto:mrsubash1615@gmail.com' rel='noopener noreferrer' target='_blank'>Hire Me <BsSuitcaseLgFill className='inline-block ml-2 '/> </a>
                <div className='flex gap-4 justify-center mt-7 text-2xl trasition-all duration-300'>
                    <a href="https://github.com/M-R-Subash" className='hover:-translate-y-1 hover:text-slate-400 duration-150 ease-linear overflow-auto'><FaGithub/></a>
                    <a href="https://www.instagram.com/hatred_world" className='hover:-translate-y-1 hover:text-slate-400 duration-150 ease-linear overflow-auto'><FaInstagram/></a>
                    <a href="https://www.facebook.com/share/19Ba2YiC3G/" className='hover:-translate-y-1 hover:text-slate-400 duration-150 ease-linear overflow-auto'><FaFacebook/></a>
                    <a href="https://www.linkedin.com/in/m-r-subash-b676a0291" className='hover:-translate-y-1 hover:text-slate-400 duration-150 ease-linear overflow-auto'><FaLinkedin/></a>
                </div>
            </div>
            <div className=' w-full sm:w-1/2 flex justify-center '>
                <div className='shadow-2xl shadow-blue-300 p-2 rounded-full'>
                    <img src={profile} alt="myPhoto" className='rounded-full w-[250px] h-[250px] max-sm:w-[200px] max-sm:h-[200px] object-cover grayscale-[50%]' />
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#006eff" fillOpacity="1" d="M0,96L60,96C120,96,240,96,360,101.3C480,107,600,117,720,154.7C840,192,960,256,1080,261.3C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
    </section>
  )
}

export default Info