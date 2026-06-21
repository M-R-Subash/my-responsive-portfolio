import { useEffect, useState, lazy, Suspense } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Preloader from "./components/Preloader";
import HUDTracker from './components/HUDTracker';

// Code-split below-the-fold components for optimized initial load
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("./components/Footer"));

// Monospace simple fallback loader matching HUD aesthetic
const HUDSectionLoader = () => (
  <div className="w-full py-16 flex items-center justify-center font-mono text-[10px] tracking-widest text-zinc-550 text-zinc-500 bg-zinc-50 dark:bg-zinc-950 transition-all duration-300">
    // RETRIEVING_DATA_STREAM...
  </div>
);

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "light");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    // Only initialize Lenis on desktop (width >= 768px)
    if (window.innerWidth < 768) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <HUDTracker />
          <Navbar theme={theme} setTheme={setTheme} />
          <Info />
          <Suspense fallback={<HUDSectionLoader />}>
            <Education />
          </Suspense>
          <Suspense fallback={<HUDSectionLoader />}>
            <Suspense fallback={<HUDSectionLoader />}>
              <Skills />
            </Suspense>
            <Suspense fallback={<HUDSectionLoader />}>
              <Projects />
            </Suspense>
            <Footer />
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;