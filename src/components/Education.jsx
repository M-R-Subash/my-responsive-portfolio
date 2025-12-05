import { useState } from "react";
import {educationData} from './Data'
import {FaChevronRight } from "react-icons/fa";
const Education = () => {
  const [hoveredCard, setHoveredCard] = useState(null);


  return (
    <>
      <div className="relative overflow-hidden -z-10" id="education">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white"></div>
        
        <div className="relative z-10">
          <h1 
            id='education' 
            className="text-center pt-16 pb-4 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-tight"
          >
            EDUCATION
          </h1>
          
          <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 mb-12">
            My academic journey in Computer Science and related fields
          </p>

          <section className="px-4 sm:px-6 lg:px-8 xl:px-20 py-6 sm:py-8 md:py-12">
            <div className="max-w-7xl mx-auto">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-[770px] w-1 bg-gradient-to-b from-blue-300 to-blue-600 rounded-lg"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 relative">
                {educationData.map((edu, index) => (
                  <div 
                    key={edu.id}
                    className={`relative ${
                      index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:mt-24'
                    }`}
                    onMouseEnter={() => setHoveredCard(edu.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Timeline dot for desktop */}
                    <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-500 z-10"
                      style={{
                        left: index % 2 === 0 ? 'calc(100% + 8px)' : '-23.5px',
                      }}
                    />

                    <div className={`
                      bg-white rounded-2xl shadow-lg border border-blue-100 
                      transform transition-all duration-500 ease-out
                      ${hoveredCard === edu.id ? 
                        'scale-105 shadow-2xl border-blue-200 -translate-y-2' : 
                        'scale-100 shadow-xl hover:shadow-2xl'
                      }
                      overflow-hidden relative
                    `}>
                      {/* Header with gradient */}
                      <div className={`bg-gradient-to-r ${edu.color} p-5 sm:p-6`}>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-4 pr-16 sm:pr-0"> {/* Added pr-16 for mobile spacing */}
                            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm flex-shrink-0">
                              {edu.icon}
                            </div>
                            <div className="min-w-0 flex-1"> {/* Added min-w-0 and flex-1 */}
                              <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-tight break-words">
                                {edu.institution}
                              </h2>
                              <p className="text-blue-100 text-sm sm:text-base mt-1 truncate">
                                {edu.degree}
                              </p>
                            </div>
                          </div>
                          
                          {/* Desktop year badge */}
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 text-center min-w-[80px] hidden sm:block">
                            <span className="text-white font-bold text-sm sm:text-base block">
                              {edu.year}
                            </span>
                            <span className="text-blue-100 text-xs sm:text-sm">
                              {edu.grade}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6">
                        <p className="text-gray-700 text-sm sm:text-base mb-4 md:mb-5">
                          {edu.description}
                        </p>

                        {edu.projects && (
                          <div className="mb-4 md:mb-5">
                            <h4 className="text-blue-600 font-semibold text-sm sm:text-base mb-2 flex items-center">
                              <FaChevronRight className="mr-2 text-xs" />
                              Key Projects & Achievements
                            </h4>
                            <ul className="space-y-2 pl-6">
                              {edu.projects.map((project, idx) => (
                                <li 
                                  key={idx} 
                                  className="text-gray-600 text-xs sm:text-sm flex items-start"
                                >
                                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  <span>{project}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {edu.subjects && (
                          <div>
                            <h4 className="text-blue-600 font-semibold text-sm sm:text-base mb-2">
                              Main Subjects
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.subjects.map((subject, idx) => (
                                <span 
                                  key={idx}
                                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm"
                                >
                                  {subject}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Hover effect indicator */}
                        <div className={`
                          absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}
                          transform transition-transform duration-300
                          ${hoveredCard === edu.id ? 'scale-x-100' : 'scale-x-0'}
                        `}></div>
                      </div>

                      {/* Mobile year badge - FIXED POSITION */}
                      <div className="sm:hidden absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-sm min-w-[70px] text-center">
                        <span className="text-blue-600 font-bold text-xs block">{edu.year}</span>
                        <span className="text-blue-500 text-[10px]">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Connect line for mobile */}
              <div className="lg:hidden flex justify-center my-8">
                <div className="w-1 h-24 bg-gradient-to-b from-blue-300 to-blue-600"></div>
              </div>
            </div>
          </section>

          {/* Stats section */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: "Years of Study", value: "5+", color: "bg-blue-500" },
                { label: "Degrees", value: "2", color: "bg-blue-600" },
                { label: "Projects", value: "6+", color: "bg-blue-700" },
                { label: "Specializations", value: "3", color: "bg-blue-800" }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-xl p-4 sm:p-5 shadow-lg border border-blue-100 text-center 
                           transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className={`${stat.color} w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white font-bold text-xl sm:text-2xl">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
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
      </div>
    </>
  );
};

export default Education;