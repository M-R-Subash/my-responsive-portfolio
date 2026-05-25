import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { PROJECTS } from "./Data";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [itemsPerLoad, setItemsPerLoad] = useState(3);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      
      if (width < 640) { // Mobile
        setItemsPerLoad(3);
        setVisibleCount(prev => Math.min(prev, 2));
      } else if (width < 1024) { 
        setItemsPerLoad(2);
        setVisibleCount(prev => Math.min(prev, 4));
      } else { 
        setItemsPerLoad(3);
        setVisibleCount(prev => Math.min(prev, 6));
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 640) { 
      setVisibleCount(2);
    } else if (windowWidth < 1024) { 
      setVisibleCount(4);
    } else { 
      setVisibleCount(3);
    }
  }, [windowWidth]);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + itemsPerLoad, PROJECTS.length));
  };

  const visibleProjects = PROJECTS.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < PROJECTS.length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.25 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-16 sm:pt-24 overflow-hidden" id="projects">
      
      {/* Animated Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
        className="text-center mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4 uppercase">
          Projects
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-6" />
        <h3 className="inline-block font-bold text-gray-700 border-b-2 border-blue-500 pb-1 text-sm sm:text-base tracking-[3px] uppercase">
          Personal Projects
        </h3>
      </motion.div>
      
      {/* Projects Grid Section Wrapper */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20">
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div 
                layout
                key={project.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                exit="exit"
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 hover:border-blue-200 overflow-hidden transition-all duration-300 flex flex-col h-full relative group cursor-pointer"
              >
                {/* Visual Accent top border bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />
                
                {/* Cover Image Container */}
                <div className="w-full h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <p className="text-xs text-blue-500 font-bold mb-4 tracking-wider uppercase">
                      {project.tools}
                    </p>
                    
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-extrabold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      View Live Project <FaLocationArrow className="ml-1.5 text-xs transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Load More Button Container */}
        {hasMoreProjects && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mt-12"
          >
            <button 
              onClick={loadMore}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Load More Projects
            </button>
          </motion.div>
        )}
      </section>

      {/* Decorative Wave Separator */}
      <div className="relative mt-8 md:mt-16 w-full overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="w-full h-auto">
          <path 
            fill="currentColor" 
            className="text-blue-500"
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

    </div>
  );
};

export default Projects;