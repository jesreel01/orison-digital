"use client";

import { motion, Variants } from "motion/react";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayStart?: number;
  once?: boolean;
  amount?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerDelay: number; delayStart: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.delayStart,
    },
  }),
};

const StaggerContainer = ({
  children,
  className,
  staggerDelay = 0.1,
  delayStart = 0,
  once = true,
  amount = 0.3,
}: StaggerContainerProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={containerVariants}
      custom={{ staggerDelay, delayStart }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

const itemVariants: Variants = {
  hidden: (custom: { direction: string; distance: number }) => {
    const getPosition = () => {
      switch (custom.direction) {
        case "up":
          return { y: custom.distance, x: 0 };
        case "down":
          return { y: -custom.distance, x: 0 };
        case "left":
          return { x: custom.distance, y: 0 };
        case "right":
          return { x: -custom.distance, y: 0 };
        default:
          return { x: 0, y: 0 };
      }
    };
    return { opacity: 0, ...getPosition() };
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const StaggerItem = ({
  children,
  className,
  direction = "up",
  distance = 24,
}: StaggerItemProps) => {
  return (
    <motion.div
      className={className}
      variants={itemVariants}
      custom={{ direction, distance }}
    >
      {children}
    </motion.div>
  );
};

export { StaggerContainer, StaggerItem };
