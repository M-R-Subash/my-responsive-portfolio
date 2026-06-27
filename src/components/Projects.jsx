import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { PROJECTS } from "./Data";
import ScrollReveal from "./ScrollReveal";
import ScrambleText from "./ScrambleText";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getProjectStatus = (name) => {
    const statuses = {
      "YS LEADGEN": "LIVE / PRODUCTION",
      "YS DESK": "LIVE / PRODUCTION",
      "CHENDUR DIGITALS": "LIVE / CLIENT WORK",
      "YS ACADEMY": "LIVE / REDESIGN",
      "VINMAGAL": "LIVE / E-COMMERCE"
    };
    return statuses[name] || "COMPLETED";
  };

  const getProjectId = (index) => {
    return `PRJ-00${index + 1}`;
  };



  return (
    <div className="pt-16 sm:pt-24 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-all duration-300 overflow-hidden" id="projects">
      
      <div className="max-w-[1280px] mx-auto px-5 relative z-10">
        
        {/* Instantly Understandable HUD Header */}
        <div className="text-center mb-16">
          <ScrollReveal 
            as="span"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 mb-4 block"
          >
            // PRODUCTION_WORK_DATABASE_04
          </ScrollReveal>
          <ScrollReveal 
            as="h1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white mb-4 uppercase"
          >
            REAL-WORLD PROJECTS
          </ScrollReveal>
          <div className="w-16 h-[1px] bg-zinc-200 dark:bg-zinc-800 mx-auto mb-6 transition-all duration-300" />
          <ScrollReveal 
            as="p"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed"
          >
            A curated archive of active production websites, client platforms, and custom-designed e-commerce stores built during my professional career.
          </ScrollReveal>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {PROJECTS.map((project, index) => (
            <ScrollReveal 
              key={project.name}
              as="div"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              className="relative border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/10 p-6 flex flex-col justify-between rounded-none shadow-sm transition-colors duration-300 hover:border-zinc-400 dark:hover:border-zinc-700 min-h-[490px]"
            >
              {/* Corner Plus Sign HUD Decorations */}
              <span className="absolute -top-[1px] -left-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[10px] pointer-events-none transition-all duration-300">+</span>
              <span className="absolute -top-[1px] -right-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[10px] pointer-events-none transition-all duration-300">+</span>
              <span className="absolute -bottom-[1px] -left-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[10px] pointer-events-none transition-all duration-300">+</span>
              <span className="absolute -bottom-[1px] -right-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[10px] pointer-events-none transition-all duration-300">+</span>

              <div className="space-y-4">
                {/* Header Metadata */}
                <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-900 pb-3.5 transition-all duration-300">
                  <span className="font-mono text-[9px] text-zinc-550 text-zinc-400 tracking-wider">
                    {getProjectId(index)}
                  </span>
                  <span className="font-mono text-[8px] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 text-zinc-500 dark:text-zinc-400 transition-all duration-300">
                    {getProjectStatus(project.name)}
                  </span>
                </div>

                {/* Cover Image Viewport Panel */}
                <div className="relative border border-zinc-200 dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-950 overflow-hidden h-44 sm:h-48 rounded-none group transition-all duration-300">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out filter grayscale group-hover:grayscale-0 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-zinc-950/15 group-hover:bg-transparent transition-opacity duration-300" />
                </div>

                {/* Details */}
                <div>
                  <h3 className="font-mono text-base font-extrabold tracking-widest text-zinc-900 dark:text-white uppercase mb-1">
                    {project.name}
                  </h3>
                  
                  <div className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 tracking-wider mb-3">
                    <span className="font-bold text-zinc-650 dark:text-zinc-405 dark:text-zinc-400">STACK:</span> {project.tools.toUpperCase()}
                  </div>

                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* View Live Link / Launch */}
              <div className="pt-4 border-t border-zinc-150 dark:border-zinc-900 mt-5 transition-all duration-300">
                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="cyber-btn w-full flex items-center justify-center gap-2 border border-zinc-900 bg-zinc-900 text-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 hover:bg-zinc-800 dark:hover:bg-zinc-800 py-2.5 font-mono text-[10px] font-extrabold rounded-none uppercase"
                  >
                    <span className="btn-corner btn-corner-tl"></span>
                    <span className="btn-corner btn-corner-tr"></span>
                    <span className="btn-corner btn-corner-bl"></span>
                    <span className="btn-corner btn-corner-br"></span>
                    <span>
                      <ScrambleText text="LAUNCH PROJECT" trigger={hoveredIndex === index} />
                    </span>
                    <FaLocationArrow className="text-[8px]" />
                  </a>
                ) : (
                  <div
                    className="w-full flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-900 bg-transparent text-zinc-400 dark:text-zinc-650 py-2.5 font-mono text-[10px] font-extrabold tracking-wider transition-all duration-300 rounded-none cursor-not-allowed uppercase"
                  >
                    <span>LOCAL PREVIEW ONLY</span>
                  </div>
                )}
              </div>

            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Sleek Horizontal HUD divider */}
      <div className="relative w-full h-[1px] bg-zinc-200 dark:bg-zinc-900/80 mt-16 transition-all duration-300">
        <span className="absolute left-6 -translate-y-1/2 font-mono text-[10px] text-zinc-400 dark:text-zinc-700 select-none pointer-events-none">+</span>
        <span className="absolute right-6 -translate-y-1/2 font-mono text-[10px] text-zinc-400 dark:text-zinc-700 select-none pointer-events-none">+</span>
      </div>

    </div>
  );
};

export default Projects;