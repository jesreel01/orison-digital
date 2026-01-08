"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  delay?: number;
  staggerDelay?: number;
  animation?: "fadeUp" | "fadeIn" | "scale" | "blur";
}

const animations = {
  fadeUp: {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  scale: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  },
  blur: {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
  },
};

export const SplitText = ({
  text,
  className = "",
  charClassName = "",
  delay = 0,
  staggerDelay = 0.02,
  animation = "fadeUp",
}: SplitTextProps) => {
  const [mounted, setMounted] = useState(false);
  const anim = animations[animation];

  useEffect(() => {
    setMounted(true);
  }, []);

  const words = text.split(" ");
  let charIndex = 0;

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, i) => {
            const currentCharIndex = charIndex++;
            return (
              <motion.span
                key={i}
                className={`inline-block ${charClassName}`}
                initial={anim.initial}
                animate={mounted ? anim.animate : anim.initial}
                transition={{
                  duration: 0.4,
                  delay: delay + currentCharIndex * staggerDelay,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                {char}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
};
