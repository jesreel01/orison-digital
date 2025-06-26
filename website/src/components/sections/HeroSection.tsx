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
      <div className="flex flex-col justify-center items-center z-50 pointer-events-auto m-8">
        <motion.h1
          className="flex flex-col text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center items-center leading-tight tracking-tight w-5xl"
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
      <div className="space-y-14 w-5xl self-end">
        <div className="max-w-xl text-xl leading-10">
          We are Orison Digital, a software development company specializing in custom business
          solutions, internal tooling, dashboards, and automation to help businesses streamline
          their operations.
        </div>
        <div className="flex flex-row items-center justify-start space-x-8">
          <CtaButton>Book now</CtaButton>
          <div className="relative flex flex-col items-center group cursor-pointer select-none">
            <a
              className="uppercase tracking-widest text-[1.1rem] font-medium text-foreground/90 text-center w-full pb-1"
              href="#"
              tabIndex={0}
            >
              Work with us
            </a>
            <span className="absolute inset-x-1 bottom-0 h-[1px] bg-foreground/30"></span>
            <span className="absolute inset-x-1 bottom-0 h-[1px] bg-foreground transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
