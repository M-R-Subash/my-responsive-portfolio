import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HUDTracker() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState("0.000");
  const [elapsedTime, setElapsedTime] = useState("0.0");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop/tablet with pointer interaction
    const checkDevice = () => {
      setIsVisible(window.innerWidth >= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    // Track cursor coordinates
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    // Track scroll progress
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = window.scrollY / scrollHeight;
        // Clamp between 0 and 1
        const clampedProgress = Math.max(0, Math.min(1, progress));
        setScrollProgress(clampedProgress.toFixed(3));
      } else {
        setScrollProgress("0.000");
      }
    };

    // Track session time (elapsed time since mount)
    const startTime = performance.now();
    const timeInterval = setInterval(() => {
      const elapsed = (performance.now() - startTime) / 1000;
      setElapsedTime(elapsed.toFixed(1));
    }, 100);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Initial scroll check
    handleScroll();

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-[999] font-mono text-[10px] select-none tracking-widest text-zinc-500 dark:text-neutral-400 bg-white/90 dark:bg-neutral-950/80 backdrop-blur-md border border-zinc-200 dark:border-neutral-800/80 px-5 py-3 shadow-xl dark:shadow-2xl rounded-none transition-all duration-300"
    >
      {/* Corner plus signs */}
      <span className="absolute -top-[1px] -left-[1px] -translate-x-1/2 -translate-y-1/2 text-zinc-400 dark:text-neutral-600 font-bold select-none text-[10px] pointer-events-none">+</span>
      <span className="absolute -top-[1px] -right-[1px] translate-x-1/2 -translate-y-1/2 text-zinc-400 dark:text-neutral-600 font-bold select-none text-[10px] pointer-events-none">+</span>
      <span className="absolute -bottom-[1px] -left-[1px] -translate-x-1/2 translate-y-1/2 text-zinc-400 dark:text-neutral-600 font-bold select-none text-[10px] pointer-events-none">+</span>
      <span className="absolute -bottom-[1px] -right-[1px] translate-x-1/2 translate-y-1/2 text-zinc-400 dark:text-neutral-600 font-bold select-none text-[10px] pointer-events-none">+</span>

      {/* Content grid */}
      <div className="flex items-center gap-5">
        {/* Left Column: Cursor coordinates */}
        <div className="flex flex-col gap-1 w-28">
          <div className="flex justify-between items-center">
            <span className="text-zinc-400 dark:text-neutral-500 font-bold">CURSOR X:</span>
            <span className="text-right text-zinc-700 dark:text-neutral-200 font-bold font-mono">{cursorPos.x}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-400 dark:text-neutral-500 font-bold">CURSOR Y:</span>
            <span className="text-right text-zinc-700 dark:text-neutral-200 font-bold font-mono">{cursorPos.y}</span>
          </div>
        </div>

        {/* Vertical divider line */}
        <div className="h-6 w-[1px] bg-zinc-200 dark:bg-neutral-800 transition-all duration-300" />

        {/* Right Column: Scroll & Time */}
        <div className="flex flex-col gap-1 w-32">
          <div className="flex justify-between items-center">
            <span className="text-zinc-400 dark:text-neutral-500 font-bold">SCROLL:</span>
            <span className="text-right text-zinc-700 dark:text-neutral-200 font-bold font-mono">{scrollProgress}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-400 dark:text-neutral-500 font-bold">TIME:</span>
            <span className="text-right text-zinc-700 dark:text-neutral-200 font-bold font-mono">{elapsedTime}S</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
