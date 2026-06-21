import { softSkills, technicalSkills } from "./Data";
import { FaLaptopCode, FaDatabase, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  const categories = [
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: <FaLaptopCode className="text-xl" />,
      skills: technicalSkills.filter(s => ["React", "TypeScript", "JavaScript", "Tailwind", "Bootstrap"].includes(s.name)),
      description: "Developing dynamic UI frameworks, component architectures, and responsive templates."
    },
    {
      id: "cms",
      title: "CMS & E-Commerce",
      icon: <FaDatabase className="text-xl" />,
      skills: technicalSkills.filter(s => ["WordPress", "Elementor", "WooCommerce", "Shopify"].includes(s.name)),
      description: "Building fast e-commerce engines, custom themes, and payment gateways."
    },
    {
      id: "tools",
      title: "Workflow & Markups",
      icon: <FaCogs className="text-xl" />,
      skills: technicalSkills.filter(s => ["GitHub", "HTML5", "CSS3"].includes(s.name)),
      description: "Collaborative Git controls, structural markup patterns, and template layouts."
    }
  ];

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

  const getSkillStatus = (name) => {
    const statuses = {
      TypeScript: "PRODUCTION READY",
      WordPress: "INTERNSHIP EXP",
      WooCommerce: "INTERNSHIP EXP",
      Shopify: "RUNNING",
      Elementor: "INTERNSHIP EXP",
      React: "ACTIVE CORE",
      JavaScript: "ACTIVE CORE",
      Tailwind: "ACTIVE CORE",
      Bootstrap: "LEGACY COMPENSATED",
      HTML5: "COMPLIANT / SECURE",
      CSS3: "COMPLIANT / SECURE",
      GitHub: "TEAM VERIFIED"
    };
    return statuses[name] || "DEPLOYED";
  };



  return (
    <div className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-900 transition-all duration-300" id="skills">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15] transition-all duration-300" />

      <div className="max-w-[1280px] mx-auto px-5 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 mb-4 block"
          >
            // CAPABILITIES_MATRIX_03
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-zinc-900 dark:text-white mb-4 tracking-tighter uppercase"
          >
            SKILLS & EXPERTISE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed"
          >
            An overview of my technical stacks and development workflows, categorised for instant readability.
          </motion.p>
        </div>

        {/* Diagonal HUD Grid tracks */}
        <div className="space-y-12">
          {categories.map((category, index) => (
            <motion.div 
              key={category.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col lg:flex-row gap-6 relative border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/10 p-6 sm:p-8 rounded-none shadow-sm transition-colors duration-300 hover:border-zinc-450 dark:hover:border-zinc-700"
            >
              {/* Corner Plus Sign HUD Decorations */}
              <span className="absolute -top-[1px] -left-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[10px] pointer-events-none transition-all duration-300">+</span>
              <span className="absolute -top-[1px] -right-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[10px] pointer-events-none transition-all duration-300">+</span>
              <span className="absolute -bottom-[1px] -left-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[10px] pointer-events-none transition-all duration-300">+</span>
              <span className="absolute -bottom-[1px] -right-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[10px] pointer-events-none transition-all duration-300">+</span>

              {/* Left Column: Category Spec */}
              <div className="w-full lg:w-1/4 flex flex-row lg:flex-col lg:justify-between border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-900 pb-4 lg:pb-0 lg:pr-6 gap-4 transition-all duration-300">
                <div className="flex items-center lg:items-start gap-4 lg:flex-col">
                  <div className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-none w-fit transition-all duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-base font-black text-zinc-900 dark:text-white uppercase tracking-wider">
                      {category.title}
                    </h2>
                    <span className="text-[9px] text-zinc-400 font-mono tracking-widest block uppercase mt-1">
                      SYS_SEC_DEV_LOAD: ACTIVE
                    </span>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <p className="text-[10px] font-mono text-zinc-500 leading-relaxed uppercase">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Right Column: Skills Plates Grid */}
              <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="border border-zinc-200/60 dark:border-zinc-900/60 bg-white/90 dark:bg-zinc-950/20 p-4 flex flex-col justify-between transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-850"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-500 dark:text-zinc-400 text-sm">{skill.icon}</span>
                          <span className="font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase">{skill.name}</span>
                        </div>
                        <span className="font-mono text-[8px] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 px-2 py-0.5 text-zinc-500 dark:text-zinc-400 transition-all duration-300">
                          {getSkillStatus(skill.name)}
                        </span>
                      </div>
                      
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-light font-sans">
                        {getSkillNote(skill.name)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Sleek Horizontal HUD divider */}
      <div className="relative w-full h-[1px] bg-zinc-200 dark:bg-zinc-900/80 mt-16 transition-all duration-300">
        <span className="absolute left-6 -translate-y-1/2 font-mono text-[10px] text-zinc-400 dark:text-zinc-700 select-none pointer-events-none transition-all duration-300">+</span>
        <span className="absolute right-6 -translate-y-1/2 font-mono text-[10px] text-zinc-400 dark:text-zinc-700 select-none pointer-events-none transition-all duration-300">+</span>
      </div>
    </div>
  );
};

export default Skills;