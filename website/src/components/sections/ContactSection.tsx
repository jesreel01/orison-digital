"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const ContactSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min", });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#ce00ff"
          },
          dark: {
            "cal-brand": "#ce00ff"
          }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <section id="contact" className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
              </span>
              Available for new projects
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Book a call with us
            </h2>
            <p className="text-slate-500 text-lg mb-10">
              Schedule a free consultation to discuss your project and see how we can help.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <Cal
            namespace="30min"
            calLink="jesreel-miole-vb9pss/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "light", }}
          />
        </FadeIn>
      </div>
    </section>
  );
};

