import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t bg-background ${className || ''}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Orison Digital</h3>
            <p className="text-sm text-muted-foreground">
              Creating digital experiences that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ROUTES.ABOUT} className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SERVICES} className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href={ROUTES.PORTFOLIO} className="text-muted-foreground hover:text-primary">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ROUTES.CONTACT} className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social media links here */}
              <a href="#" className="text-muted-foreground hover:text-primary">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Orison Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
