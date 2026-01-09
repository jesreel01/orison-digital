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
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
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
