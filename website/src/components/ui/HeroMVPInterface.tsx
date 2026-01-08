"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";

export const HeroMVPInterface = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the cursor
  const cursorX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const cursorY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  // Floating animations for cards
  const rotateX = useTransform(cursorY, [0, 400], [5, -5]);
  const rotateY = useTransform(cursorX, [0, 600], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 } 
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[5/4] flex items-center justify-center perspective-1000 cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/50 to-blue-50/50 rounded-full blur-3xl opacity-50" />

      {/* Main Container */}
      <motion.div
        className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-slate-200/50 border border-white/50"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transition: "transform 0.1s ease-out"
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Abstract App Skeleton Construction */}
        <div className="flex flex-col gap-4 h-full relative">
          
          {/* Complex Header */}
          <motion.div 
            className="flex items-center justify-between border-b border-slate-100 pb-4"
            variants={itemVariants}
          >
             <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-slate-200 animate-pulse" />
                <div className="flex gap-2">
                   <div className="h-2 w-16 bg-slate-200 rounded-full" />
                   <div className="h-2 w-12 bg-slate-100 rounded-full" />
                   <div className="h-2 w-12 bg-slate-100 rounded-full" />
                </div>
             </div>
             <div className="flex gap-2">
                <div className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200" />
                <div className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200" />
             </div>
          </motion.div>

          <div className="flex gap-4 flex-1 min-h-0">
             {/* Sidebar Construction */}
             <div className="w-12 flex flex-col gap-3 py-2 border-r border-slate-100">
                {[1, 2, 3, 4, 5].map(i => (
                   <motion.div 
                     key={i}
                     className="w-8 h-8 rounded-lg bg-slate-200"
                     variants={itemVariants}
                   />
                ))}
             </div>

             {/* Main Content Grid */}
             <div className="flex-1 grid grid-cols-3 gap-3">
                {/* Large Main Feature */}
                <motion.div 
                  className="col-span-2 row-span-2 bg-slate-100 rounded-xl border border-dashed border-slate-300 relative overflow-hidden group"
                  variants={itemVariants}
                >
                   <div className="absolute inset-4 flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                         <div className="h-3 w-1/3 bg-slate-300 rounded" />
                         <div className="h-6 w-16 bg-purple-100 rounded-md" />
                      </div>
                      <div className="flex-1 bg-white rounded-lg border border-slate-200 p-2 shadow-sm flex items-end gap-1">
                         {[40, 70, 50, 90, 60, 80].map((h, i) => (
                            <motion.div 
                              key={i}
                              className="w-full bg-purple-100 rounded-sm"
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 1.5, delay: 2 + i * 0.1, repeat: Infinity, repeatDelay: 3 }}
                            />
                         ))}
                      </div>
                   </div>
                   {/* Construction Overlay */}
                   <div className="absolute inset-0 bg-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-mono text-slate-500">Rendering...</span>
                   </div>
                </motion.div>

                {/* Right Side Widgets */}
                <motion.div 
                  className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm"
                  variants={itemVariants}
                >
                   <div className="flex gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-purple-100" />
                      <div className="flex-1 h-2 my-auto bg-slate-100 rounded" />
                   </div>
                   <div className="space-y-1">
                      <div className="h-1.5 w-full bg-slate-100 rounded" />
                      <div className="h-1.5 w-2/3 bg-slate-100 rounded" />
                   </div>
                </motion.div>

                <motion.div 
                   className="bg-slate-100 rounded-xl border border-dashed border-slate-300" 
                   variants={itemVariants}
                />

                {/* Bottom Row */}
                <motion.div 
                   className="col-span-3 h-24 bg-white border border-slate-200 rounded-xl p-4 flex gap-4 overflow-hidden relative"
                   variants={itemVariants}
                >
                   <div className="w-1/4 h-full bg-slate-100 rounded-lg animate-pulse" />
                   <div className="w-1/4 h-full bg-slate-100 rounded-lg animate-pulse delay-75" />
                   <div className="w-1/4 h-full bg-slate-100 rounded-lg animate-pulse delay-150" />
                   <div className="w-1/4 h-full bg-slate-100 rounded-lg animate-pulse delay-200" />
                   

                </motion.div>
             </div>
          </div>

          {/* Process Timeline Bar */}
          <motion.div 
            className="mt-auto pt-6 border-t border-slate-100/50"
            variants={itemVariants}
          >
            <div className="flex justify-between items-center relative">
               {/* Base Timeline Line */}
               <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10" />
               
               {/* Animated Progress Line */}
               <motion.div 
                 className="absolute top-1/2 left-0 h-0.5 bg-purple-500 -z-10"
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
               />
               
               {/* Steps */}
               {[
                 { label: "Discovery", delay: 0 },
                 { label: "Design", delay: 1 },
                 { label: "Development", delay: 2 },
                 { label: "Delivery", delay: 3 },
               ].map((step, i) => (
                 <div key={step.label} className="flex flex-col items-center gap-2 bg-white px-1 z-10">
                    <motion.div 
                      className="w-3 h-3 rounded-full border-2 bg-white border-slate-200"
                      animate={{ 
                        backgroundColor: ["#ffffff", "#9333ea", "#9333ea"], // White -> Purple -> Purple
                        borderColor: ["#e2e8f0", "#9333ea", "#9333ea"],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        times: [0, 0.1, 1], // Quick activation
                        delay: step.delay,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                    <motion.span 
                      className="text-[10px] font-bold text-slate-400"
                      animate={{ color: ["#94a3b8", "#9333ea", "#0f172a"] }}
                      transition={{ 
                        duration: 4, 
                        delay: step.delay,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                       {step.label}
                    </motion.span>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Custom Cursor Overlay */}
      {isHovered && (
        <motion.div
          className="absolute top-0 left-0 pointer-events-none z-50 flex items-start"
          style={{ x: cursorX, y: cursorY }}
        >
          {/* Cursor Graphic */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-purple-600 drop-shadow-md relative z-10 -ml-1 -mt-1"
          >
            <path
              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 10 }}
            className="bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded-md rounded-tl-none shadow-lg whitespace-nowrap"
          >
            Building
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
