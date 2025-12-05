import { useState, useEffect } from "react";
import { softSkills, technicalSkills } from "./Data";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredSkill(null);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * softSkills.length);
        setHoveredSkill(softSkills[randomIndex].name);
      }, 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden -z-10" id="skills">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white"></div>
        
        <div className="relative z-10">
          <h1 
            id='skills' 
            className="text-center pt-16 pb-4 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-tight"
          >
            SKILLS & EXPERTISE
          </h1>
          
          <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 mb-12">
            Technical proficiency and interpersonal abilities that drive successful projects
          </p>

          {/* Technical Skills Section - NO HOVER */}
          <section className="px-4 sm:px-6 lg:px-8 xl:px-20 py-3 sm:py-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                  TECHNICAL SKILLS
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Modern web development technologies and tools I work with
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
                {technicalSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative"
                  >
                    <div className={`
                      bg-white rounded-2xl shadow-lg border border-gray-200 p-6
                      flex flex-col items-center text-center
                    `}>
                      {/* Skill Icon */}
                      <div className={`p-4 rounded-2xl ${skill.bg} mb-4`}>
                        <div>
                          {skill.icon}
                        </div>
                      </div>

                      {/* Skill Name */}
                      <h3 className={`font-bold text-lg sm:text-xl mb-3 ${skill.text}`}>
                        {skill.name}
                      </h3>

                      {/* Progress Bar - ALWAYS SHOWING */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-2.5 rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>

                      {/* Percentage - ALWAYS SHOWING */}
                      <div className="text-sm font-semibold text-gray-600">
                        {skill.level}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Soft Skills Section */}
          <section className="px-4 sm:px-6 lg:px-8 xl:px-20 py-6 sm:py-8 md:py-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                  SOFT SKILLS
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Personal attributes that enhance technical abilities and team collaboration
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {softSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`
                      bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-6
                      transform transition-all duration-300 ease-out
                      ${hoveredSkill === skill.name ? 
                        'scale-105 shadow-2xl -translate-y-2 border-blue-200' : 
                        'hover:scale-105 hover:shadow-xl hover:-translate-y-1'
                      }
                      flex flex-col items-center text-center
                    `}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Animated Icon Container */}
                    <div className={`
                      p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 mb-4
                      transform transition-all duration-300
                      ${hoveredSkill === skill.name ? 
                        'scale-110 rotate-3' : 
                        'hover:scale-110'
                      }
                    `}>
                      <div className="text-white transform transition-transform duration-300">
                        {skill.icon}
                      </div>
                    </div>

                    {/* Skill Name */}
                    <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">
                      {skill.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base">
                      {skill.description}
                    </p>

                    {/* Pulsing Dot */}
                    <div className={`
                      absolute top-4 right-4 w-3 h-3 rounded-full bg-blue-500
                      animate-pulse ${hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'}
                      transition-opacity duration-300
                    `}></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Summary */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl p-8 shadow-lg border border-blue-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Continuous Growth Mindset
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      {technicalSkills.length}+
                    </div>
                    <p className="text-gray-700 mt-2">Technologies Mastered</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      15+
                    </div>
                    <p className="text-gray-700 mt-2">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      {softSkills.length}+
                    </div>
                    <p className="text-gray-700 mt-2">Soft Skills Enhanced</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Animated Wave Divider */}
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
      </div>
    </>
  );
};

export default Skills;