"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    text: "Orison Digital seamlessly integrated into our company as a custom platform in just weeks, proactively bringing valuable ideas and suggestions to the table. Their landing page revved up to a 50% boost in conversions. Highly recommended!",
    author: "Alex Kaier",
    role: "CEO, Startup Inc",
    featured: true,
  },
  {
    text: "Orison Digital did an incredible job on my new communication site and helped pilot team for their quality and skills. 10/10, Highly recommend!",
    author: "Sarah Chen",
    role: "Founder, TechCo",
    featured: false,
  },
  {
    text: "Orison Digital has been my main developer for designing and solving status errors. Looking to work more!",
    author: "Mike Johnson",
    role: "CTO, AppWorks",
    featured: false,
  },
];

export const TestimonialsSection = () => {
  const featuredTestimonial = testimonials.find((t) => t.featured);
  const regularTestimonials = testimonials.filter((t) => !t.featured);

  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Startups worldwide have boosted productivity working with Orison Digital
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredTestimonial && (
              <motion.div
                className="bg-purple-600 text-white rounded-[32px] p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg mb-6 leading-relaxed">
                  "{featuredTestimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    👤
                  </div>
                  <div>
                    <div className="font-semibold">{featuredTestimonial.author}</div>
                    <div className="text-sm text-white/70">{featuredTestimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="space-y-6">
              {regularTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-50 rounded-[24px] p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-slate-700 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                      👤
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.author}</div>
                      <div className="text-xs text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
