import { useState, useEffect, useRef, useCallback } from "react";

export const ScrambleText = ({ text, trigger }) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+=-_?";
  const [displayText, setDisplayText] = useState(text);
  const prevTriggerRef = useRef(trigger);
  const intervalRef = useRef(null);

  const startScramble = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    let iteration = 0;
    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      iteration += 1 / 3;
    }, 25);
  }, [text]);

  useEffect(() => {
    // Only trigger scramble when the state changes from false to true (mouse enter)
    if (trigger && !prevTriggerRef.current) {
      startScramble();
    }
    prevTriggerRef.current = trigger;
  }, [trigger, startScramble]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Reset to the latest text prop if it changes
    setDisplayText(text);
  }, [text]);

  return <>{displayText}</>;
};

export default ScrambleText;
