"use client";

import { motion } from "motion/react";
import { FadeIn } from "@/components/ui/fade-in";
import { Button, Input, Textarea } from "@/components/ui";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            Available for new projects
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Tell us about your project
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            We help you build and launch your product in record time.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form className="space-y-4 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1 text-left">
                <label className="text-sm font-medium text-slate-700 ml-1">Name</label>
                <Input placeholder="John Doe" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
              </div>
              <div className="space-y-1 text-left">
                <label className="text-sm font-medium text-slate-700 ml-1">Email</label>
                <Input type="email" placeholder="john@company.com" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
              </div>
            </div>
            
            <div className="space-y-1 text-left">
              <label className="text-sm font-medium text-slate-700 ml-1">Project Details</label>
              <Textarea 
                placeholder="Tell us a bit about what you're building..." 
                className="bg-slate-50 border-slate-200 focus:bg-white transition-colors min-h-[120px]" 
              />
            </div>

            <Button className="w-full text-white py-6 rounded-xl text-lg mt-2">
              Send Message
            </Button>
            
            <p className="text-xs text-slate-400 mt-4">
              By submitting this form, you agree to our terms and privacy policy.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};
