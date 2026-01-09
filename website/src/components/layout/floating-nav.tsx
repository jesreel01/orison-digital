"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ROUTES } from "@/constants";

const navItems = [
  { label: "Service", href: ROUTES.SERVICES },
  { label: "Testimonies", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const FloatingNav = () => {
  // Always visible
  const isVisible = true;
  /* 
  useEffect(() => {
    ... removed scroll logic
  }, []); 
  */

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-end items-center pointer-events-none px-4 md:px-8">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="flex items-center gap-3 pointer-events-auto"
          >
            {/* Main Nav Capsule */}
            <div className="flex items-center bg-white/90 text-slate-900 rounded-full p-1.5 shadow-2xl shadow-slate-200/50 border border-slate-200 backdrop-blur-xl">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 mr-2 pl-2 hover:opacity-80 transition-opacity"
              >
                <img
                  src="/orison-logo.png"
                  alt="Orison Digital"
                  className="h-8 w-auto"
                />
                <span className="font-bold text-sm text-slate-900 hidden sm:block">Orison Digital</span>
              </button>

              <div className="h-4 w-[1px] bg-slate-200 mx-1 hidden sm:block" />

              <nav className="flex items-center">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* CTA Capsule */}
            <a
              href={ROUTES.CONTACT}
              className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full font-medium text-sm shadow-xl hover:bg-slate-800 transition-colors duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <path
                  d="M22 16.92V19.92C22.0011 20.1986 21.9213 20.471 21.769 20.7095C21.6167 20.9481 21.3973 21.1441 21.134 21.2771C20.8706 21.4102 20.5727 21.4754 20.271 21.4661C19.9693 21.4568 19.6747 21.3733 19.418 21.225C16.5726 19.6749 14.0152 17.5583 11.91 15.02C9.97607 13.0645 8.42397 10.7716 7.34 8.24003C7.20233 7.98629 7.12933 7.70425 7.12933 7.42003C7.12933 7.13581 7.20233 6.85377 7.34 6.60003L9.62 3.32003C9.84592 2.99268 10.1691 2.74712 10.5428 2.61895C10.9165 2.49079 11.3211 2.48666 11.697 2.60714C12.3332 2.81061 12.9463 3.08502 13.52 3.42003C14.0725 3.7383 14.4849 4.25845 14.6547 4.87268C14.8245 5.48691 14.7369 6.14041 14.41 6.69003L13.16 8.78003C13.0768 8.91897 13.0294 9.07677 13.0223 9.23863C13.0152 9.4005 13.0485 9.5612 13.119 9.70603C13.8863 11.2372 15.0006 12.5925 16.37 13.66C16.5056 13.7533 16.6575 13.8166 16.8162 13.8459C16.975 13.8753 17.1374 13.8699 17.293 13.83L19.53 13.31C20.1348 13.1673 20.7674 13.2662 21.2984 13.5859C21.8294 13.9056 22.2186 14.4218 22.386 15.03L22 16.92Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Book A Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
