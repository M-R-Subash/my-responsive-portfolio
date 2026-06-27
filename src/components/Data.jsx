import YSLeadGenThumbnail from '../assets/YSLeadGen.webp';
import YSDeskThumbnail from '../assets/YSDesk.webp';
import ChendurDigitalsThumbnail from '../assets/ChendurDigitals.webp';
import YSAcademyThumbnail from '../assets/YSAcademy.webp';
import VinmagalThumbnail from '../assets/Vinmagal.webp';
import { FaGraduationCap, FaBookOpen, FaSchool, FaBriefcase, FaWordpress } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFirebase, SiBootstrap, SiTypescript, SiElementor, SiWoocommerce, SiShopify } from "react-icons/si";
import { TbBulb, TbUsers, TbBrain, TbEyeCheck, TbHeartHandshake } from "react-icons/tb";

export const PROJECTS = [
    {
      name: "YS LEADGEN",
      link: "https://ysleadgen.com/",
      image: YSLeadGenThumbnail,
      description: "Successfully developed and built all pages utilizing Elementor. Engineered custom single post pages and integrated the Gutenberg block editor with pre-defined design patterns to optimize the blogging workflow, incorporating custom shortcodes where necessary, while executing performance optimizations and bug fixes.",
      tools: "WordPress, Elementor, Gutenberg, Shortcodes",
    },
    {
      name: "YS DESK",
      link: "https://ysdesk.com/",
      image: YSDeskThumbnail,
      description: "Successfully developed and built all pages utilizing Elementor. Engineered custom single post pages and integrated the Gutenberg block editor with pre-defined design patterns to optimize the blogging workflow, incorporating custom shortcodes where necessary, while executing performance optimizations and bug fixes.",
      tools: "WordPress, Elementor, Gutenberg, Shortcodes",
    },
    {
      name: "CHENDUR DIGITALS",
      link: "https://chendurdigital.com/",
      image: ChendurDigitalsThumbnail,
      description: "A professional client WordPress website built and launched from scratch. Integrated Elementor for page construction, Lenis scroll library for buttery-smooth scrolling, configured Google API for secure SMTP email setup, and implemented custom shortcodes for modular functionality.",
      tools: "WordPress, Elementor, Lenis Scroll, Google SMTP API, Shortcodes",
    },
    {
      name: "YS ACADEMY",
      link: "https://courses.ysinnovations.com/",
      image: YSAcademyThumbnail,
      description: "Redeveloped and modernized an existing course website with a high-end visual design. Coded custom design solutions, created lightweight, highly optimized course pages featuring interactive brochure downloads, and deployed custom shortcodes for dynamic content displays.",
      tools: "WordPress, CSS3, Custom PHP, Shortcodes, Optimization",
    },
    {
      name: "VINMAGAL",
      link: "https://vinmagal.com/",
      image: VinmagalThumbnail,
      description: "A collaborative Shopify e-commerce project. Managed the full product catalog upload, structured header/footer styling layouts, optimized homepage graphics, and implemented customized template designs.",
      tools: "Shopify, Liquid, E-Commerce, UI Customization",
    },
  ];

export const experienceData = [
    {
      id: 0,
      icon: <FaBriefcase className="text-xl sm:text-3xl" />,
      institution: "YS Innovation, Coimbatore",
      degree: "Full Stack Intern",
      year: "2026 Jan - Present",
      grade: "Active",
      projects: [
        "Developing responsive, modern full-stack web applications",
        "Building e-commerce and CMS portals with WordPress, WooCommerce, & Shopify",
        "Structuring type-safe scalable logic with TypeScript & React",
        "Designing high-converting landing pages using Elementor builder"
      ],
      color: "from-blue-600 to-blue-800"
    }
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
      color: "from-blue-500 to-blue-600"
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
      color: "from-blue-400 to-blue-500"
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
      color: "from-blue-300 to-blue-400"
    },
    {
      id: 4,
      icon: <FaSchool className="text-xl sm:text-3xl" />,
      institution: "NCP Municipal Boys Hr Sec School",
      degree: "Secondary School (10th)",
      year: "2017 - 2018",
      grade: "76%",
      description: "State Board with focus on Mathematics and Science",
      color: "from-blue-200 to-blue-300"
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
      level: 80,
      color: "from-yellow-500 to-yellow-600",
      bg: "bg-yellow-100",
      text: "text-yellow-600"
    },
    { 
      name: "TypeScript", 
      icon: <SiTypescript className="text-5xl text-blue-600" />, 
      level: 70,
      color: "from-blue-600 to-blue-700",
      bg: "bg-blue-50",
      text: "text-blue-600"
    },
    { 
      name: "React", 
      icon: <FaReact className="text-5xl text-cyan-500" />, 
      level: 65,
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
      name: "WordPress", 
      icon: <FaWordpress className="text-5xl text-blue-700" />, 
      level: 80,
      color: "from-blue-700 to-blue-800",
      bg: "bg-blue-100",
      text: "text-blue-700"
    },
    { 
      name: "Elementor", 
      icon: <SiElementor className="text-5xl text-red-500" />, 
      level: 85,
      color: "from-red-500 to-red-600",
      bg: "bg-red-50",
      text: "text-red-600"
    },
    { 
      name: "WooCommerce", 
      icon: <SiWoocommerce className="text-5xl text-purple-600" />, 
      level: 75,
      color: "from-purple-600 to-purple-700",
      bg: "bg-purple-50",
      text: "text-purple-600"
    },
    { 
      name: "Shopify", 
      icon: <SiShopify className="text-5xl text-green-600" />, 
      level: 70,
      color: "from-green-600 to-green-700",
      bg: "bg-green-50",
      text: "text-green-600"
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
    // { 
    //   name: "Firebase", 
    //   icon: <SiFirebase className="text-5xl text-yellow-500" />, 
    //   level: 70,
    //   color: "from-yellow-400 to-yellow-500",
    //   bg: "bg-yellow-50",
    //   text: "text-yellow-600"
    // }
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