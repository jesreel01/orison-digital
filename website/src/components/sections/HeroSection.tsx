"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import CtaButton from "../ui/cta-button";
import { Button } from "../ui";

export const HeroSection = () => {
  return (
    <section className="w-full h-[calc(100vh-68px)] overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative">
      {/*Scroll Down on the leftside absolute*/}
      {/* Scroll Down indicator on the left side */}
      <motion.div
        className="absolute left-18 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xl font-medium text-foreground/70 -rotate-90 whitespace-nowrap">
            Scroll
          </span>
          <motion.div
            className="w-[2px] h-18  relative overflow-hidden mt-5"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 1 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-18 bg-foreground/60"
              initial={{ scaleY: 0, y: 0 }}
              animate={{
                scaleY: [0, 1, 1, 0],
                y: ["0%", "0%", "0%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 1],
              }}
              style={{
                transformOrigin: "top",
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Hero*/}
      <div className="flex flex-col w-full max-w-7xl space-y-14">
        <div className="flex flex-col justify-center items-center z-50 pointer-events-auto">
          <motion.h1
            className="flex flex-col text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center items-center leading-tight tracking-tight"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
          >
            <span className="text-foreground/80">We help business</span>
            <TextRotate
              texts={["build", "ship", "scale"]}
              mainClassName="overflow-hidden text-violet-600 py-0 rounded-xl pl-3"
              staggerDuration={0.03}
              staggerFrom="last"
              rotationInterval={3000}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </motion.h1>
        </div>

        <div className="flex justify-end w-full px-4 max-w-6xl">
          <div className="flex flex-col space-y-14 w-full max-w-xl">
            <p className="w-full text-xl leading-10">
              We are Orison Digital, a software development company specializing in custom business
              solutions, internal tooling, dashboards, and automation to help businesses streamline
              their operations.
            </p>

            <div className="flex flex-row justify-start space-x-6 items-center">
              {/* <CtaButton>Get Quote</CtaButton> */}
              <Button>Book Free Strategy</Button>
              <div>
                30-minute strategy call
              </div>
              {/* <div className="relative flex flex-col items-center group cursor-pointer select-none h-min">
                <a
                  className="uppercase tracking-widest text-[1.1rem] font-medium text-foreground/90 text-center w-full pb-1"
                  href="#"
                  tabIndex={0}
                >
                  Learn More
                </a>
                <span className="absolute inset-x-1 bottom-0 h-[1px] bg-foreground/30"></span>
                <span className="absolute inset-x-1 bottom-0 h-[1px] bg-foreground transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
