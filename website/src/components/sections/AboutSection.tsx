"use client";

import { motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "What's included in each package?",
    answer: "Each package includes design, development, testing, and deployment. We also provide ongoing support.",
  },
  {
    question: "Will I receive regular updates?",
    answer: "Yes! We provide weekly updates via Slack or email, and you'll have access to our project management tool.",
  },
  {
    question: "What is your tech-stack?",
    answer: "We primarily use Next.js, React, TypeScript, Tailwind CSS, and Node.js for full-stack applications.",
  },
  {
    question: "How does unlimited requests work?",
    answer: "You can submit as many requests as you'd like, and we'll work through them one at a time in priority order.",
  },
  {
    question: "Can I opt for design only?",
    answer: "Absolutely! We offer design-only packages if you have your own development team.",
  },
  {
    question: "What's your payment structure?",
    answer: "We offer flexible payment plans: 50% upfront, 50% on delivery, or monthly subscriptions for ongoing work.",
  },
  {
    question: "Can I get support for longer?",
    answer: "Yes, we offer extended support packages from 3 months to 1 year depending on your needs.",
  },
];

export const AboutSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Startups worldwide have boosted productivity working with Orison Digital
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="bg-purple-600 text-white rounded-[32px] p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg mb-6 leading-relaxed">
                "Orison Digital seamlessly integrated into our company as a custom platform in just weeks, proactively bringing valuable ideas and suggestions to the table. Their landing page revved up to a 50% boost in conversions. Highly recommended!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  👤
                </div>
                <div>
                  <div className="font-semibold">Alex Kaier</div>
                  <div className="text-sm text-white/70">CEO, Startup Inc</div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  text: "Orison Digital did an incredible job on my new communication site and helped pilot team for their quality and skills. 10/10, Highly recommend!",
                  author: "Sarah Chen",
                  role: "Founder, TechCo",
                },
                {
                  text: "Orison Digital has been my main developer for designing and solving status errors. Looking to work more!",
                  author: "Mike Johnson",
                  role: "CTO, AppWorks",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-50 rounded-[24px] p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-slate-700 mb-4">{testimonial.text}</p>
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Got Questions? We've Got Answers
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </motion.svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-slate-600">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
