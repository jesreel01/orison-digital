import React from 'react';
import { Button } from '@/components/ui';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={`py-20 px-4 text-center ${className || ''}`}>
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to{' '}
          <span className="text-primary">Orison Digital</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We create digital experiences that drive results. From web development 
          to digital marketing, we help businesses thrive in the digital world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
