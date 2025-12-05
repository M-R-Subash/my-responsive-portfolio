import ECommerceThumbnail from '../assets/E-Commerce.png';
import NikeThumbnail from '../assets/NikeThumbnail.png';
import Service from '../assets/ServiceLandingPage.png';
import Whetherly from '../assets/Whetherly.png';
import Whiteboard from '../assets/Whiteboard.png';
import { FaGraduationCap, FaBookOpen, FaSchool } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFirebase, SiBootstrap } from "react-icons/si";
import { TbBulb, TbUsers, TbBrain, TbEyeCheck, TbHeartHandshake } from "react-icons/tb";

export const PROJECTS = [
    {
      name: "E-COMMERCE WEBSITE",
      link: "https://m-r-subash.github.io/E-Commerce-Website/",
      image: ECommerceThumbnail,
      description: "A feature-rich e-commerce platform with product catalog, shopping cart, user authentication, and payment integration for seamless online shopping experience.",
      tools: "HTML, CSS, JavaScript",
    },
    {
      name: "NIKE LANDING PAGE",
      link: "https://m-r-subash.github.io/nike-tailwind-react/",
      image: NikeThumbnail,
      description: "Modern Nike product showcase with interactive sliders, responsive design, and smooth animations to highlight athletic footwear and sportswear collections.",
      tools: "React, Tailwind CSS",
    },
    {
      name: "WHETHER APP",
      link: "https://m-r-subash.github.io/whether-app/",
      image: Whetherly,
      description: "Real-time weather forecasting application with location detection, multiple city support, and detailed meteorological data visualization interface.",
      tools: "React, Weather API, Tailwind CSS",
    },
    {
      name: "SERVICE PAGE",
      link: "https://m-r-subash.github.io/framer-motion-landing-page/",
      image: Service,
      description: "Professional service provider landing page with service catalog, booking system, client testimonials, and contact integration for business growth.",
      tools: "React, Tailwind CSS, Framer Motion",
    },
    {
      name: "TASK MANAGER",
      link: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500",
      description: "Productivity application for task organization with drag-drop functionality, deadline tracking, and team collaboration features for project management.",
      tools: "React, Tailwind CSS, Local Storage",
    },
    {
      name: "WHITEBOARD",
      link: "http://m-r-subash.github.io/Whitespace-Web/",
      image: Whiteboard,
      description: "Personal portfolio website showcasing projects, skills, and professional experience with modern design and responsive layout for all devices.",
      tools: "React, Tailwind CSS",
    },
  ];

export const educationData = [
    {
      id: 1,
      icon: <FaGraduationCap className="text-xl sm:text-3xl" />,
      institution: "Karpagam Academy of Higher Education",
      degree: "MSc Computer Science",
      year: "2023 - 2025",
      grade: "72%",
      projects: [
        "Electronic Invoice System - Final Year Project",
        "AI-Based Credit Card Fraud Detection (Research Journal)"
      ],
      color: "from-blue-600 to-blue-700"
    },
    {
      id: 2,
      icon: <FaBookOpen className="text-xl sm:text-3xl" />,
      institution: "PTA Government Arts and Science College",
      degree: "BSc Computer Science",
      year: "2020 - 2023",
      grade: "71%",
      projects: [
        "Home Services Booking Website - Final Year Project",
        "Thyroid Detection Using Machine Learning - Group Project"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      icon: <FaSchool className="text-xl sm:text-3xl" />,
      institution: "Veveaham Boys Hr Sec School",
      degree: "Higher Secondary (12th)",
      year: "2019 - 2020",
      grade: "65%",
      subjects: ["Computer Science", "Mathematics", "Physics", "Chemistry"],
      description: "Computer Science with Mathematics Stream",
      color: "from-blue-400 to-blue-500"
    },
    {
      id: 4,
      icon: <FaSchool className="text-xl sm:text-3xl" />,
      institution: "NCP Municipal Boys Hr Sec School",
      degree: "Secondary School (10th)",
      year: "2017 - 2018",
      grade: "76%",
      description: "State Board with focus on Mathematics and Science",
      color: "from-blue-300 to-blue-400"
    }
  ];

export const technicalSkills = [
    { 
      name: "HTML5", 
      icon: <FaHtml5 className="text-5xl text-orange-500" />, 
      level: 90,
      color: "from-orange-500 to-orange-600",
      bg: "bg-orange-100",
      text: "text-orange-600"
    },
    { 
      name: "CSS3", 
      icon: <FaCss3Alt className="text-5xl text-blue-500" />, 
      level: 85,
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-100",
      text: "text-blue-600"
    },
    { 
      name: "JavaScript", 
      icon: <SiJavascript className="text-5xl text-yellow-500" />, 
      level: 60,
      color: "from-yellow-500 to-yellow-600",
      bg: "bg-yellow-100",
      text: "text-yellow-600"
    },
    { 
      name: "React", 
      icon: <FaReact className="text-5xl text-cyan-500" />, 
      level: 35,
      color: "from-cyan-500 to-cyan-600",
      bg: "bg-cyan-100",
      text: "text-cyan-600"
    },
    { 
      name: "Tailwind", 
      icon: <SiTailwindcss className="text-5xl text-blue-400" />, 
      level: 85,
      color: "from-blue-400 to-blue-500",
      bg: "bg-blue-50",
      text: "text-blue-500"
    },
    { 
      name: "Bootstrap", 
      icon: <SiBootstrap className="text-5xl text-purple-500" />, 
      level: 80,
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-100",
      text: "text-purple-600"
    },
    { 
      name: "GitHub", 
      icon: <FaGithub className="text-5xl text-gray-800" />, 
      level: 85,
      color: "from-gray-800 to-gray-900",
      bg: "bg-gray-100",
      text: "text-gray-800"
    },
    { 
      name: "Firebase", 
      icon: <SiFirebase className="text-5xl text-yellow-500" />, 
      level: 70,
      color: "from-yellow-400 to-yellow-500",
      bg: "bg-yellow-50",
      text: "text-yellow-600"
    }
  ];

export const softSkills = [
    { 
      name: "Problem Solving", 
      icon: <TbBulb className="text-3xl" />,
      description: "Analytical thinking and creative solutions"
    },
    { 
      name: "Active Listening", 
      icon: <TbEyeCheck className="text-3xl" />,
      description: "Fully attentive to understand requirements"
    },
    { 
      name: "Teamwork", 
      icon: <TbUsers className="text-3xl" />,
      description: "Collaborative approach to achieve goals"
    },
    { 
      name: "Proactive Learning", 
      icon: <TbBrain className="text-3xl" />,
      description: "Continuously updating skills and knowledge"
    },
    { 
      name: "Communication", 
      icon: <TbHeartHandshake className="text-3xl" />,
      description: "Clear and effective information sharing"
    }
  ];