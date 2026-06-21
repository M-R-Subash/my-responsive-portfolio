import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [logs, setLogs] = useState([]);

  const logLines = [
    { text: ">> CONNECTING TO SERVER...", delay: 100 },
    { text: ">> STATUS: SECURE CONNECTION ESTABLISHED", delay: 350 },
    { text: ">> INIT_HANDSHAKE: [SUBASH_PORTFOLIO_v2.0]", delay: 550 },
    { text: ">> COMPILING MODULES: [React, Tailwind, Framer-Motion, Lenis]", delay: 800 },
    { text: ">> LOADING CREDENTIAL DATABASE... [OK]", delay: 1100 },
    { text: ">> ESTABLISHING HUD_INTERFACE... [ACTIVE]", delay: 1350 },
    { text: ">> BOOT_SEQUENCE_SUCCESSFUL. STARTING SESSION...", delay: 1600 }
  ];

  useEffect(() => {
    // Increment percent
    const duration = 1800; // 1.8 seconds total
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const stepVal = 100 / steps;
    
    let currentPercent = 0;
    const timer = setInterval(() => {
      currentPercent += stepVal;
      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
      setPercent(Math.floor(currentPercent));
    }, intervalTime);

    // Print logs sequentially
    const logTimers = logLines.map(line => {
      return setTimeout(() => {
        setLogs(prev => [...prev, line.text]);
      }, line.delay);
    });

    return () => {
      clearInterval(timer);
      logTimers.forEach(clearTimeout);
    };
  }, []);

  // Compute filled vs empty blocks for terminal progress
  const totalBlocks = 20;
  const filledBlocks = Math.round((percent / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;
  const progressBlocks = "■".repeat(filledBlocks) + "□".repeat(emptyBlocks);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-zinc-950 text-zinc-300 font-mono flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none"
    >
      {/* Scanning Line overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(18,16,16,0)+50%,rgba(0,0,0,0.25)+50%),linear-gradient(to_right,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] opacity-45" />

      {/* Top Metadata header */}
      <div className="flex justify-between items-center text-[10px] text-zinc-550 text-zinc-500 border-b border-zinc-900 pb-4">
        <span>SESSION: BOOTING_UP</span>
        <span>SYS_LOG_SECURE: OK</span>
      </div>

      {/* Terminal log lines container */}
      <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full gap-2 text-xs sm:text-sm">
        <div className="space-y-2 h-48 overflow-y-auto scrollbar-none flex flex-col justify-end">
          {logs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className={index === logLines.length - 1 ? "text-emerald-400 font-bold" : ""}
            >
              {log}
            </motion.div>
          ))}
        </div>

        {/* Loading Progress Visual */}
        <div className="mt-8 border border-zinc-900 p-4 bg-zinc-950/80">
          <div className="flex justify-between items-center text-[10px] text-zinc-500 mb-2 uppercase tracking-widest">
            <span>STATUS_PROGRESS</span>
            <span>{percent}% COMPLETE</span>
          </div>

          <div className="text-zinc-400 font-mono tracking-widest text-xs sm:text-base select-none truncate">
            [{progressBlocks}]
          </div>
        </div>
      </div>

      {/* Bottom info footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-zinc-600 border-t border-zinc-900 pt-4 gap-2">
        <span>&copy; {new Date().getFullYear()} SUBASH M R. ALL RIGHTS RESERVED.</span>
        <span>ENVIRONMENT: PRODUCTION_BUILD</span>
      </div>
    </motion.div>
  );
};

export default Preloader;
