"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "60-min call to discuss your idea",
    duration: "Day 1",
    startPercent: 0,
    widthPercent: 15,
  },
  {
    number: "02",
    title: "Design Delivery",
    description: "Figma designs delivered",
    duration: "Days 2-7",
    startPercent: 15,
    widthPercent: 25,
  },
  {
    number: "03",
    title: "Development",
    description: "Building your app",
    duration: "Days 8-21",
    startPercent: 40,
    widthPercent: 40,
  },
  {
    number: "04",
    title: "Project Delivery",
    description: "MVP ready for launch",
    duration: "Days 22-28",
    startPercent: 80,
    widthPercent: 20,
  },
];

const timelineMarkers = ["Week 1", "Week 2", "Week 3", "Week 4"];

export const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.3", "end 0.7"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = Math.floor(latest * 4.5);
    setActiveStep(Math.min(4, step));
  });

  return (
    <section ref={containerRef} className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sm font-medium text-purple-600 uppercase tracking-widest mb-2 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your roadmap to launch
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From idea to MVP in just 4 weeks. Track your project&apos;s journey.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:flex justify-between mb-4 px-48">
            {timelineMarkers.map((marker, i) => (
              <motion.span
                key={marker}
                className="text-sm font-medium text-slate-400"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {marker}
              </motion.span>
            ))}
          </div>

          <div className="hidden md:block absolute top-12 left-48 right-6 bottom-0 pointer-events-none">
            {[0, 25, 50, 75, 100].map((pos) => (
              <div
                key={pos}
                className="absolute top-0 bottom-0 w-px bg-slate-100"
                style={{ left: `${pos}%` }}
              />
            ))}
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <TimelineRow
                key={step.number}
                step={step}
                index={index}
                scrollYProgress={scrollYProgress}
                isActive={activeStep === index}
                isCompleted={activeStep > index}
              />
            ))}
          </div>

          <motion.div
            className="mt-12 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeStep >= i ? "bg-purple-600" : "bg-slate-200"
                } ${activeStep === i ? "w-8" : ""}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TimelineRow = ({
  step,
  index,
  scrollYProgress,
  isActive,
  isCompleted,
}: {
  step: (typeof steps)[0];
  index: number;
  scrollYProgress: any;
  isActive: boolean;
  isCompleted: boolean;
}) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const barProgress = useTransform(
    scrollYProgress,
    [index * 0.25, (index + 0.5) * 0.25, (index + 1) * 0.25],
    [0, 0.6, 1]
  );

  const barWidth = useTransform(barProgress, (v) => `${v * step.widthPercent}%`);

  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, index * 0.25 - 0.1), index * 0.25, (index + 1) * 0.25],
    [0.4, 1, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [Math.max(0, index * 0.25 - 0.05), index * 0.25 + 0.05],
    [0.98, 1]
  );

  const getStatus = () => {
    if (isCompleted) return "Completed";
    if (isActive) return "In Progress";
    return "Upcoming";
  };

  return (
    <motion.div
      ref={rowRef}
      className={`relative flex items-center gap-6 p-4 rounded-2xl transition-all duration-300 ${
        isActive ? "bg-slate-50" : "bg-transparent"
      }`}
      style={{ opacity, scale }}
    >
      <div className="flex-shrink-0 w-40 md:w-44">
        <div className="flex items-center gap-3">
          <motion.div
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
              isCompleted || isActive
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                : "bg-slate-100 text-slate-500"
            }`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {isCompleted ? "✓" : step.number}
          </motion.div>
          <div>
            <h3 className={`font-bold text-sm md:text-base transition-colors duration-300 ${
              isActive || isCompleted ? "text-slate-900" : "text-slate-600"
            }`}>
              {step.title}
            </h3>
            <p className="text-xs text-slate-400">{step.duration}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 relative h-12 md:h-14">
        <div className="absolute inset-0 bg-slate-100 rounded-xl" />

        <motion.div
          className={`absolute top-0 bottom-0 rounded-xl overflow-hidden transition-all duration-300 ${
            isCompleted || isActive
              ? "bg-purple-600 shadow-lg shadow-purple-500/20"
              : "bg-purple-400"
          }`}
          style={{ 
            left: `${step.startPercent}%`,
            width: isCompleted ? `${step.widthPercent}%` : barWidth 
          }}
          initial={{ width: "0%" }}
        >
          {isActive && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          )}
        </motion.div>
      </div>

      <div className="hidden md:block w-20 text-right">
        <span className={`text-xs font-medium transition-colors duration-300 ${
          isCompleted || isActive ? "text-purple-600" : "text-slate-400"
        }`}>
          {getStatus()}
        </span>
      </div>
    </motion.div>
  );
};

export default ProcessTimeline;

