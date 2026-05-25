import { useState } from "react";
import { softSkills, technicalSkills } from "./Data";
import { motion } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaCogs, FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Segment technical skills into clear, instantly readable categories
  const categories = [
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: <FaLaptopCode className="text-xl sm:text-2xl text-blue-500" />,
      skills: technicalSkills.filter(s => ["React", "TypeScript", "JavaScript", "Tailwind", "Bootstrap"].includes(s.name)),
      description: "Developing dynamic UI frameworks, component architectures, and responsive templates."
    },
    {
      id: "cms",
      title: "CMS & E-Commerce",
      icon: <FaDatabase className="text-xl sm:text-2xl text-purple-500" />,
      skills: technicalSkills.filter(s => ["WordPress", "Elementor", "WooCommerce", "Shopify"].includes(s.name)),
      description: "Mastered during YS Innovation Startup internship in Coimbatore to build fast e-commerce engines."
    },
    {
      id: "tools",
      title: "Workflow & Markups",
      icon: <FaCogs className="text-xl sm:text-2xl text-slate-500" />,
      skills: technicalSkills.filter(s => ["GitHub", "HTML5", "CSS3"].includes(s.name)),
      description: "Collaborative Git controls, structural markup patterns, and template layouts."
    }
  ];

  // Concise, highly understandable notes for each skill
  const getSkillNote = (name) => {
    const notes = {
      TypeScript: "Coded type-safe APIs as a Full Stack Intern at YS Innovation Startup.",
      WordPress: "Engineered customized page themes and user dashboards at YS Innovation.",
      WooCommerce: "Configured store catalogs, payment gateway hooks, and shopping loops.",
      Shopify: "Optimized modern liquid store setups and tailored visual options.",
      Elementor: "Designed optimized modular sections with high page speed indices.",
      React: "Built reusable frontend structures and dynamic modular portfolios.",
      JavaScript: "Programmed core web logic and seamless asynchronous state updates.",
      Tailwind: "Constructed utility-first responsive styling arrays and fluid transitions.",
      Bootstrap: "Designed responsive layout frameworks and flex grids in early milestones.",
      HTML5: "Assembled structural semantics with fully compliant web accessibility.",
      CSS3: "Engineered vector wave frames and smooth aesthetic visual effects.",
      GitHub: "Managed team code repositories, branch strategy releases, and pull histories."
    };
    return notes[name] || "Mastered and deployed successfully across active projects.";
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 py-16 sm:py-24" id="skills">
      
      {/* Subtle Background Ambiance */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-[1280px] mx-auto px-5 relative z-10">
        
        {/* Instantly Understandable Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4.5 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-full border border-blue-100 uppercase tracking-widest inline-block mb-4">
            Professional Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent mb-4 tracking-tight uppercase">
            SKILLS & EXPERTISE
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            An overview of my technical stacks and development workflows, categorised for instant readability.
          </p>
        </motion.div>

        {/* Dynamic Category Clusters */}
        <div className="space-y-16 mb-20">
          {categories.map((category) => (
            <div key={category.id} className="space-y-6">
              
              {/* Category Subheader */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white rounded-2xl shadow-sm border border-slate-100">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-800 uppercase tracking-tight">
                      {category.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skill Matrix Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => {
                  const isHovered = hoveredSkill === skill.name;
                  return (
                    <motion.div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ y: -6 }}
                      className={`
                        bg-white rounded-3xl p-5 border shadow-sm flex items-center justify-between gap-5 transition-all duration-300 relative overflow-hidden cursor-pointer
                        ${isHovered 
                          ? 'border-blue-300 shadow-xl shadow-blue-500/5 ring-4 ring-blue-500/5' 
                          : 'border-slate-100 hover:border-blue-200'
                        }
                      `}
                    >
                      {/* Left: Glowing Icon & Text */}
                      <div className="flex items-center gap-4">
                        <div className={`p-3.5 rounded-2xl ${skill.bg} text-3xl transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
                          {skill.icon}
                        </div>
                        <div>
                          <span className="font-extrabold text-sm sm:text-base text-slate-800 block">
                            {skill.name}
                          </span>
                          <span className="text-[10px] sm:text-xs text-slate-500 leading-normal block max-w-[170px] font-light">
                            {getSkillNote(skill.name)}
                          </span>
                        </div>
                      </div>

                      {/* Right: Highly Understandable Progress Dial */}
                      <div className="relative w-14 h-14 flex items-center justify-center bg-slate-50 rounded-2xl shadow-inner border border-slate-100 shrink-0">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="28" cy="28" r="21" stroke="#e2e8f0" strokeWidth="3" fill="transparent" />
                          <motion.circle 
                            cx="28" 
                            cy="28" 
                            r="21" 
                            stroke="#3b82f6" 
                            strokeWidth="3" 
                            strokeDasharray={132}
                            initial={{ strokeDashoffset: 132 }}
                            whileInView={{ strokeDashoffset: 132 - (132 * skill.level) / 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            strokeLinecap="round" 
                            fill="transparent" 
                          />
                        </svg>
                        <span className="absolute text-xs text-slate-800 font-extrabold">{skill.level}%</span>
                      </div>

                      {/* Decorative colored glow on card back */}
                      <div className={`absolute -right-12 -bottom-12 w-24 h-24 rounded-full blur-2xl opacity-10 bg-gradient-to-br ${skill.color} transition-all duration-300 ${isHovered ? 'scale-150' : ''}`} />
                    </motion.div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Soft Skills Section: Sleek Clean Cards */}
        <section className="mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-wide uppercase">
              Core Interpersonal Core
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
              Personal collaborative parameters driving successful full-stack deployments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative cursor-pointer"
              >
                <div className="h-full bg-white rounded-3xl shadow-sm border border-slate-100 p-6 flex flex-col items-center text-center transition-all duration-300 overflow-hidden hover:border-blue-500/80 hover:shadow-lg">
                  {/* Glowing Soft Icon Container */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 text-white shadow-md">
                    <div className="text-2xl">
                      {skill.icon}
                    </div>
                  </div>

                  <h3 className="font-extrabold text-base text-slate-800 mb-2">
                    {skill.name}
                  </h3>
                  
                  <p className="text-slate-500 text-xs leading-relaxed font-light">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* Decorative Wave Divider */}
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

export default Skills;