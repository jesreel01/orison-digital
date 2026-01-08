"use client";

import { motion, useInView } from "motion/react";
import { useRef, useMemo } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "words" | "characters";
}

export const TextReveal = ({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  once = true,
  as: Component = "p",
  splitBy = "words",
}: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  const elements = useMemo(() => {
    if (splitBy === "characters") {
      return text.split("");
    }
    return text.split(" ");
  }, [text, splitBy]);

  return (
    <Component className={className} ref={ref as any}>
      {elements.map((element, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + index * staggerDelay,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {element}
            {splitBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};
