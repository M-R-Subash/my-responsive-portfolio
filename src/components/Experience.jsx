import { experienceData } from './Data';
import { FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 py-16 sm:py-24 transition-all duration-300" id="journey">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15] transition-all duration-300" />

      <div className="max-w-[1000px] mx-auto px-5 relative z-10">
        
        {/* Title Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 mb-4 block"
          >
            // WORK_JOURNEY_DATABASE_01
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white mb-4 uppercase"
          >
            JOB JOURNEY
          </motion.h1>
          <div className="w-16 h-[1px] bg-zinc-200 dark:bg-zinc-800 mx-auto mb-6 transition-all duration-300" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed"
          >
            A timeline of my professional experience, key responsibilities, and corporate growth.
          </motion.p>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative border-l border-zinc-200 dark:border-zinc-900 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12 transition-all duration-300">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative group"
            >
              {/* Timeline Station Icon Indicator */}
              <span className="absolute -left-[45px] sm:-left-[61px] top-1.5 w-6 h-6 rounded-none bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 shadow-sm z-10 transition-all duration-300 group-hover:border-zinc-900 dark:group-hover:border-zinc-500">
                <FaBriefcase className="text-sm" />
              </span>

              {/* HUD Station Card */}
              <div className="relative border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/10 p-6 sm:p-8 rounded-none shadow-sm transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-700">
                {/* Plus markers */}
                <span className="absolute -top-[1px] -left-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[8px] pointer-events-none transition-all duration-300">+</span>
                <span className="absolute -top-[1px] -right-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[8px] pointer-events-none transition-all duration-300">+</span>
                <span className="absolute -bottom-[1px] -left-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[8px] pointer-events-none transition-all duration-300">+</span>
                <span className="absolute -bottom-[1px] -right-[1px] text-zinc-300 dark:text-zinc-700 font-bold select-none text-[8px] pointer-events-none transition-all duration-300">+</span>

                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-150 dark:border-zinc-900 pb-4 mb-4 transition-all duration-300">
                  <div>
                    <span className="font-mono text-[9px] text-zinc-400 tracking-wider block uppercase mb-1">
                      WORK_LOG // STATION_0{index + 1}
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-white uppercase tracking-tight">
                      {exp.institution}
                    </h2>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 px-2 py-0.5 text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 transition-all duration-300">
                      <FaCalendarAlt className="text-[8px]" /> {exp.year}
                    </span>
                    <span className="font-mono text-[9px] bg-zinc-900 text-white dark:bg-zinc-800 dark:text-zinc-350 px-2 py-0.5 font-bold transition-all duration-300">
                      STATUS: {exp.grade}
                    </span>
                  </div>
                </div>

                {/* Role & Description */}
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block mb-0.5">Role</span>
                    <h3 className="font-bold text-zinc-800 dark:text-zinc-300 text-sm sm:text-base uppercase tracking-wider">
                      {exp.degree}
                    </h3>
                  </div>

                  {/* Responsibilities */}
                  {exp.projects && (
                    <div className="space-y-2 pt-2">
                      <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">// CORE_RESPONSIBILITIES</span>
                      <ul className="space-y-1.5">
                        {exp.projects.map((project, idx) => (
                          <li key={idx} className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm flex items-start gap-2">
                            <span className="font-mono text-zinc-400 dark:text-zinc-600 select-none mt-[2px]">{`>`}</span>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Matrix Grid */}
        <div className="border-t border-zinc-200 dark:border-zinc-900 pt-16 mt-16 transition-all duration-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Technical Roles", value: "1", desc: "Full Stack Intern" },
              { label: "Months of Interning", value: "6", desc: "Jan 2026 - Present" },
              { label: "Modern Stack Focus", value: "React & TS", desc: "Front & Back-end" },
              { label: "CMS Portals Built", value: "3+", desc: "WordPress & Shopify" }
            ].map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="bg-white/70 dark:bg-zinc-900/15 border border-zinc-200 dark:border-zinc-900/80 p-5 rounded-none relative overflow-hidden group transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/20 dark:from-zinc-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="absolute -top-[1px] -left-[1px] text-zinc-300 dark:text-zinc-800 font-bold select-none text-[8px] pointer-events-none transition-all duration-300">+</span>
                <span className="absolute -top-[1px] -right-[1px] text-zinc-300 dark:text-zinc-800 font-bold select-none text-[8px] pointer-events-none transition-all duration-300">+</span>

                <div className="font-mono font-bold text-2xl text-zinc-900 dark:text-white mb-1.5 transition-colors">
                  {stat.value}
                </div>
                
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-0.5 transition-colors">
                  {stat.label}
                </div>
                <div className="text-[9px] font-mono text-zinc-400 transition-colors">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
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

export default Experience;
