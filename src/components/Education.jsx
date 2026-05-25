import { useState } from "react";
import { educationData } from './Data';
import { FaChevronRight, FaCalendarAlt, FaAward, FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const Education = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Animation variants
  const timelineLineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.2, ease: "easeInOut" }
    }
  };

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -60 : 60,
      y: 30
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        mass: 0.8
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: index * 0.1
      }
    })
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 py-16 sm:py-24" id="education">
      {/* Decorative background grid and gradient blur blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.4]" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Animated Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-24"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
            EDUCATION & JOURNEY
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            An overview of my academic background, accomplishments, and specialized knowledge in Computer Science.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto mb-24">
          
          {/* Central Timeline line (Desktop) / Left Timeline line (Mobile) */}
          <motion.div 
            variants={timelineLineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 rounded-full origin-top transform lg:-translate-x-1/2"
          />

          <div className="space-y-12 lg:space-y-20 relative">
            {educationData.map((edu, index) => {
              const isActive = activeCard === edu.id;
              const isHovered = hoveredCard === edu.id;

              return (
                <div 
                  key={edu.id}
                  className={`relative flex flex-col lg:flex-row items-start ${
                    index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Timeline bullet indicator */}
                  <div className="absolute left-[9px] lg:left-1/2 top-8 w-6 h-6 rounded-full bg-white border-4 border-blue-500 z-20 shadow-md transform -translate-x-1/2 transition-all duration-300">
                    <motion.div 
                      animate={{
                        scale: isHovered || isActive ? [1, 1.3, 1] : 1,
                        backgroundColor: isHovered || isActive ? "#006eff" : "#ffffff"
                      }}
                      transition={{ duration: 1, repeat: isHovered || isActive ? Infinity : 0 }}
                      className="w-full h-full rounded-full bg-blue-500"
                    />
                  </div>

                  {/* Timeline Card */}
                  <motion.div 
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    onMouseEnter={() => setHoveredCard(edu.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    layout
                    className={`w-full lg:w-[calc(50%-2rem)] ml-10 lg:ml-0 ${
                      index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}
                  >
                    <div 
                      onClick={() => setActiveCard(isActive ? null : edu.id)}
                      className={`group cursor-pointer bg-white/80 backdrop-blur-md rounded-2xl border transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 ${
                        isActive 
                          ? "border-blue-400 ring-2 ring-blue-400/20" 
                          : "border-blue-100 hover:border-blue-300"
                      }`}
                    >
                      {/* Gradient Header Card */}
                      <div className={`bg-gradient-to-r ${edu.color} p-5 sm:p-6 text-white relative overflow-hidden transition-all duration-300`}>
                        {/* Glow decorative highlight */}
                        <div className="absolute -right-10 -top-10 w-36 h-36 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                        
                        <div className="flex items-center justify-between gap-4 relative z-10">
                          <div className="flex items-center gap-4">
                            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm flex-shrink-0 text-white shadow-md">
                              {edu.icon}
                            </div>
                            <div>
                              <h2 className="font-bold text-lg sm:text-xl md:text-2xl leading-tight">
                                {edu.institution}
                              </h2>
                              <p className="text-blue-100 text-xs sm:text-sm font-medium mt-1 flex items-center gap-2">
                                <FaCalendarAlt className="opacity-80" /> {edu.year}
                              </p>
                            </div>
                          </div>

                          {/* Grade Ring progress bar */}
                          <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm shadow-inner group-hover:scale-105 transition-transform duration-300">
                            <svg className="w-full h-full transform -rotate-90">
                              <circle
                                cx="28"
                                cy="28"
                                r="23"
                                className="text-white/10"
                                strokeWidth="3"
                                stroke="currentColor"
                                fill="transparent"
                              />
                              <motion.circle
                                cx="28"
                                cy="28"
                                r="23"
                                className="text-white"
                                strokeWidth="3"
                                strokeDasharray={144.5}
                                initial={{ strokeDashoffset: 144.5 }}
                                whileInView={{ strokeDashoffset: 144.5 - (144.5 * parseInt(edu.grade)) / 100 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                              />
                            </svg>
                            <span className="absolute text-white font-bold text-xs sm:text-sm">
                              {edu.grade}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content Panel */}
                      <div className="p-5 sm:p-6 relative">
                        <div className="flex justify-between items-start gap-4 mb-3">
                          <h3 className="font-bold text-gray-800 text-base sm:text-lg">
                            {edu.degree}
                          </h3>
                          <div className="text-blue-600 bg-blue-50 p-1.5 rounded-full hover:bg-blue-100 transition-colors duration-200">
                            {isActive ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {edu.description || "Pursued advanced computer science modules, emphasizing foundational engineering principles, algorithms, and application implementation."}
                        </p>

                        {/* Expanded details container */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 border-t border-slate-100 space-y-4">
                                {edu.projects && (
                                  <div>
                                    <h4 className="text-blue-700 font-semibold text-xs sm:text-sm mb-2 flex items-center gap-1.5 uppercase tracking-wider">
                                      <FaAward className="text-sm" /> Projects & Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                      {edu.projects.map((project, idx) => (
                                        <li key={idx} className="text-gray-600 text-xs sm:text-sm flex items-start gap-2.5">
                                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                          <span>{project}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {edu.subjects && (
                                  <div>
                                    <h4 className="text-blue-700 font-semibold text-xs sm:text-sm mb-2 uppercase tracking-wider">
                                      Specialized Subjects
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                      {edu.subjects.map((sub, idx) => (
                                        <span 
                                          key={idx}
                                          className="px-2.5 py-1 bg-blue-50/80 text-blue-700 rounded-full text-xs font-medium border border-blue-100/50"
                                        >
                                          {sub}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Grid Wrapper Container */}
        <div className="py-12 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Years of Study", value: "5+", color: "from-blue-500 to-blue-600" },
              { label: "Degrees", value: "2", color: "from-blue-600 to-blue-700" },
              { label: "Research Projects", value: "6+", color: "from-blue-700 to-blue-800" },
              { label: "Key Specializations", value: "3", color: "from-blue-800 to-blue-900" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                custom={idx}
                variants={statsVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-5 shadow-md border border-slate-100 text-center relative overflow-hidden group"
              >
                {/* Decorative hover circle background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-extrabold text-xl sm:text-2xl">
                    {stat.value}
                  </span>
                </div>
                
                <p className="text-gray-700 text-xs sm:text-sm font-semibold relative z-10">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Decorative Smooth Waves Divider */}
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

export default Education;