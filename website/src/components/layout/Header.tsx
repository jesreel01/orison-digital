import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { NAVIGATION_ITEMS } from '@/constants';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 ${className || ''}`}>
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
        >
          <div className="flex items-center space-x-2">
            {/* Logo icon/symbol can go here */}
            <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Orison Digital
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 text-sm font-medium text-foreground/80 transition-all duration-200 hover:text-foreground hover:bg-accent/50 rounded-md group"
            >
              {item.label}
              <span className="absolute inset-x-1 bottom-0 h-0.5 bg-foreground transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button and Mobile Menu */}
        <div className="flex items-center space-x-3">
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* CTA Button */}
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Navigation (hidden by default) */}
      <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-2">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-accent/50 rounded-md"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-border/40">
              <Button variant="outline" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
