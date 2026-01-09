"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

type Testimonial = {
  id: string;
  stat: string;
  statLabel: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  isDark?: boolean;
  logoUrl?: string;
};

const LEFT_CARD: Testimonial = {
  id: "spotify",
  stat: "3 weeks",
  statLabel: "From idea to launch",
  quote:
    '"Orison Digital built our entire web platform from scratch. Their expertise in modern tech stacks and clean code helped us launch in just 3 weeks. Exceptional work!"',
  name: "David Callahan",
  role: "Head of Product, TechFlow",
  company: "TechFlow",
  logoUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=David",
};

const TOP_RIGHT_CARDS: Testimonial[] = [
  {
    id: "google",
    stat: "",
    statLabel: "",
    quote:
      "\"Orison Digital transformed our vision into a beautiful, functional MVP. Their design thinking and development speed allowed us to get to market fast. Highly recommend!\"",
    name: "Sarah Mitchel",
    role: "Founder, StartupLab",
    company: "StartupLab",
    logoUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah",
    isDark: false,
  },
  {
    id: "microsoft",
    stat: "",
    statLabel: "",
    quote:
      "\"Working with Orison Digital was seamless. They built our custom dashboard with pixel-perfect design and robust functionality. The team's attention to detail is unmatched.\"",
    name: "Michael Chen",
    role: "CTO, DataSync",
    company: "DataSync",
    logoUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Michael",
    isDark: true,
  },
];

const BOTTOM_RIGHT_CARDS: Testimonial[] = [
  {
    id: "nexa",
    stat: "",
    statLabel: "",
    quote:
      '"Orison Digital delivered a high-performance web app that exceeded our expectations. Their modern approach to development and design is exactly what we needed!"',
    name: "James Patterson",
    role: "CEO, InnovateCo",
    company: "InnovateCo",
    isDark: true,
    logoUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=James",
  },
  {
    id: "ember",
    stat: "",
    statLabel: "",
    quote:
      '"From MVP to full product, Orison Digital was with us every step. Their UI/UX expertise and clean code practices helped us build a product our users love."',
    name: "Danielle Reyes",
    role: "Product Lead, GrowthHub",
    company: "GrowthHub",
    isDark: false,
    logoUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Danielle",
  },
];

const QuoteIcon = ({ isDark }: { isDark?: boolean }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    className={`mb-2 ${isDark ? "text-purple-200" : "text-red-500"}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V11ZM10 11V13C10 14.65 9.05 17.5 6 19M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V11ZM20 11V13C20 14.65 19.05 17.5 16 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CardContent = ({ data, size = "default" }: { data: Testimonial; size?: "default" | "small" }) => {
  const isDark = data.isDark;
  const isSmall = size === "small";
  return (
    <div
      className={`h-full flex flex-col justify-between p-5 md:p-6 rounded-[24px] 
      ${
        isDark
          ? "bg-purple-600 text-white"
          : "bg-white text-gray-900 border border-gray-100 shadow-sm"
      }`}
    >
      <div>
        {data.stat && (
          <div className="mb-3">
            <h3 className={`font-bold tracking-tighter mb-1 ${isSmall ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"}`}>
              {data.stat}
            </h3>
            <p className={`font-medium text-gray-500 ${isSmall ? "text-xs" : "text-xs"}`}>{data.statLabel}</p>
          </div>
        )}

        <QuoteIcon isDark={isDark} />

        <p
          className={`font-medium leading-relaxed ${
            isSmall ? "text-xs md:text-sm" : "text-sm md:text-base"
          } ${
            isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {data.quote}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-3">
          <img
            src={data.logoUrl}
            alt={data.name}
            className={`rounded-full bg-gray-200 object-cover border border-gray-200 ${isSmall ? "w-8 h-8" : "w-9 h-9"}`}
          />
          <div>
            <h4 className={`font-bold leading-tight ${isSmall ? "text-xs" : "text-sm"}`}>{data.name}</h4>
            <p
              className={`mt-0.5 ${
                isSmall ? "text-[10px]" : "text-xs"
              } ${
                isDark ? "text-purple-100" : "text-gray-500"
              }`}
            >
              {data.role}
            </p>
          </div>
        </div>
        <div className="opacity-30">
          <div
            className={`rounded-full ${isSmall ? "w-5 h-5" : "w-6 h-6"} ${isDark ? "bg-white" : "bg-black"}`}
          />
        </div>
      </div>
    </div>
  );
};

const Slider = ({
  items,
  direction,
  interval = 5000,
  initialDelay = 0,
}: {
  items: Testimonial[];
  direction: "horizontal" | "vertical";
  interval?: number;
  initialDelay?: number;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }, initialDelay);
    
    return () => clearTimeout(initialTimer);
  }, [items.length, interval, initialDelay]);

  const variants = {
    enter: {
      x: direction === "horizontal" ? "100%" : 0,
      y: direction === "vertical" ? "100%" : 0,
      opacity: 0,
    },
    center: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    exit: {
      x: direction === "horizontal" ? "-100%" : 0,
      y: direction === "vertical" ? "-100%" : 0,
      opacity: 0,
    },
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[32px]">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={index}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <CardContent data={items[index]} size="small" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="w-full bg-[#F3F4F6] py-16 md:py-20 px-4 md:px-12 font-sans"
    >
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Startups worldwide have boosted productivity working with Orison Digital
        </h2>
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 h-[550px]">
          <div className="lg:col-span-7 h-full">
            <div className="h-full rounded-[24px] overflow-hidden">
              <CardContent data={LEFT_CARD} />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 h-full">
            <div className="flex-1 min-h-0">
              <Slider items={TOP_RIGHT_CARDS} direction="horizontal" interval={7000} />
            </div>

            <div className="flex-[1.2] min-h-0">
              <Slider
                items={BOTTOM_RIGHT_CARDS}
                direction="vertical"
                interval={7000}
                initialDelay={3500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
