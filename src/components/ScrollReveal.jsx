import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({ 
  children, 
  initial, 
  animate, 
  transition, 
  className,
  variants,
  as = "div"
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset to initial state ONLY if it leaves the viewport to the bottom (meaning user scrolled up past it)
          if (entry.boundingClientRect.top > 0) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const Component = motion[as] || motion.div;

  return (
    <Component
      ref={ref}
      initial={initial}
      animate={isVisible ? (variants ? "visible" : animate) : (variants ? "hidden" : initial)}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
