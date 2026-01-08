"use client";

import { motion } from "motion/react";
import { useState } from "react";

const services = [
  {
    title: "MVP Development",
    description: "Full-stack development from concept to deployment. We help you validate your idea quickly with a production-ready application, typically delivered within 2-4 weeks.",
    features: ["Next.js/React", "Node.js APIs", "Cloud Deploy"],
    featured: true,
  },
  {
    title: "Web Design",
    description: "User-focused designs that work well on all devices. We create clean, modern interfaces optimized for usability and conversions.",
    features: ["Figma to Code", "Responsive"],
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile applications for iOS and Android using React Native. Single codebase with native feel and automated deployment.",
    features: ["Cross-platform", "CI/CD"],
  },
  {
    title: "Web Development",
    description: "Modern, performant web applications built with scalable architecture. From simple websites to complex platforms.",
    features: ["Full-Stack", "APIs"],
  },
];

const ServiceCard = ({ service, index }: { service: (typeof services)[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`rounded-2xl p-6 ${
        service.featured
          ? "bg-purple-600 text-white col-span-1 md:col-span-2"
          : "bg-slate-50 text-slate-900 border border-slate-200"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -3, scale: 1.01 }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex-1">
          <h3 className={`text-xl font-bold mb-1 ${service.featured ? "text-white" : "text-slate-900"}`}>
            {service.title}
          </h3>
          <p className={`text-sm ${service.featured ? "text-white/80" : "text-slate-500"}`}>
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-purple-600 uppercase tracking-widest">
            What we offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Everything you need to launch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
