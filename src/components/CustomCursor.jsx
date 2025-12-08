import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  // Check if desktop/tablet
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkDevice();
    window.addEventListener("resize", checkDevice);
    
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useGSAP(() => {
    if (!isDesktop || !cursorDotRef.current) return;

    // Create setters for DOT (fast movement)
    const cursorXSetter = gsap.quickTo(cursorDotRef.current, "x", {
      duration: 0.1, // Very fast for dot
      ease: "power2.out",
    });
    const cursorYSetter = gsap.quickTo(cursorDotRef.current, "y", {
      duration: 0.1,
      ease: "power2.out",
    });

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursorXSetter(x);
      cursorYSetter(y);
    };

    // Click animation handlers
    const handleMouseDown = () => {
      setIsClicked(true);
      
      // Dot grows and shrinks
      gsap.to(cursorDotRef.current, {
        scale: 1.25,
        duration: 0.1,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(cursorDotRef.current, {
            scale: 1,
            duration: 0.2,
            ease: "back.out(1.7)",
          });
        }
      });
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Leading Dot with click effect */}
      <div
        ref={cursorDotRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-200 ${
          isClicked ? "bg-blue-500" : "bg-black"
        }`}
      />
    </>
  );
};

export default CustomCursor;