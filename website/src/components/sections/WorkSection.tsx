"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    title: "roomix",
    subtitle: "Roomie furniture e-commerce store",
    description: "Custom-made Ruby furniture, from artisan woodworkers to your home",
    bgColor: "bg-gradient-to-br from-pink-100 to-rose-50",
    textColor: "text-rose-600",
    rotation: "-rotate-3",
  },
  {
    title: "InstaApply",
    subtitle: "Job hunt smarter, not harder",
    description: "With InstaApply automation",
    bgColor: "bg-gradient-to-br from-purple-100 to-indigo-50",
    textColor: "text-indigo-600",
    rotation: "rotate-2",
  },
  {
    title: "CyberSecurity",
    subtitle: "Stay Ahead of Cyber Threats",
    description: "With expert insights",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    textColor: "text-blue-600",
    rotation: "-rotate-1",
  },
];

export const WorkSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section id="work" ref={containerRef} className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.p
            className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Work with us
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Handpicked examples of our best work.{" "}
            <span className="text-slate-400">Delivering high impact, at lightning speed.</span>
          </motion.h2>
        </div>

        <motion.div
          className="flex gap-8 pb-8"
          style={{ x }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`flex-shrink-0 w-[400px] md:w-[500px] aspect-[4/3] ${project.bgColor} rounded-[40px] p-10 flex flex-col justify-between shadow-lg ${project.rotation} hover:rotate-0 transition-all duration-500 hover:shadow-2xl cursor-pointer`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <h3 className={`text-6xl font-bold ${project.textColor} mb-4`}>
                  {project.title}
                </h3>
              </div>

              <div>
                <p className="text-lg font-semibold text-slate-900 mb-2">
                  {project.subtitle}
                </p>
                <p className="text-slate-600">{project.description}</p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-500">View Project</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
