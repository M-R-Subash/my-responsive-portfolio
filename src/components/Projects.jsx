import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { PROJECTS } from "./Data";


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

  return (
    <>
      <h1 id="projects" className="text-center text-[28px] sm:text-4xl font-bold tracking-[5px] pt-10">
        PROJECTS
      </h1>
      <div className="text-center">
        <h3 className="inline-block font-semibold mt-3 border-b-2 border-slate-950 max-sm:text-[15px] mb-10">
          PERSONAL PROJECTS
        </h3>
      </div>
      
      <section className="px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div 
              key={index} 
              className="p-6 border-gray-300 shadow-2xl border rounded-lg hover:shadow-2xl transition-all duration-300 text-justify leading-normal flex flex-col h-full"
            >
              <div className="w-full h-64 overflow-hidden rounded-xl shadow-xl mb-5">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <h1 className="font-extrabold text-2xl tracking-[2px] mb-3">
                {project.name}
              </h1>
              <p className="mb-3 flex-grow">{project.description}</p>
              <p className="mb-6">
                <span className="font-bold">TOOLS : </span> {project.tools}
              </p>
              <div className="mt-auto">
                <div className="group inline-flex items-center bg-blue-500 text-white font-medium rounded-3xl px-4 py-2 transition-all duration-300 hover:bg-blue-600 hover:pr-6 cursor-pointer whitespace-nowrap">
                  <a 
                    href={project.link} 
                    rel="noopener noreferrer" 
                    target="_blank" 
                    className="flex items-center"
                  >
                    <span>Visit site</span>
                    <FaLocationArrow className="ml-0 opacity-0 w-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100 group-hover:w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Load More Projects
            </button>
          </div>
        )}
      </section>
      <div className="relative mt-8 md:mt-12">
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
    </>
  );
};

export default Projects;