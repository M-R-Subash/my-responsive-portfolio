import { softSkills, technicalSkills } from "./Data";
import { FaLaptopCode, FaDatabase, FaCogs } from "react-icons/fa";
import { BlurReveal } from "./BlurReveal";

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

  const renderVisualLevel = (level) => {
    const filled = Math.round(level / 10);
    const empty = 10 - filled;
    return (
      <div className="flex gap-1 mt-1.5 transition-all duration-300">
        {[...Array(filled)].map((_, i) => (
          <span key={`f-${i}`} className="w-2 h-2 bg-zinc-900 dark:bg-zinc-150 dark:bg-zinc-200 border border-zinc-900 dark:border-zinc-200 transition-all duration-300" />
        ))}
        {[...Array(empty)].map((_, i) => (
          <span key={`e-${i}`} className="w-2 h-2 bg-transparent border border-zinc-250 dark:border-zinc-800 transition-all duration-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-900 transition-all duration-300" id="skills">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15] transition-all duration-300" />

      <div className="max-w-[1280px] mx-auto px-5 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 mb-4 block">// CAPABILITIES_MATRIX_03</span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-zinc-900 dark:text-white mb-4 tracking-tighter uppercase">
            <BlurReveal text="SKILLS & EXPERTISE" />
          </h1>
          <p className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            <BlurReveal text="An overview of my technical stacks and development workflows, categorised for instant readability." isParagraph={true} />
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="relative border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/10 p-6 flex flex-col justify-between rounded-none shadow-sm transition-all duration-300 hover:border-zinc-450 dark:hover:border-zinc-700"
            >
              {/* Corner Plus Sign HUD Decorations */}
              <span className="absolute -top-[1px] -left-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[10px] pointer-events-none transition-all duration-300">+</span>
              <span className="absolute -top-[1px] -right-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[10px] pointer-events-none transition-all duration-300">+</span>
              <span className="absolute -bottom-[1px] -left-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[10px] pointer-events-none transition-all duration-300">+</span>
              <span className="absolute -bottom-[1px] -right-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[10px] pointer-events-none transition-all duration-300">+</span>

              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-900 pb-3 transition-all duration-300">
                  <div className="p-2 bg-zinc-100 dark:bg-zinc-905 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-705 text-zinc-700 dark:text-zinc-300 transition-all duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                      {category.title}
                    </h2>
                    <span className="text-[9px] text-zinc-400 font-mono tracking-widest block uppercase mt-0.5">
                      SYS_SEC_DEV_LOAD: ACTIVE
                    </span>
                  </div>
                </div>

                {/* Skills Stack List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="border border-zinc-200/60 dark:border-zinc-900/60 bg-white/90 dark:bg-zinc-950/20 p-3 sm:p-4 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-500 dark:text-zinc-400 text-sm">{skill.icon}</span>
                          <span className="font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase">{skill.name}</span>
                        </div>
                        <span className="font-mono text-[8px] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 px-1.5 py-0.5 text-zinc-500 dark:text-zinc-400 transition-all duration-300">
                          {getSkillStatus(skill.name)}
                        </span>
                      </div>
                      
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-450 dark:text-zinc-400 leading-relaxed font-light">
                        {getSkillNote(skill.name)}
                      </p>

                      <div className="mt-2.5 pt-2.5 border-t border-zinc-100 dark:border-zinc-900/60 flex items-center justify-between transition-all duration-300">
                        <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest">Efficiency index</span>
                        {renderVisualLevel(skill.level)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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