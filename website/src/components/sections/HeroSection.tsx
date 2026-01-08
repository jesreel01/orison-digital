"use client";

import { motion } from "motion/react";
import { HeroMVPInterface } from "@/components/ui";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-20 pb-32 md:py-0 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative z-10 order-2 lg:order-1">

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-slate-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            We build high-quality <span className="text-purple-600">MVPs</span> for early-stage startups.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turn your concept into a working product. We help founders design and develop scalable web applications ready for their first users.
          </motion.p>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="#contact" className="group bg-purple-600 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2">
              <span>Book a call</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="group-hover:rotate-45 transition-transform duration-300"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 hidden lg:flex justify-center lg:justify-end relative">
          <HeroMVPInterface />
        </div>
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
    </section>
  );
};
