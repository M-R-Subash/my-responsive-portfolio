import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const BlurReveal = ({ text, className = "", isParagraph = false }) => {
  const containerRef = useRef(null);
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        if (entry.isIntersecting) {
          // If the element's top is in the bottom part of the screen, it's entering from below (scrolling down)
          if (entry.boundingClientRect.top > viewportHeight * 0.25) {
            setPlayAnimation(true);
          } else {
            // Entered from top (scrolling up) - show static text immediately
            setPlayAnimation(false);
          }
        } else {
          // If it goes off-screen at the bottom, reset so it can animate again when scrolled down
          if (entry.boundingClientRect.top > viewportHeight) {
            setPlayAnimation(false);
          }
        }
      },
      { threshold: 0.02 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isParagraph ? 0.003 : 0.012,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  if (!playAnimation) {
    return (
      <span ref={containerRef} className={`${className} inline-block`}>
        {text}
      </span>
    );
  }

  return (
    <motion.span
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`${className} inline-block`}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block">
          <span className="inline-block whitespace-nowrap">
            {word.split("").map((char, charIdx) => (
              <motion.span
                key={charIdx}
                variants={charVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
          {wordIdx < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
};
