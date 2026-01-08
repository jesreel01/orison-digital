"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ROUTES } from "@/constants";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t border-foreground/10 bg-background ${className || ""}`}
    >
      <div className="w-full px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/favicon.ico"
                alt="Orison Digital"
                width={32}
                height={32}
                className="size-8"
              />
              <span className="text-lg font-bold">Orison Digital</span>
            </div>
            <p className="text-foreground/60 max-w-sm leading-relaxed">
              Custom software solutions helping businesses streamline their
              operations. No fluff, just results.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigate</h4>
            <div className="flex flex-col gap-3">
              <a
                href={ROUTES.SERVICES}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href={ROUTES.WORK}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Work
              </a>
              <a
                href={ROUTES.ABOUT}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href={ROUTES.CONTACT}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@orisondigital.com"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                hello@orisondigital.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/40">
            &copy; {currentYear} Orison Digital. All rights reserved.
          </p>
          <motion.a
            href="#"
            className="flex items-center gap-2 text-sm text-foreground/40 hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to top
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};
